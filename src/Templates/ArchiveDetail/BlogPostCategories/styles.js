import {globals} from 'variables/styles'

export const blogPostCategoriesStyle = {
    font: globals.fonts.body,
    size: [18, .7, 18],
    lineHeight: [30, .7, 30],
    letterSpacing: [0.4, .7, 0.4],
    color: globals.colors.textColor,
    weight: 300,
    title: {
        color: globals.colors.textColor
    },
    link: {
        textDecoration: 'underline',
        color: globals.colors.textColor,
        hover: {
            color: globals.colors.linkActiveColor
        }
    }
}