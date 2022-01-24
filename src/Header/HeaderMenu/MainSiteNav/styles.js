import {
    absolute,
    auto,
    center,
    flex,
    inherit,
    none,
    pointer,
    uppercase,
    white
}                from 'utils/themer'
import {globals} from 'variables/styles'

export const headerLanguageDropDownStyle = {
    button: {
        width: 86,
        height: 51,
        borderRadius: 44,
        border: `2px solid rgba(255,255,255,.2)`,
        marginLeft: 14,
        display: flex,
        alignItems: center,
        justifyContent: center,
        hover: {
            backgroundColor: white,
            borderColor: white,
            color: globals.colors.blue,
            cursor: pointer
        }
    },
    buttonExpanded: {
        color: globals.colors.blue,
        backgroundColor: white,
        borderColor: white
    },
    buttonText: {
        size: [16, .7, 16],
        lineHeight: [16, .7, 16],
        weight: 400,
        letterSpacing: [0.5, .7, 0.5],
        font: globals.fonts.body,
        textTransform: uppercase,
        color: inherit,
        pointerEvents: none
    },
    icon: {
        size: 20,
        marginLeft: 11,
        color: inherit,
        transition: 'transform 250ms ease',
        transformOrigin: center
    },
    subList: {
        position: absolute,
        marginTop: 29
    }
}
export const headerMainSiteNavStyle = {
    color: globals.colors.headingColor,
    hover: {
        color: globals.colors.linkActiveColor
    },
    button: {
        ...headerLanguageDropDownStyle.button,
        minWidth: 142,
        width: auto,
        paddingRight: 20,
        paddingLeft: 20
    },
    buttonText: {
        size: [16, .7, 16],
        lineHeight: [16, .7, 16],
        weight: 400,
        letterSpacing: [0.5, .7, 0.5],
        font: globals.fonts.body,
        textTransform: uppercase,
        color: inherit,
        pointerEvents: none
    },
    iconWrapper: {
        height: [40, .7, 40],
        width: [40, .7, 40],
        borderRadius: [20, .7, 20],
        backgroundColor: globals.colors.linkActiveColor,
        display: flex,
        alignItems: center,
        justifyContent: center,
        marginRight: [20, .7, 20]
    },
    icon: {
        ...headerLanguageDropDownStyle.icon,
        color: white,
        marginLeft: 0,
        size: [18, .7, 18]
    }
}