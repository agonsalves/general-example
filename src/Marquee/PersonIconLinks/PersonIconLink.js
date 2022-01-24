import PropTypes              from 'prop-types'
import React                  from 'react'
import Icon                   from '../../Shared/Icon'
import LinkSwitch             from '../../Shared/LinkSwitch'
import {personIconLinksStyle} from './styles'

const PersonIconLink = ({children, icon, url, theme, title, ...props}) =>
    <LinkSwitch theme={{...personIconLinksStyle.link, ...theme.link}} url={url} {...props}>
        <Icon
            theme={{...personIconLinksStyle.icon, ...theme.icon}}
            icon={icon}
            title={title}
        />
        {children}
    </LinkSwitch>

PersonIconLink.propTypes = {
    url: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
}

PersonIconLink.defaultProps = {
    theme: {}
}

export default PersonIconLink