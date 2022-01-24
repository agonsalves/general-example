import {
    center,
    flex,
    none,
    relative
}                from 'utils/themer'
import {globals} from 'variables/styles'

export const expandingDescriptionStyle = {
    expandButton: {
        display: flex,
        color: globals.colors.linkActiveColor,
        alignItems: center,
        marginTop: [5, .7, 5],
        size: [18, .7, 18],
        lineHeight: [18, .7, 18],
        letterSpacing: [0.2, .7, 0.2],
        textTransform: none,
        icon: {
            position: relative,
            top: 1,
            size: [15, .7, 15],
            marginLeft: 31
        }
    },
    collapseButton: {
        display: flex,
        color: globals.colors.linkActiveColor,
        alignItems: center,
        marginTop: [5, .7, 5],
        size: [18, .7, 18],
        lineHeight: [18, .7, 18],
        letterSpacing: [0.2, .7, 0.2],
        textTransform: none,
        icon: {
            position: relative,
            top: 1,
            size: [15, .7, 15],
            marginLeft: 31
        }
    },
}