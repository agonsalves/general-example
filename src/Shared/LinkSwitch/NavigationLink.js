import PropTypes          from 'prop-types'
import React              from 'react'
import {NavLink}          from 'react-router-dom'
import styled             from 'styled-components'
import {themer}           from 'utils/themer'
import {
    getPathnameFromUrl,
    getQueryStringFromUrl
}                         from 'utils/url'
import {defaultLinkStyle} from './styles'

const StyledNavLink = styled(NavLink)`${props => themer({...defaultLinkStyle, ...props.theme})}`

const NavigationLink = ({theme, url, isActive, title, className, children, onClick, onFocus, data, mouseOverDetect}) =>
    <StyledNavLink
        theme={theme}
        to={url}
        isActive={() => isActive}
        title={title}
        className={className}
        children={children}
        onClick={onClick ? e => onClick(data, e) : null}
        onFocus={onFocus ? e => onFocus(data, e) : null}
        onMouseOver={() => mouseOverDetect(getPathnameFromUrl(url), getQueryStringFromUrl(url))}
        onMouseOut={() => mouseOverDetect.clear()}
    />

NavigationLink.displayName = 'NavigationLink'

NavigationLink.propTypes = {
    theme: PropTypes.object,
    url: PropTypes.string,
    isActive: PropTypes.bool,
    title: PropTypes.string,
    onClick: PropTypes.func
}

NavigationLink.defaultProps = {
    theme: {},
}

export default NavigationLink