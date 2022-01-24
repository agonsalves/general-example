import PropTypes               from 'prop-types'
import React, {useEffect}      from 'react'
import Div                     from 'Shared/Div'
import Icon                    from 'Shared/Icon'
import {
    chevronCircleDown,
    chevronCircleUp
}                              from 'variables/iconLibrary'
import {genericMenuItemStyle}  from 'Header/HeaderMenuPanels/MenuPanelGenericMenuItem/styles'
import MenuPanelGenericSubMenu from 'Header/HeaderMenuPanels/MenuPanelGenericSubMenu'
import {
    genericMenuItemParentStyle,
    genericMenuItemStyleIcon
}                              from './styles'

const MenuPanelGenericParentMenuItem = ({item, additionalProps, post, setIsSubMenuExpanded, isSubMenuExpanded}) => {
    useEffect(() => {
        if (additionalProps.isActive)
            setIsSubMenuExpanded(true)
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [])

    return (
        <>
            <Div
                theme={genericMenuItemParentStyle}
                onClick={(e) => {
                    setIsSubMenuExpanded(flag => !flag)
                    e.stopPropagation()
                }}
            >
                <Div
                    title={item.title}
                    data={item.classes[0]}
                    theme={genericMenuItemStyle(additionalProps.isActive || isSubMenuExpanded)}
                    {...additionalProps}
                >
                    {item.title}
                    <Icon
                        icon={isSubMenuExpanded ? chevronCircleUp : chevronCircleDown}
                        theme={genericMenuItemStyleIcon}
                    />
                </Div>
            </Div>
            <MenuPanelGenericSubMenu
                isSubMenuExpanded={isSubMenuExpanded}
                setIsSubMenuExpanded={setIsSubMenuExpanded}
                item={item}
                post={post}
            />
        </>
    )
}

MenuPanelGenericParentMenuItem.propTypes = {
    item: PropTypes.object.isRequired,
    isSubMenuExpanded: PropTypes.bool.isRequired,
    setIsSubMenuExpanded: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    additionalProps: PropTypes.object.isRequired
}


export default MenuPanelGenericParentMenuItem