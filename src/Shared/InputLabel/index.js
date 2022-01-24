import PropTypes                from 'prop-types'
import styled                   from 'styled-components'
import {themer}                 from 'utils/themer'
import {defaultInputLabelStyle} from './styles'

const InputLabel = styled.label`${props => themer({...defaultInputLabelStyle, ...props.theme})}`

InputLabel.displayName = 'InputLabel'

InputLabel.propTypes = {
    theme: PropTypes.object,
}

InputLabel.defaultProps = {
    theme: {}
}

export default InputLabel