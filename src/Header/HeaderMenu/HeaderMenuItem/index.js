import {headerMenuPanelContext} from 'Controllers/HeaderMenuPanelController'
import PropTypes                from 'prop-types'
import React, {
    memo,
    useContext,
    useEffect,
    useRef
}                               from 'react'
import Div                      from 'Shared/Div'
import LinkSwitch               from 'Shared/LinkSwitch'
import {isNavItemActive}        from 'utils/isNavItemActive'
import {absoluteToRelativeUrl}  from 'utils/url'
import useMeasure               from 'utils/useMeasure'
import withPost                 from 'utils/withPost'
import {globals}                from 'variables/styles'
import {headerMenuLinkStyle}    from './styles'


const HeaderMenuItem = memo(({item, post, setMeasurements}) => {
    const {setPanel} = useContext(headerMenuPanelContext)
    const panelName = item.classes.filter(i => i.includes('menu-'))[0]
    const inner = useRef()
    const outer = useRef()
    const {width: innerWidth} = useMeasure(inner)
    const {width: outerWidth} = useMeasure(outer)

    let additionalProps = {}
    if (item.url)
        additionalProps = {
            type: 'nav',
            target: item.target,
            url: absoluteToRelativeUrl(item.url),
            isActive: isNavItemActive(item, post)
        }

    useEffect(() => {
        if (!!innerWidth && !!outerWidth)
            setMeasurements(current => ({
                ...current, [item.ID]: {
                    inner: innerWidth,
                    outer: outerWidth,
                    isActive: isNavItemActive(item, post)
                }
            }))

    }, [innerWidth, item.ID, outerWidth, setMeasurements, item, post])

    return (
        <Div
            theme={{display: 'flex'}}
            onClick={() => {
                setPanel({
                    name: panelName,
                    id: item.ID
                })
                globals.hideBodyOverflow()
            }}
        >
            <span ref={outer}>
                <LinkSwitch
                    theme={headerMenuLinkStyle}
                    title={item.title}
                    data={panelName}
                    {...additionalProps}
                >
                    <span ref={inner}>{item.title}</span>
                </LinkSwitch>
            </span>
        </Div>
    )
})

HeaderMenuItem.displayName = 'HeaderMenuItem'

HeaderMenuItem.propTypes = {
    item: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
}

HeaderMenuItem.defaultProps = {
    theme: {},
}

export default withPost(HeaderMenuItem)