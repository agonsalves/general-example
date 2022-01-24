import PropTypes          from 'prop-types'
import styled             from 'styled-components'
import {themer}           from 'utils/themer'
import {defaultLinkStyle} from './LinkSwitch/styles'

const Anchor = styled.a`${props => themer({...defaultLinkStyle, ...props.theme})}`

Anchor.displayName = 'Anchor'

Anchor.propTypes = {
    theme: PropTypes.object,
}

Anchor.defaultProps = {
    theme: {}
}

export default Anchor