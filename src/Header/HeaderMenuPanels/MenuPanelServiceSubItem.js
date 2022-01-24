import PropTypes               from 'prop-types'
import React                   from 'react'
import LinkSwitch              from 'Shared/LinkSwitch'
import {serviceMenuPanelStyle} from './MenuPanelService/styles'

const MenuPanelServiceSubItem = ({child, pathname}) =>
    <LinkSwitch
        url={child.slug}
        theme={serviceMenuPanelStyle.subItemTitle(child.slug === pathname)}
    >
        {child.display_as_main_practice ? `${child.title} Overview` : child.title}
    </LinkSwitch>

MenuPanelServiceSubItem.propTypes = {
    child: PropTypes.object.isRequired,
    pathname: PropTypes.string.isRequired
}

export default MenuPanelServiceSubItem