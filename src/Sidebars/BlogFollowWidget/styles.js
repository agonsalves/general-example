import {
    center,
    flex,
    inlineFlex
}                from '../../utils/themer'
import {globals} from '../../variables/styles'

export const blogFollowLinkStyle = {
    font: globals.fonts.body,
    size: [18, .7, 18],
    lineHeight: [26, .7, 26],
    letterSpacing: [0.5, .7, 0.5],
    color: globals.colors.textColor,
    display: inlineFlex,
    alignItems: center,
    justifyContent: center,
    textDecoration: 'underline',
    marginBottom: 12,
    icon: {
        color: globals.colors.headingColor,
    },
    iconWrapper: {
        display: flex,
        height: [40, .7, 40],
        width: [40, .7, 40],
        borderRadius: [20, .7, 20],
        marginRight: [25, globals.style.layoutScalingValue, 25],
        alignItems: center,
        justifyContent: center,
        backgroundColor: globals.colors.iconWrapperColor
    }
}