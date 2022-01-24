import PropTypes     from 'prop-types'
import React         from 'react'
import Div           from 'Shared/Div'
import {widgetStyle} from './styles'

const Widget = ({theme, ...props}) =>
    <Div as="aside" theme={{...widgetStyle, ...theme, mobile: {...widgetStyle.mobile, ...theme?.mobile}}} {...props}/>

Widget.propTypes = {
    theme: PropTypes.object
}

Widget.defaultProps = {
    theme: {}
}

export default Widget