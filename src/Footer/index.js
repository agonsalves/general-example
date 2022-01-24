import PropTypes        from 'prop-types'
import React, {memo}    from 'react'
import Div              from '../Shared/Div'
import Copyright        from './Copyright'
import SocialMediaLinks from './SocialMediaLinks'
import FooterMenu       from './FooterMenu'
import {footerStyle}    from './styles'

const Footer = memo(({theme}) =>
    <Div as="footer" theme={{...footerStyle, ...theme}} data-nosnippet>
        <Copyright/>
        <Div theme={footerStyle.inner}>
            <FooterMenu/>
            <SocialMediaLinks/>
        </Div>
    </Div>
)

Footer.propTypes = {
    theme: PropTypes.object,
}

Footer.defaultProps = {
    theme: {
        inner: {}
    },
}

export default Footer