import styled    from 'styled-components'
import PropTypes from 'prop-types'
import {themer}  from 'utils/themer'

const Span = styled.span`${props => themer(props.theme)}`

Span.displayName = 'Span'

Span.propTypes = {
    theme: PropTypes.object
}

Span.defaultProps = {
    theme: {}
}

export default Span