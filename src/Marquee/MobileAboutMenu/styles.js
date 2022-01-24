import {micrositeNavLinkStyle} from 'Shared/MicrositeMenu/MicrositeNavLink/styles'
import {
    center,
    flex,
    none,
    relative,
    white
}                              from 'utils/themer'
import {globals}               from 'variables/styles'

export const aboutMicrositeMenuInnerWrapperStyle = {
    mobile: {
        top: 230
    }
}

export const aboutMicrositeMenuItemStyle = {
    display: flex,
    position: relative,
    size: [18, .7, 18],
    lineHeight: [18, .7, 18],
    letterSpacing: [0.6, globals.style.layoutScalingValue, 0.6],
    marginRight: [63, globals.style.layoutScalingValue, 63],
    marginBottom: [21, .9, 18],
    color: white,
    mobile: {
        ...micrositeNavLinkStyle.link.mobile,
        minHeight: 60,
        alignItems: center,
        width: '100%',
        marginBottom: 0,
        color: globals.colors.headingColor,
        hover: {
            opacity: 1,
            backgroundColor: globals.colors.linkActiveColor
        }
    },
    hover: {
        color: white,
        opacity: '.5',
    },

    class: {
        name: 'active',
        mobile: {
            color: white,
            backgroundColor: globals.colors.linkActiveColor
        },
        after: {
            content: '" "',
            position: 'absolute',
            backgroundColor: globals.colors.linkActiveColor,
            bottom: [-20, globals.style.layoutScalingValue, '0'],
            right: 0,
            left: 0,
            height: [4, .7, 4],
            mobile: {
                content: none
            }
        },

        hover: {
            opacity: '1',
        }
    },
}