import {
    block,
    pointer,
    white
}                from 'utils/themer'
import {globals} from 'variables/styles'

export const predictivePracticeStyle = {
    font: globals.fonts.body,
    display: block,
    paddingTop: [9, .7, 9],
    paddingBottom: [9, .7, 9],
    paddingLeft: [15, .7, 15],
    paddingRight: [15, .7, 15],
    color: globals.colors.textColor,
    size: [18, .7, 18],
    lineHeight: [26, .7, 26],
    letterSpacing: 0.5,
    backgroundColor: white,
    cursor: pointer,
    borderBottom: '1px solid #EBEBEB',
    class: {
        name: 'active',
        backgroundColor: globals.colors.gray
    },
}