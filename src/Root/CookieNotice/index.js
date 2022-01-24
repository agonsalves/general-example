import Div                    from 'Shared/Div'
import MotionDiv              from 'Shared/MotionDiv'
import {AnimatePresence}      from 'framer-motion'
import PropTypes              from 'prop-types'
import React, {
    useEffect,
    useState
}                             from 'react'
import {connect}              from 'react-redux'
import {COOKIE_CONSENT}       from 'redux/reducers'
import ButtonLarge            from 'Shared/ButtonLarge'
import LinkSwitch             from 'Shared/LinkSwitch'
import {longArrowAltRight}    from 'variables/iconLibrary'
import {cookieNoticeVariants} from './animations'
import {
    cookieNoticeStyle,
    cookieNoticeWrapperStyle
}                             from './styles'

/**
 * When the visitor first arrives at the site, we detect if they have the cookieConsent cookie (in sagas.js)
 * That value gets saved to the site store and then is accessed in this component.
 *
 * The notice will appear if they have not given their consent. Once they do, the notice disappears
 * and the store is updated.
 *
 * If the user has not given consent, then any third-party content is replaced with a notice.
 * Google Analytics will still be in play, but the GA property has to be configured to not track demographic info.
 */

const CookieNotice = ({cookieConsent, dispatch}) => {
    const [visible, setVisible] = useState(!cookieConsent)

    const handleClick = () => {
        dispatch({
            type: COOKIE_CONSENT
        })
        setVisible(false)
    }

    useEffect(() => {
        if (cookieConsent)
            setVisible(false)
    }, [cookieConsent, setVisible])

    return (
        <AnimatePresence>
            {visible && (
                <MotionDiv
                    key="notice-block"
                    theme={cookieNoticeWrapperStyle}
                    variants={cookieNoticeVariants}
                    initial="initial"
                    animate="enter"
                    exit="initial"
                >
                    <Div theme={cookieNoticeStyle} role="alertdialog" aria-label="Cookie Policy Banner" data-nosnippet>
                        <Div theme={{flexGrow: 1}}>
                            This website does not track your personal or demographic information,
                            only anonymous usage statistics. To ensure that you are not tracked,
                            we have blocked all embedded content from third party sources like
                            YouTube and SlideShare. Click "Accept Cookies" to enable third-party content.
                            To learn more about our cookie policy, <LinkSwitch url="/cookie-policy">click
                            here</LinkSwitch>.
                        </Div>
                        <ButtonLarge
                            theme={{...cookieNoticeStyle.button, ...cookieNoticeStyle.buttonAccept}}
                            url={'#'}
                            onClick={() => handleClick()}
                            as="button"
                            icon={longArrowAltRight}
                        >
                            {'Accept Cookies'}
                        </ButtonLarge>
                        <ButtonLarge
                            theme={{...cookieNoticeStyle.button}}
                            url={'#'}
                            onClick={() => setVisible(false)}
                            as="button"
                            icon={longArrowAltRight}
                        >
                            {'Block Cookies'}
                        </ButtonLarge>
                    </Div>
                </MotionDiv>
            )}
        </AnimatePresence>
    )
}

CookieNotice.propTypes = {
    cookieConsent: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
}

const mapStateToProps = ({site}) => ({
    cookieConsent: site.cookieConsent
})

export default connect(mapStateToProps)(CookieNotice)