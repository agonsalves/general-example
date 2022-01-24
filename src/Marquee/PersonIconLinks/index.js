import PropTypes              from 'prop-types'
import React, {memo}          from 'react'
import {useSelector}          from 'react-redux'
import {mobileFlag}           from 'redux/selectors'
import Div                    from 'Shared/Div'
import LinkSwitch             from 'Shared/LinkSwitch'
import {
    fileSolid,
    linkedinIn,
    twitter
}                             from 'variables/iconLibrary'
import PersonIconLink         from './PersonIconLink'
import {personIconLinksStyle} from './styles'
import VCardLink              from './VCardLink'

const PersonIconLinks = memo(({parentPost, theme}) => {
        const isMobile = useSelector(mobileFlag)

        return (
            <Div theme={{...personIconLinksStyle, ...theme}}>
                {parentPost.twitter_url && (
                    <Div theme={personIconLinksStyle.iconWrap}>
                        <PersonIconLink
                            theme={theme}
                            icon={twitter}
                            url={parentPost.twitter_url}
                            title="Follow Me on Twitter"
                        />
                        {isMobile && (
                            <LinkSwitch url={parentPost.twitter_url}>
                                <span>Follow Me On Twitter</span>
                            </LinkSwitch>
                        )}
                    </Div>
                )}
                {parentPost.linkedin_url && (
                    <Div theme={personIconLinksStyle.iconWrap}>
                        <PersonIconLink
                            theme={theme}
                            icon={linkedinIn}
                            url={parentPost.linkedin_url}
                            title="Join My LinkedIn Network"
                        />
                        {isMobile && (
                            <LinkSwitch url={parentPost.linkedin_url}>
                                <span>Join My LinkedIn Network</span>
                            </LinkSwitch>
                        )}
                    </Div>
                )}
                <VCardLink parentPost={parentPost} theme={theme}/>
                {parentPost.resume && (
                    <Div theme={personIconLinksStyle.iconWrap}>
                        <PersonIconLink
                            theme={theme}
                            icon={fileSolid}
                            url={parentPost.resume}
                            title="Download Bio"
                        />
                        {isMobile && (
                            <LinkSwitch url={parentPost.resume}>
                                <span>Download My Bio</span>
                            </LinkSwitch>
                        )}
                    </Div>
                )}
            </Div>
        )
    }
)

PersonIconLinks.displayName = 'PersonIconLinks'

PersonIconLinks.propTypes = {
    parentPost: PropTypes.object.isRequired
}

PersonIconLinks.default = {
    theme: {}
}

export default PersonIconLinks