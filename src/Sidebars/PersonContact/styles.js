import {
    block,
    center,
    flex,
    flexStart,
    none
}                from 'utils/themer'
import {globals} from 'variables/styles'

export const personContactStyle = {
    contact: {
        display: flex,
        alignItems: flexStart,
        marginBottom: [40, .7, 35],
        child: {
            selector: ':last-of-type',
            marginBottom: 0
        }
    },
    info: {
        marginTop: -4,
        alignSelf: center,
        child: {
            selector: '> a:first-of-type',
            hover: {
                color: globals.colors.gray
            }
        }
    },
    image: {
        width: [85, globals.style.layoutScalingValue, 85],
        height: [85, globals.style.layoutScalingValue, 85],
        minHeight: [85, globals.style.layoutScalingValue, 85],
        minWidth: [85, globals.style.layoutScalingValue, 85],
        maxHeight: '80px',
        maxWidth: '80px',
        marginRight: [20, globals.style.layoutScalingValue, 20],
        borderRadius: [50, globals.style.layoutScalingValue, 50],
        transition: 'opacity .25s ease',
        hover: {
            opacity: .7,
        }
    },
    name: {
        font: globals.fonts.body,
        size: [20, .7, 20],
        lineHeight: [24, .7, 24],
        letterSpacing: [.5, .7, .5],
        color: globals.colors.headingColor,
        transition: 'color .25s ease',
    },
    phone: {
        child: {
            selector: 'a',
            color: globals.colors.textColor,
            display: block,
            size: [18, .7, 18],
            lineHeight: [30, .7, 30],
            letterSpacing: [.4, .7, .4],
            weight: 400,
            hover: {
                color: globals.colors.linkHoverColor
            }
        }
    },
    position: {
        display: none,
        font: globals.fonts.body,
        size: [20, .7, 20],
        lineHeight: [24, .7, 24],
        letterSpacing: [.5, .7, .5],
        color: globals.colors.headingColor,
        transition: 'color .25s ease',
    },
    email: {
        color: globals.colors.textColor,
        display: block,
        weight: 400,
        size: [18, .7, 18],
        lineHeight: [26, .7, 26],
        letterSpacing: [.45, .7, .45],
        marginTop: [-4, .7, -4],
        textDecoration: 'underline',
        hover: {
            color: globals.colors.linkHoverColor
        }
    }
}