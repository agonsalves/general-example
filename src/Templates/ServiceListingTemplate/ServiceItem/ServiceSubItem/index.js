import PropTypes               from 'prop-types'
import React                   from 'react'
import LinkSwitch              from 'Shared/LinkSwitch'
import {serviceItemStyle} from '../styles'

const ServiceSubItem = ({child, pathname}) =>
    <LinkSwitch
        url={child.slug}
        theme={serviceItemStyle.subItemTitle(child.slug === pathname)}
    >
        {child.display_as_main_practice ? `${child.title} Overview` : child.title}
    </LinkSwitch>

ServiceSubItem.propTypes = {
    child: PropTypes.object.isRequired,
    pathname: PropTypes.string.isRequired
}

export default ServiceSubItem