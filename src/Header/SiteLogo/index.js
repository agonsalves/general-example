import logo          from 'assets/logo.svg'
import PropTypes     from 'prop-types'
import React, {memo} from 'react'
import {connect}     from 'react-redux'
import Img           from 'Shared/Img'
import LinkSwitch    from 'Shared/LinkSwitch'
import {logoStyle}   from './styles'

const SiteLogo = memo(({title, theme}) =>
    <LinkSwitch url="/" theme={{...logoStyle, ...theme}}>
        { /** using a canvas element with the same aspect ratio as the svg will
         insure the image scales properly in IE11 **/}
        <canvas height="47" width="105"/>
        <Img
            theme={{...logoStyle.image, ...theme.image}}
            src={logo}
            alt={`${title}'s logo`}
        />
    </LinkSwitch>
)

SiteLogo.displayName = 'SiteLogo'

SiteLogo.propTypes = {
    title: PropTypes.string.isRequired,
    theme: PropTypes.object
}

SiteLogo.defaultProps = {
    theme: {}
}

const mapStateToProps = ({site}) => ({
    title: site.config.firmName,
})

export default connect(mapStateToProps)(SiteLogo)