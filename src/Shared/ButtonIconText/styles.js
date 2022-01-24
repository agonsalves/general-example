import {
    center,
    flex,
    none,
    pointer,
    transparent,
    white
}                from '../../utils/themer'
import {globals} from '../../variables/styles'

export const iconTextButtonStyle = {
    display: flex,
    alignItems: center,
    justifyContent: center,
    background: transparent,
    width: 'auto',
    minWidth: 'auto',
    border: 0,
    color: globals.colors.headingColor,
    size: [18, .7, 18],
    lineHeight: [18, .7, 18],
    maxWidth: none,
    hover: {
        color: globals.colors.linkHoverColor,
        cursor: pointer
    },
    iconWrapper: {
        display: flex,
        alignItems: center,
        justifyContent: center,
        height: [40, .7, 40],
        width: [40, .7, 40],
        minWidth: [40, .7, 40],
        borderRadius: [20, .7, 20],
        marginRight: [13, .7, 13],
        backgroundColor: globals.colors.linkActiveColor
    },
    icon: {
        color: white
    }
}