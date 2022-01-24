import {
    absolute,
    auto,
    center,
    flex,
    pointer,
    relative,
    spaceBetween,
    white
} from 'utils/themer'
import {globals} from 'variables/styles'

export const micrositeNavLinkStyle = {
    link: {
        position: relative,
        display: flex,
        justifyContent: spaceBetween,
        alignItems: center,
        width: '100%',
        color: globals.colors.micrositeMenuItem,
        size: [18, .7, 18],
        lineHeight: [24, .7, 24],
        letterSpacing: [0.4, .7, 0.4],
        height: auto,
        minHeight: [60, .7, 60],
        paddingLeft: [30, globals.style.layoutScalingValue, 30],
        paddingRight: [20, globals.style.layoutScalingValue, 20],
        paddingTop: [18, globals.style.layoutScalingValue, 18],
        paddingBottom: [18, globals.style.layoutScalingValue, 18],
        borderBottom: globals.style.dividingBorder,
        borderWidth: '1px',
        background: white,
        transition: 'background-color 250ms ease',
        mobile: {
            backgroundColor: globals.colors.inputBackgroundColor,
            borderBottom: globals.style.dividingBorder,
            borderWidth: '1px',
            padding: `13px 25px`,
            hover: {
                backgroundColor: globals.colors.linkActiveColor,
                color: white
            }
        },
        hover: {
            cursor: pointer,
            color: globals.colors.linkHoverColor
        },
        class: {
            name: 'active',
            color: white,
            backgroundColor: globals.colors.linkActiveColor
        },
        child: {
            selector: 'span',
            marginRight: [5, .7, '0']
        }
    },
    icon: {
        position: absolute,
        top: [21, .7, 21],
        right: [15, globals.style.layoutScalingValue, 15],
        marginLeft: auto
    }
}