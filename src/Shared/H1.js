import PropTypes from 'prop-types'
import styled    from 'styled-components'
import {themer}  from 'utils/themer'

const H1 = styled.h1`${props => themer(props.theme)}`

H1.displayName = 'H1'

H1.propTypes = {
    theme: PropTypes.object
}

H1.defaultProps = {
    theme: {}
}

export default H1