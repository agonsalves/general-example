import PropTypes  from 'prop-types'
import React      from 'react'
import LinkSwitch from './LinkSwitch'

const EmailLink = ({email, children, ...props}) =>
    <LinkSwitch url={`mailto:${email}`} {...props} children={children || email}/>

EmailLink.displayName = 'EmailLink'

EmailLink.propTypes = {
    email: PropTypes.string.isRequired
}

export default EmailLink
