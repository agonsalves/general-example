import {
    borderBox,
    none
}                from '../../utils/themer'
import {globals} from '../../variables/styles'

export const keyContactsWidgetStyle = {
    boxSizing: borderBox,
    paddingLeft: [40, .7, '0'],
    borderLeft: globals.style.dividingBorder,
    borderWidth: '1px',
    font: globals.fonts.body,
    mobile: {
        borderLeft: none
    },
    heading: {
        paddingBottom: [25, .7, 25]
    }
}