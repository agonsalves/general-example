import {
    none,
    relative
}                             from '../../utils/themer'
import {pullquoteWidgetStyle} from '../PullquoteWidget/styles'
import {widgetStyle}          from '../Widget/styles'

export const pullquoteImageWidgetStyle = {
    ...pullquoteWidgetStyle,
    paddingLeft: 0,
    border: 0,
    desktop: {
        ...widgetStyle.desktop,
        border: none,
        paddingTop: 0,
    },
    image: {
        marginBottom: [32, .7, 32]
    },
    quoteIcon: {
        position: relative,
    }
}