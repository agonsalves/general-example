import {AnimatePresence}             from 'framer-motion'
import PropTypes                     from 'prop-types'
import React                         from 'react'
import {useSelector}                 from 'react-redux'
import {mobileFlag}                  from 'redux/selectors'
import Div                           from 'Shared/Div'
import EmailLink                     from 'Shared/EmailLink'
import Icon                          from 'Shared/Icon'
import MotionDiv                     from 'Shared/MotionDiv'
import {isPersonMicrositeMainPage}   from 'utils/flags'
import {envelopeOpen}                from 'variables/iconLibrary'
import PersonIconLinks               from '../PersonIconLinks'
import PersonPhoneList               from '../PersonPhoneList'
import {personMicrositeBioInfoStyle} from './styles'


const MarqueeBioInfo = ({post}) => {
    const isMobile = useSelector(mobileFlag)
    const {
        alternate_title,
        position,
        email,
        office_location
    } = post.parentPost

    const bioInfoVariants = {
        initial: {
            height: 0,
            opacity: 0,
            transition: {
                duration: .5,
                ease: 'easeOut'
            }
        },
        animate: {
            height: 'auto',
            opacity: 1,
            transition: {

                duration: .5,
                ease: 'easeOut'
            }
        }
    }

    return (
        <>
            <Div theme={personMicrositeBioInfoStyle.positionSocialWrapper(post)}>
                {(alternate_title || position) && (
                    <Div theme={personMicrositeBioInfoStyle.position}>
                        {alternate_title ? alternate_title : position && position[0].term}
                    </Div>
                )}
                {(isPersonMicrositeMainPage(post) && !isMobile) && (
                    <PersonIconLinks parentPost={post.parentPost}/>
                )}
            </Div>
            <AnimatePresence>
                <MotionDiv
                    variants={bioInfoVariants}
                    initial="initial"
                    animate="animate"
                    exit="initial"
                >
                    {email && (
                        <Div theme={personMicrositeBioInfoStyle.emailWrapper}>
                            <Div theme={personMicrositeBioInfoStyle.iconWrapper}>
                                <Icon icon={envelopeOpen} theme={personMicrositeBioInfoStyle.emailIcon}/>
                            </Div>
                            <EmailLink email={email} theme={personMicrositeBioInfoStyle.email}/>
                        </Div>
                    )}
                    {(office_location && !isMobile) && (
                        <PersonPhoneList post={post.parentPost} theme={personMicrositeBioInfoStyle.phoneList}/>
                    )}
                </MotionDiv>
            </AnimatePresence>
        </>
    )
}


MarqueeBioInfo.propTypes = {
    theme: PropTypes.object,
    post: PropTypes.object.isRequired
}

MarqueeBioInfo.defaultProps = {
    theme: {},
}

export default MarqueeBioInfo