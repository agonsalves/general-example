import Span            from 'Shared/Span'
import StyledLink      from 'Shared/LinkSwitch/StyledLink'
import PropTypes       from 'prop-types'
import React, {memo}   from 'react'
import {connect}       from 'react-redux'
import {isString}      from 'utils/helpers'
import mouseOverDetect from 'utils/mouseOverDetect'
import {
    getPathnameFromUrl,
    getQueryStringFromUrl,
    getUrlHostName
}                      from 'utils/url'
import validURL        from 'utils/validURL'
import Anchor          from '../Anchor'
import ExternalLink    from '../ExternalLink'
import NavigationLink  from './NavigationLink'

/**
 * LinkSwitch determines if a provided URL is an internal or external link.
 * The Link component supplied by react-router is not designed to handle external links.
 * If the link is external, LinkSwitch returns a normal anchor tag instead of the router Link component
 */

const LinkSwitch = memo(({children, className, data, onClick, onFocus, theme, title, type, url, target, download, blogsConfig, ...props}) => {

    if (!url || !isString(url) || url.trim() === '#')
        return <Span
            children={children}
            className={`${className} ${props.isActive ? 'active' : ''}`}
            onClick={onClick ? e => onClick(data, e) : null}
            theme={theme}
            title={title}
            type={type}
            {...props}
        />

    // Handle mail and tel links
    if (/mailto:.*/.test(url) || /tel:.*/.test(url))
        return <Anchor
            children={children}
            href={url}
            theme={theme}
            title={title}
        />

    if (window.location.origin === process.env.REACT_APP_SITE_URL) {
        // Convert local absolute URLs to relative URLs
        if (url.indexOf(process.env.REACT_APP_SITE_URL) === 0) {
            url = url.slice(process.env.REACT_APP_SITE_URL.length)
            if (!url.length)
                url = '/'
        }
    } else if (blogsConfig[window.location.hostname] && !validURL.test(url)) {
        // When inside a blog:
        // If url is within the blog-path, then remove the blog-path segment so the URL is relative to the blog
        // domain/hostname. Otherwise, assuming a full/valid URL isn't given (a relative path), then convert it into an
        // absolute URL pointing to the main site domain/hostname.
        const currentBlog = blogsConfig[window.location.hostname]
        const substr = url.substring(0, currentBlog.path.length + 1)
        if (substr === '/' + currentBlog.path) {
            url = url.substr(currentBlog.path.length + 1)
            if (!url.length)
                url = '/'
        } else {
            url = process.env.REACT_APP_SITE_URL + url
        }
    }

    // Assume that a full/valid URL is likely an external link,
    // as any other URL format is likely relative to the local site.
    // Use ExternalLink for all full URLs, even if they aren't necessarily external (e.g., mainSite links within a
    // blog.)
    if (download || validURL.test(url)) {
        const hostName = getUrlHostName(url)
        if (!target && !download
            && (blogsConfig[hostName] || hostName === getUrlHostName(process.env.REACT_APP_SITE_URL)))
            target = '_self'

        return <ExternalLink
            children={children}
            className={className}
            url={url}
            theme={theme}
            title={title}
            onClick={onClick}
            target={target}
            download={download}
        />
    }

    // Use NavLink when linking a menu item
    if (type === 'nav')
        return <NavigationLink
            children={children}
            className={className}
            data={data}
            mouseOverDetect={mouseOverDetect}
            onClick={onClick}
            onFocus={onFocus}
            theme={theme}
            title={title}
            url={url}
            {...props}
        />

    // All relative URLs use the Link component
    return <StyledLink
        children={children}
        className={className}
        onMouseOut={() => mouseOverDetect.clear()}
        onMouseOver={() => mouseOverDetect(getPathnameFromUrl(url), getQueryStringFromUrl(url))}
        theme={theme}
        title={title}
        to={url}
    />
})

LinkSwitch.displayName = 'LinkSwitch'

LinkSwitch.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.object,
    ]).isRequired,
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
    theme: PropTypes.object,
    title: PropTypes.string,
    type: PropTypes.string,
    url: PropTypes.string,
    target: PropTypes.string,
    download: PropTypes.string
}

LinkSwitch.defaultProps = {
    theme: {},
    type: '',
}

const mapStateToProps = ({site}) => ({
    blogsConfig: site.config.blogs ? site.config.blogs : {},
})

export default connect(mapStateToProps)(LinkSwitch)