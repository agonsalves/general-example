import {
    block,
    flex,
    none,
    spaceBetween
}                from 'utils/themer'
import {globals} from 'variables/styles'

export const footerMenuStyle = {
    listStyle: none,
    display: flex,
    flexDirection: 'row',
    mobile: {
        flexWrap: 'wrap',
        marginTop: 18,
    },
    desktop: {
        justifyContent: spaceBetween,
    },
    link: {
        display: block,
        font: globals.fonts.body,
        color: globals.colors.headingColor,
        size: [18, .6, 18],
        lineHeight: [24, globals.style.layoutScalingValue, 24],
        marginLeft: [40, globals.style.layoutScalingValue, '0'],
        weight: 400,
        mobile: {
            marginBottom: 12,
            marginRight: 40
        },
        hover: {
            color: globals.colors.linkActiveColor
        },
        print: {
            color: globals.colors.headingColor
        }
    },
}