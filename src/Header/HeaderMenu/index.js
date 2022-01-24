import {headerMenuPanelContext} from 'Controllers/HeaderMenuPanelController'
import {useAnimation}           from 'framer-motion'
import {headerMenuVariants}     from 'Header/HeaderMenu/animations'
import PropTypes                from 'prop-types'
import React, {
    memo,
    useContext,
    useEffect,
    useState
}                               from 'react'
import {connect}                from 'react-redux'
import Div                      from 'Shared/Div'
import MotionDiv                from 'Shared/MotionDiv'
import Overlay                  from 'Shared/Overlay'
import {
    isBlog,
    isTablet
}                               from 'utils/flags'
import HeaderMenuItem           from './HeaderMenuItem'
import MainSiteNav              from './MainSiteNav'
import {
    headerMenuStyle,
    underlineAnimationStyle
}                               from './styles'
import ToggleGlobalSearch       from './ToggleGlobalSearch'

const HeaderMenu = memo(({menu, post}) => {
        const [measurements, setMeasurements] = useState({})
        const underlineAnimation = useAnimation()
        const {isGlobalSearchOpen} = useContext(headerMenuPanelContext)


        useEffect(() => {
            if (Object.keys(measurements).length === menu.length) {
                let target = menu.findIndex(item => measurements[item.ID].isActive)
                if (target >= 0) {
                    let shortenedArray = menu.slice(0, target)
                    let highlightedItem = measurements[menu[target].ID]
                    let barLength = highlightedItem.inner
                    let startDistance = 0
                    shortenedArray.forEach(item => startDistance += measurements[item.ID].outer)
                    startDistance += (highlightedItem.outer - highlightedItem.inner) / 2

                    underlineAnimation.start({width: barLength, x: startDistance, transition: {ease: 'easeInOut'}})
                } else {
                    underlineAnimation.start({width: 0, x: 0, transition: {ease: 'easeInOut'}})
                }
            }
        }, [underlineAnimation, measurements, menu])

        return (
            <Div theme={headerMenuStyle} as="nav" aria-label="Main Site">
                {(!isBlog(post) && (
                    <>
                        <MotionDiv
                            theme={{overflow: 'hidden'}}
                            animate={isTablet() && isGlobalSearchOpen ? 'animate' : 'initial'}
                            variants={headerMenuVariants}
                        >
                            <MotionDiv
                                animate={underlineAnimation}
                                theme={underlineAnimationStyle(isTablet() && isGlobalSearchOpen)}
                            />
                            <Div theme={headerMenuStyle.menu}>
                                {menu.map((item, i) =>
                                    <HeaderMenuItem
                                        key={i}
                                        item={item}
                                        menu={menu}
                                        setMeasurements={setMeasurements}
                                    />
                                )}
                            </Div>
                        </MotionDiv>
                        <ToggleGlobalSearch post={post}/>
                        <Overlay isOpen={isGlobalSearchOpen} theme={headerMenuStyle.overlay}/>
                    </>
                )) || (
                    <MainSiteNav post={post}/>
                )}
            </Div>
        )
    }
)

HeaderMenu.propTypes = {
    menu: PropTypes.array.isRequired,
    post: PropTypes.object.isRequired
}

HeaderMenu.defaultProps = {
    menu: []
}

const mapStateToProps = ({site}) => ({
    menu: site.menus.locations?.['header-menu'],
})

export default connect(mapStateToProps)(HeaderMenu)