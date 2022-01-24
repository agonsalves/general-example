import PropTypes          from 'prop-types'
import React              from 'react'
import H3                 from 'Shared/H3'
import {widgetTitleStyle} from './styles'

const WidgetTitle = ({theme, ...props}) =>
    <H3 theme={{...widgetTitleStyle, ...theme}} {...props}/>

WidgetTitle.propTypes = {
    theme: PropTypes.object
}

export default WidgetTitle