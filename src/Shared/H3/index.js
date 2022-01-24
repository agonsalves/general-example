import PropTypes        from 'prop-types'
import styled           from 'styled-components'
import {themer}         from 'utils/themer'
import {defaultH3Style} from './styles'

const H3 = styled.h3`${props => themer({...defaultH3Style, ...props.theme})}`

H3.displayName = 'H3'

H3.propTypes = {
    theme: PropTypes.object,
}

H3.defaultProps = {
    theme: {},
}

export default H3