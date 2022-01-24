import PropTypes from 'prop-types'
import styled    from 'styled-components'
import {themer}  from 'utils/themer'

const Div = styled.div`${props => themer(props.theme)}`

Div.displayName = 'Div'

Div.propTypes = {
    theme: PropTypes.object
}

Div.defaultProps = {
    theme: {}
}

export default Div