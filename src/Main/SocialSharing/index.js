import PropTypes from 'prop-types'
import React     from 'react'
import {connect} from 'react-redux'
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton
}                from 'react-share'
import Div       from 'Shared/Div'
import Icon      from 'Shared/Icon'
import {
    envelopeOpen,
    facebook,
    linkedinIn,
    twitter
}                from 'variables/iconLibrary'
import {
    socialSharingInnerStyle,
    socialSharingStyle
}                from './styles'

const SocialSharing = ({url, theme, post}) =>
    <Div theme={{...socialSharingStyle, ...theme}}>
        <Div theme={socialSharingInnerStyle}>
            <LinkedinShareButton url={url}>
                <Icon icon={linkedinIn} theme={{...socialSharingStyle.icon, ...theme.icon}}/>
            </LinkedinShareButton>
            <TwitterShareButton url={url}>
                <Icon icon={twitter} theme={{...socialSharingStyle.icon, ...theme.icon}}/>
            </TwitterShareButton>
            <FacebookShareButton url={url}>
                <Icon icon={facebook} theme={{...socialSharingStyle.icon, ...theme.icon}}/>
            </FacebookShareButton>
            <EmailShareButton url={url} subject={post.post_title}>
                <Icon icon={envelopeOpen} theme={{...socialSharingStyle.icon, ...theme.icon}}/>
            </EmailShareButton>
        </Div>
    </Div>

SocialSharing.propTypes = {
    theme: PropTypes.object,
    url: PropTypes.string.isRequired
}

SocialSharing.defaultProps = {
    theme: {},
}

const mapStateToProps = ({site, router}) => ({
    url: `https://${site.config.host}${router.location.pathname}`
})

export default connect(mapStateToProps)(SocialSharing)