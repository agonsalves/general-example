import PropTypes                                      from 'prop-types'
import React                                          from 'react'
import {genericSubMenuVariants}                       from 'Header/HeaderMenuPanels/animations'
import MotionDiv                                      from 'Shared/MotionDiv'
import LinkSwitch                                     from 'Shared/LinkSwitch'
import {isNavItemActive}                              from 'utils/isNavItemActive'
import {parseHtml}                                    from 'utils/parseHtml'
import {absoluteToRelativeUrl}                        from 'utils/url'
import {
    genericMenuSubItemStyle,
    genericSubMenuStyle
}                                                     from './styles'

const MenuPanelGenericSubMenu = ({isSubMenuExpanded, item, setIsSubMenuExpanded, post}) =>
    <MotionDiv
        variants={genericSubMenuVariants}
        initial="initial"
        animate={isSubMenuExpanded ? 'expanded' : 'initial'}
        theme={genericSubMenuStyle}
    >
        {item.children && item.children.map((subItem, key) => {
            let additionalProps = {
                type: 'nav',
                target: subItem.target,
                url: absoluteToRelativeUrl(subItem.url),
                isActive: isNavItemActive(subItem, post)
            }

            return (
                <LinkSwitch
                    title={subItem.title}
                    data={subItem.classes[0]}
                    children={parseHtml(subItem.title)}
                    key={key}
                    theme={genericMenuSubItemStyle}
                    onFocus={() => setIsSubMenuExpanded(true)}
                    {...additionalProps}
                />
            )
        })}
    </MotionDiv>


MenuPanelGenericSubMenu.propTypes = {
    item: PropTypes.object.isRequired,
    isSubMenuExpanded: PropTypes.bool.isRequired,
    setIsSubMenuExpanded: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

export default MenuPanelGenericSubMenu

