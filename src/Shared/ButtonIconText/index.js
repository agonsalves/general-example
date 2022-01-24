import PropTypes             from 'prop-types'
import React                 from 'react'
import Div                   from '../Div'
import Icon                  from '../Icon'
import {angleRight}          from '../../variables/iconLibrary'
import LinkSwitch            from '../LinkSwitch'
import {iconTextButtonStyle} from './styles'

const ButtonIconText = ({children, label, url, title, icon, theme, ...props}) =>
    <LinkSwitch
        url={url}
        title={title}
        className={props.className}
        theme={{...iconTextButtonStyle, ...theme}}
        {...props}
    >
        <Div theme={{...iconTextButtonStyle.iconWrapper, ...theme.iconWrapper}}>
            <Icon icon={icon} theme={{...iconTextButtonStyle.icon, ...theme.icon}}/>
        </Div>

        {label || children}
    </LinkSwitch>

ButtonIconText.propTypes = {
    label: PropTypes.string,
    url: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.object,
    theme: PropTypes.object,
}

ButtonIconText.defaultProps = {
    title: '',
    icon: angleRight,
    theme: {},
}

export default ButtonIconText