import {
    center,
    flex,
    flexEnd,
    inlineBlock,
    none
}                from '../../utils/themer'
import {globals} from '../../variables/styles'

export const officeAddressWidgetStyle = {
    borderLeft: globals.style.dividingBorder,
    borderWidth: '1px',
    font: globals.fonts.body,
    size: [18, .7, 18],
    lineHeight: [30, .7, 30],
    letterSpacing: [0.4, .7, 0.4],
    color: globals.colors.textColor,
    weight: 400,
    paddingLeft: [40, globals.style.layoutScalingValue, '0'],
    mobile: {
        display: none
    },
    name: {
        font: globals.fonts.heading,
        size: [30, .7, 30],
        weight: 500,
        lineHeight: [30, .7, 30],
        color: globals.colors.headingColor,
        marginBottom: [16, .7, 16],
        borderBottom: `4px solid ${globals.colors.blue}`
    },
    address: {},
    phone: {
        display: inlineBlock,
        color: globals.colors.textColor,
        hover: {
            color: globals.colors.blue
        }
    },
    phoneWrapper: {
        marginTop: [30, .7, 30]
    },
    fax: {
        display: inlineBlock,
        marginTop: 2,
        color: globals.colors.textColor,
    },
    button: {
        display: flex,
        flexDirection: 'row-reverse',
        alignSelf: center,
        justifyContent: flexEnd,
        color: globals.colors.linkActiveColor,
        marginTop: [26, .7, 26],
        hover: {
            color: globals.colors.linkColor,
            child: {
                selector: '> div > svg',
                color: globals.colors.linkColor
            }
        },
        iconWrapper: {
            background: none
        },
        icon: {
            color: globals.colors.linkActiveColor,
            size: [15, .7, 15],
            marginLeft: [24, .7, 24]
        }
    }
}