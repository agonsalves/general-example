import PropTypes  from 'prop-types'
import React      from 'react'
import LinkSwitch from 'Shared/LinkSwitch'

const PhoneLink = ({phone, children, theme}) =>
    <LinkSwitch url={`tel:${phone}`} children={children || phone} theme={theme}/>

PhoneLink.displayName = 'PhoneLink'

PhoneLink.propTypes = {
    phone: PropTypes.string.isRequired,
    theme: PropTypes.object
}

PhoneLink.defaultProps = {
    theme: {}
}

export default PhoneLink