import React                      from 'react'
import {connect}                  from 'react-redux'
import {COOKIE_CONSENT}           from 'redux/reducers'
import ButtonLarge                from 'Shared/ButtonLarge'
import Div                        from 'Shared/Div'
import LinkSwitch                 from 'Shared/LinkSwitch'
import {longArrowAltRight}        from 'variables/iconLibrary'
import {noCookiePlaceholderStyle} from './styles'

/**
 * When the user has not approved cookies, this component should replace any content that would otherwise set
 * a tracking cookie or
 *
 * Usage: This component can appear by itself, in place of,
 * or be wrapped around a component that loads data from a remote site.
 * Do not use this for code snippets that the client requests that we add. Just simply hide those.
 */
const NoCookiePlaceholder = ({cookieConsent, dispatch, children, theme}) => cookieConsent
    ? children
    : (
        <Div theme={{...noCookiePlaceholderStyle, ...theme}}>
            <Div theme={noCookiePlaceholderStyle.inner}>
                This content has been blocked because you have not consented
                to third-party cookies. <LinkSwitch url="/privacy-policy">Read our
                cookie policy</LinkSwitch>.
            </Div>
            <ButtonLarge
                url="#"
                onClick={() => dispatch({type: COOKIE_CONSENT})}
                theme={{...noCookiePlaceholderStyle.accept, ...theme.accept}}
                icon={longArrowAltRight}
            >
                {'Accept Cookies'}
            </ButtonLarge>
        </Div>
    )

const mapStateToProps = ({site}) => ({
    cookieConsent: site.cookieConsent
})

NoCookiePlaceholder.defaultProps = {
    theme: {},
}

export default connect(mapStateToProps)(NoCookiePlaceholder)