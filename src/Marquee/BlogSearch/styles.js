import {inlineFlex} from 'utils/themer'
import {globals}    from 'variables/styles'

export const blogSearchToggleStyle = {
    marginLeft: [187, globals.style.layoutScalingValue, '0'],
    minWidth: [300, globals.style.layoutScalingValue],
    marginTop: 0
}

export const blogSearchCategoriesStyle = {
    border: 0,
    paddingLeft: 0,
    title: {
        font: globals.fonts.body,
        letterSpacing: [0.5, .7, 0.5],
        size: [18, .7, 18],
        lineHeight: [24, .7, 24],
        weight: 600,
        marginBottom: [25, .7, 25]
    },
    blogCategories: {},
    category: {
        display: inlineFlex,
        letterSpacing: [0.5, .7, 0.5],
        size: [18, .7, 18],
        lineHeight: [24, .7, 24],
        width: [255, globals.style.layoutScalingValue, '50%'],
        marginBottom: [23, .7, 23],
        color: globals.colors.headingColor,
        textDecoration: 'underline',
        class: {
            name: 'active',
            color: globals.colors.linkActiveColor
        }
    }
}