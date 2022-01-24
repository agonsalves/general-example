import PropTypes           from 'prop-types'
import styled              from 'styled-components'
import {themer}            from 'utils/themer'
import {numberedListStyle} from './styles'

const NumberedList = styled.ol`${props => themer({...numberedListStyle, ...props.theme})}`

NumberedList.displayName = 'NumberedList'

NumberedList.propTypes = {
    theme: PropTypes.object,
}

export default NumberedList