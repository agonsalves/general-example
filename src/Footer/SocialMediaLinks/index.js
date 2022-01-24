import PropTypes                     from 'prop-types'
import React                         from 'react'
import {connect}                     from 'react-redux'
import Div                           from 'Shared/Div'
import Icon                          from 'Shared/Icon'
import LinkSwitch                    from 'Shared/LinkSwitch'
import {
    facebook,
    linkedinIn as linkedin,
    twitter
}                                    from 'variables/iconLibrary'
import {footerSocialMediaLinksStyle} from './styles'

const socialIcons = {
    linkedin,
    facebook,
    twitter
}

const FooterSocialMediaLinks = ({socialLinks}) =>
    <Div theme={footerSocialMediaLinksStyle}>
        {Object.keys(socialLinks).map(item =>
            <LinkSwitch
                theme={footerSocialMediaLinksStyle.link}
                key={item}
                url={socialLinks[item].url || socialLinks[item]}
                title={socialLinks[item].title}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Icon icon={socialIcons[item]} theme={footerSocialMediaLinksStyle.icon}/>
            </LinkSwitch>
        )}
    </Div>


FooterSocialMediaLinks.propTypes = {
    socialLinks: PropTypes.object.isRequired,
}

FooterSocialMediaLinks.defaultProps = {
    socialLinks: {},
}

const mapStateToProps = ({site}) => ({
    socialLinks: site.config.socialUrls,
})

export default connect(mapStateToProps)(FooterSocialMediaLinks)