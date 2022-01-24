import {headerMenuPanelStyle}   from 'Header/HeaderMenuPanels/HeaderMenuPanelWrapper/styles'
import PropTypes                from 'prop-types'
import React                    from 'react'
import {connect}                from 'react-redux'
import H2                       from 'Shared/H2'
import MenuPanelGenericMenuItem from 'Header/HeaderMenuPanels/MenuPanelGenericMenuItem'

const MenuPanelGeneric = ({headerMenu, post, id}) => {
    const menuItem = headerMenu.find(menu => menu.ID === id)

    return (
        <>
            <H2 theme={headerMenuPanelStyle.heading}>Firm Info</H2>
            {menuItem.children.map((item, key) =>
                <MenuPanelGenericMenuItem
                    item={item}
                    post={post}
                    key={key}
                />
            )}
        </>
    )
}

const mapStateToProps = ({site}) => ({
    headerMenu: site.menus.locations['header-menu']
})

MenuPanelGeneric.propTypes = {
    headerMenu: PropTypes.array.isRequired,
    post: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired
}

export default connect(mapStateToProps)(MenuPanelGeneric)
