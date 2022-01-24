import Div                           from 'Shared/Div'
import EmailLink                     from 'Shared/EmailLink'
import H1                            from 'Shared/H1'
import Icon                          from 'Shared/Icon'
import {personMicrositeBioInfoStyle} from 'Marquee/MarqueeBioInfo/styles'
import {
    pageTitleLinkStyle,
    pageTitleStyleSwitch
}                                    from 'Marquee/Title/styles'
import PersonIconLinks               from 'Marquee/PersonIconLinks'
import PersonPhoneList               from 'Marquee/PersonPhoneList'
import React                         from 'react'
import LinkSwitch                    from 'Shared/LinkSwitch'
import {isPersonMicrositeHasPhoto}   from 'utils/flags'
import {envelopeOpen}                from 'variables/iconLibrary'
import {
    mobilePersonIconLinksStyle,
    mobilePersonMicrositeBioInfoStyle,
    mobilePersonMicrositeBioTitleStyle,
    mobilePersonMicrositeBioTitleWrapperStyle
}                             from './styles'

const MobileMicrositePersonBioInfo = ({post}) =>
    <>
        {isPersonMicrositeHasPhoto(post) && (
            <Div theme={mobilePersonMicrositeBioTitleWrapperStyle}>
                <H1
                    className="page-title"
                    id="page-title"
                    theme={{
                        ...pageTitleStyleSwitch(post),
                        ...mobilePersonMicrositeBioTitleStyle
                    }}
                >
                    <LinkSwitch
                        url={post.slug !== post.parentPost.slug ? post.parentPost.slug : ''}
                        theme={pageTitleLinkStyle(post)}
                    >
                        {post.parentPost.post_title}
                    </LinkSwitch>
                </H1>
                <Div theme={personMicrositeBioInfoStyle.position}>
                    {post.parentPost.alternate_title
                        ? post.parentPost.alternate_title
                        : post.parentPost.position
                        && post.parentPost.position[0].term
                    }
                </Div>
            </Div>
        )}
        {post.parentPost.email && (
            <Div theme={mobilePersonMicrositeBioInfoStyle.emailWrapper(isPersonMicrositeHasPhoto(post))}>
                <Div theme={mobilePersonMicrositeBioInfoStyle.iconWrapper}>
                    <Icon icon={envelopeOpen} theme={personMicrositeBioInfoStyle.emailIcon}/>
                </Div>
                <EmailLink
                    email={post.parentPost.email}
                    theme={mobilePersonMicrositeBioInfoStyle.email}/>
            </Div>
        )}
        <PersonPhoneList post={post.parentPost} theme={mobilePersonMicrositeBioInfoStyle.phoneList}/>
        <PersonIconLinks parentPost={post.parentPost} theme={mobilePersonIconLinksStyle}/>
    </>


export default MobileMicrositePersonBioInfo