import {
    sv,
    uppercase,
    white
}                from 'utils/themer'
import {globals} from 'variables/styles'

export const predictiveHeadingStyle = {
    font: globals.fonts.body,
    backgroundColor: globals.colors.headingColor,
    color: white,
    cursor: 'default',
    textTransform: uppercase,
    size: [18, .7, 18],
    weight: 500,
    letterSpacing: [0.4, .7, 0.4],
    lineHeight: [30, .7, 30],
    padding: `${sv(6)} ${sv(13)}`,
}