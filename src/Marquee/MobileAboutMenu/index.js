import PropTypes         from 'prop-types'
import React, {
    memo,
    useEffect,
    useState
}                        from 'react'
import Div               from 'Shared/Div'
import Icon              from 'Shared/Icon'
import LinkSwitch        from 'Shared/LinkSwitch'
import {
    mobileMicrositeMenuStyle,
    mobileTopMenuStyle
}                        from 'Shared/MobileMicrositeMenu/styles'
import MotionDiv         from 'Shared/MotionDiv'
import {isNavItemActive} from 'utils/isNavItemActive'
import {angleDown}       from 'variables/iconLibrary'
import {
    aboutMicrositeMenuInnerWrapperStyle,
    aboutMicrositeMenuItemStyle
}                        from './styles'

const MobileAboutMenu = memo(({post}) => {
        const [isOpen, setIsOpen] = useState(false)

        const ToggleButton = () => (
            <Div
                theme={mobileTopMenuStyle.toggle}
                onClick={() => setIsOpen(flag => !flag)}
            >
                <Icon
                    icon={angleDown}
                    theme={{
                        ...mobileTopMenuStyle.toggleIcon,
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                />
            </Div>
        )

        useEffect(() => {
            setIsOpen(false)
        }, [post])

        return (
            <Div theme={mobileMicrositeMenuStyle}>
                <ToggleButton/>
                <MotionDiv
                    initial="closed"
                    exit="exit"
                    animate={isOpen ? 'open' : 'closed'}
                    variants={{
                        open: {height: 'auto'},
                        closed: {height: 0},
                    }}
                    transition={{ease: 'easeOut'}}
                    theme={{...mobileTopMenuStyle, ...aboutMicrositeMenuInnerWrapperStyle}}
                >
                    {post.menu_above_content.items && post.menu_above_content.items.map(menuItem =>
                        <LinkSwitch
                            url={menuItem.url}
                            children={menuItem.title}
                            key={menuItem.ID}
                            theme={aboutMicrositeMenuItemStyle}
                            type="nav"
                            isActive={isNavItemActive(menuItem, post)}
                        />
                    )}
                </MotionDiv>
            </Div>
        )
    }
)

MobileAboutMenu.displayName = 'MobileAboutMenu'

MobileAboutMenu.propTypes = {
    post: PropTypes.object.isRequired,
    theme: PropTypes.object,
}

MobileAboutMenu.defaultProps = {
    theme: {},
}

export default MobileAboutMenu