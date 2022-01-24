import PropTypes                 from 'prop-types'
import React                     from 'react'
import Div                       from 'Shared/Div'
import {predictivePracticeStyle} from './styles'

const PredictivePracticeItem = ({isHighlighted, name, theme}) =>
    <Div
        theme={{...predictivePracticeStyle, ...theme}}
        className={isHighlighted ? 'active' : ''}
        children={name}
    />

PredictivePracticeItem.propTypes = {
    isHighlighted: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    theme: PropTypes.object
}

PredictivePracticeItem.defaultProps = {
    theme: {}
}

export default PredictivePracticeItem