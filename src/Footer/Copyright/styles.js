import {flexStart} from 'utils/themer'
import {globals}   from 'variables/styles'

export const footerCopyrightStyle = {
    alignSelf: flexStart,
    color: globals.colors.textColor,
    font: globals.fonts.body,
    size: [18, .6, 18],
    lineHeight: [36, globals.style.layoutScalingValue, 30],
    letterSpacing: [.4, globals.style.layoutScalingValue, .4],
    weight: 400,
    maxWidth: [367, globals.style.layoutScalingValue, '100%'],
    ie: {
        order: -1,
    },
    print: {
        color: globals.colors.textColor,
        opacity: 1
    }
}