import PropTypes from 'prop-types'
import styled    from 'styled-components'
import {themer}  from 'utils/themer'

const H2 = styled.h2`${props => themer(props.theme)}`

H2.displayName = 'H2'

H2.propTypes = {
    theme: PropTypes.object
}

H2.defaultProps = {
    theme: {}
}

export default H2