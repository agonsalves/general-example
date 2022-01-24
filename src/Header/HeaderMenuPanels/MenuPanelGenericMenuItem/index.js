import PropTypes                      from 'prop-types'
import React, {useState}              from 'react'
import MotionDiv                      from 'Shared/MotionDiv'
import LinkSwitch                     from 'Shared/LinkSwitch'
import {isNavItemActive}              from 'utils/isNavItemActive'
import {parseHtml}                    from 'utils/parseHtml'
import {absoluteToRelativeUrl}        from 'utils/url'
import MenuPanelGenericParentMenuItem from 'Header/HeaderMenuPanels/MenuPanelGenericParentMenuItem'
import {
    genericMenuItemStyle,
    genericMenuItemWrapperStyle
}                                     from 'Header/HeaderMenuPanels/MenuPanelGenericMenuItem/styles'

const MenuPanelGenericMenuItem = ({item, post}) => {
    const [isSubMenuExpanded, setIsSubMenuExpanded] = useState(false)
    const additionalProps = {
        type: 'nav',
        target: item.target,
        url: absoluteToRelativeUrl(item.url),
        isActive: isNavItemActive(item, post)
    }

    return (
        <MotionDiv theme={genericMenuItemWrapperStyle}>
            {(item.children && (
                <MenuPanelGenericParentMenuItem
                    isSubMenuExpanded={isSubMenuExpanded}
                    item={item}
                    additionalProps={additionalProps}
                    post={post}
                    setIsSubMenuExpanded={setIsSubMenuExpanded}
                />
            )) || (
                <LinkSwitch
                    title={item.title}
                    data={item.classes[0]}
                    children={parseHtml(item.title)}
                    theme={genericMenuItemStyle(additionalProps.isActive)}
                    {...additionalProps}
                />
            )}
        </MotionDiv>
    )
}

MenuPanelGenericMenuItem.propTypes = {
    item: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
}


export default MenuPanelGenericMenuItem
