import PropTypes                from 'prop-types'
import React                    from 'react'
import Div                      from 'Shared/Div'
import Icon                     from 'Shared/Icon'
import LinkSwitch               from 'Shared/LinkSwitch'
import {
    envelope,
    linkedinIn,
    rssSolid,
    twitter
}                               from 'variables/iconLibrary'
import Widget                   from '../Widget'
import {blogSidebarWidgetStyle} from '../Widget/styles'
import WidgetTitle              from '../WidgetTitle'
import {blogFollowLinkStyle}    from './styles'

const BlogFollowWidget = ({linkedinLink, twitterLink, emailLink, feedLink}) => (
    <Widget theme={blogSidebarWidgetStyle}>
        <WidgetTitle theme={blogSidebarWidgetStyle.title}>Follow Us</WidgetTitle>
        {emailLink && (
            <Div>
                <LinkSwitch theme={blogFollowLinkStyle} url={emailLink} title="Subscribe">
                    <Div theme={blogFollowLinkStyle.iconWrapper}>
                        <Icon icon={envelope} theme={blogFollowLinkStyle.icon}/>
                    </Div>
                    {' '}Subscribe
                </LinkSwitch>
            </Div>
        )}
        {twitterLink && (
            <Div>
                <LinkSwitch theme={blogFollowLinkStyle} url={twitterLink} title="Join our Twitter Network">
                    <Div theme={blogFollowLinkStyle.iconWrapper}>
                        <Icon icon={twitter} theme={blogFollowLinkStyle.icon}/>
                    </Div>
                    {' '}Twitter
                </LinkSwitch>
            </Div>
        )}
        {linkedinLink && (
            <Div>
                <LinkSwitch theme={blogFollowLinkStyle} url={linkedinLink} title="Join our LinkedIn Network">
                    <Div theme={blogFollowLinkStyle.iconWrapper}>
                        <Icon icon={linkedinIn} theme={blogFollowLinkStyle.icon}/>
                    </Div>
                    {' '}LinkedIn
                </LinkSwitch>
            </Div>
        )}
        <Div>
            <LinkSwitch theme={blogFollowLinkStyle} url={feedLink} title="Subscribe via RSS Feed">
                <Div theme={blogFollowLinkStyle.iconWrapper}>
                    <Icon icon={rssSolid} theme={blogFollowLinkStyle.icon}/>
                </Div>
                {' '}RSS Feed
            </LinkSwitch>
        </Div>
    </Widget>
)

BlogFollowWidget.propTypes = {
    feedLink: PropTypes.string,
    linkedinLink: PropTypes.string,
    emailLink: PropTypes.string,
}

export default BlogFollowWidget