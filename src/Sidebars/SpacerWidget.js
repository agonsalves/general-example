import PropTypes from 'prop-types'
import React     from 'react'
import {none}    from 'utils/themer'
import Widget    from './Widget'

const spacerWidgetStyle = {
    border: none
}

const SpacerWidget = ({height, theme}) =>
    <Widget theme={{...theme, ...spacerWidgetStyle, height: height || 50}}/>

SpacerWidget.propTypes = {
    height: PropTypes.number.isRequired,
    theme: PropTypes.object
}

SpacerWidget.defaultProps = {
    theme: {}
}

export default SpacerWidget