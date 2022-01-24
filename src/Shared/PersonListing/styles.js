import {
    auto,
    block,
    hidden
}                from 'utils/themer'
import {globals} from 'variables/styles'

export const personListingStyle = {
    width: [259, globals.style.layoutScalingValue, '100%'],
    height: auto,
    marginRight: [64, globals.style.layoutScalingValue, '0'],
    borderBottom: globals.style.dividingBorder,
    borderWidth: '1px',
    paddingBottom: [50, globals.style.layoutScalingValue, 50],
    marginBottom: [50, globals.style.layoutScalingValue, 50],
    info: {
        weight: 400,
        size: [18, .7, 18],
        lineHeight: [30, .7, 30],
        letterSpacing: [0.4, .7, 0.4]
    },
    headshot: {
        display: block,
        overflow: hidden,
        height: [125, globals.style.layoutScalingValue, 125],
        width: [125, globals.style.layoutScalingValue, 125],
        borderRadius: [80, globals.style.layoutScalingValue, 80],
        marginBottom: [25, .7, 25],
        hover: {
            opacity: .7
        },
        minWidth: [125, globals.style.layoutScalingValue, 125],
        minHeight: [125, globals.style.layoutScalingValue, 125],
        marginRight: [30, globals.style.layoutScalingValue, '0'],
        maxHeight: '100px',
        maxWidth: '100px',
        transition: 'opacity .25s ease',
    },
    name: {
        display: block,
        color: globals.colors.headingColor,
        size: [20, .7, 20],
        lineHeight: [21, .7, 21],
        letterSpacing: [.5, .7, .5]
    },
    title: {
        color: globals.colors.linkColor,
        hover: {
            color: globals.colors.linkHoverColor
        }
    },
    phone: {
        marginTop: [1, .7, 1],
        color: globals.colors.linkColor,
        hover: {
            color: globals.colors.linkHoverColor
        }
    },
    phoneLink: {},
    email: {
        marginTop: [-7, .7, -7],
        size: [18, .7, 18],
        lineHeight: [30, .7, 30],
        letterSpacing: [0.4, .7, 0.4],
        display: 'block; display: -webkit-box;',
        webkitLineClamp: 1,
        webkitBoxOrient: 'vertical',
        maxHeight: [30, .7, 30],
        overflow: hidden,
        textOverflow: 'ellipsis',
        wordBreak: 'break-word',
        height: auto,
        color: globals.colors.linkActiveColor,
        hover: {
            color: globals.colors.linkColor
        }
    }

}