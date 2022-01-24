import PropTypes          from 'prop-types'
import React              from 'react'
import {angleRight}       from 'variables/iconLibrary'
import Icon               from '../Icon'
import LinkSwitch         from '../LinkSwitch'
import {largeButtonStyle} from './styles'

const ButtonLarge = ({children, label, url, title, icon, theme, ...props}) =>
    <LinkSwitch
        url={url}
        title={title}
        className={props.className}
        theme={{...largeButtonStyle, ...theme}}
        {...props}
    >
        {label || children}
        {icon && (
            <Icon icon={icon} theme={{...largeButtonStyle.icon, ...theme.icon}}/>
        )}
    </LinkSwitch>

ButtonLarge.propTypes = {
    label: PropTypes.string,
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
    icon: PropTypes.object,
    theme: PropTypes.object,
}

ButtonLarge.defaultProps = {
    title: '',
    icon: angleRight,
    theme: {},
}

export default ButtonLarge