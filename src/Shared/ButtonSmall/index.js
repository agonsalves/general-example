import PropTypes          from 'prop-types'
import React              from 'react'
import {angleRight}       from 'variables/iconLibrary'
import Icon               from '../Icon'
import LinkSwitch         from '../LinkSwitch'
import {smallButtonStyle} from './styles'

const ButtonSmall = ({children, label, url, title, icon, theme, ...props}) =>
    <LinkSwitch
        url={url}
        title={title}
        theme={{...smallButtonStyle, ...theme}}
        {...props}
    >
        {children || label}
        <Icon theme={{...smallButtonStyle.icon, ...theme.icon}} icon={icon}/>
    </LinkSwitch>

ButtonSmall.propTypes = {
    label: PropTypes.string,
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
    icon: PropTypes.object,
    theme: PropTypes.object
}

ButtonSmall.defaultProps = {
    title: '',
    icon: angleRight,
    theme: {
        icon: {}
    }
}

export default ButtonSmall