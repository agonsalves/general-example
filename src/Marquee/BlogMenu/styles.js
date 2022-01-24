import {
    flex,
    none,
    relative,
    white
}                from '../../utils/themer'
import {globals} from '../../variables/styles'

export const blogMicrositeMenuItemStyle = {
    position: relative,
    size: [18, .7, 18],
    lineHeight: [18, .7, 18],
    letterSpacing: [0.6, .7, 0.6],
    marginLeft: [63, .7, 63],
    firstChild: {
        marginLeft: 0
    },
    color: white,
    hover: {
        color: globals.colors.linkActiveColor
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
    }
}

export const blogMicrositeMenuWrapperStyle = {
    display: flex,
    paddingTop: [79, .3, 79],
    print: {
        display: none
    }
}