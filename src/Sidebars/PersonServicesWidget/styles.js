import {borderBox} from '../../utils/themer'
import {globals}   from '../../variables/styles'

export const personServiceWidgetStyle = {
    boxSizing: borderBox,
    paddingLeft: [40, .7, '0'],
    borderLeft: globals.style.dividingBorder,
    borderWidth: '1px',
    mobile: {
        borderLeft: 0,
        marginBottom: 40
    },
    email: {
        wordBreak: 'break-word',
    },
    title: {
        marginBottom: 30
    }
}