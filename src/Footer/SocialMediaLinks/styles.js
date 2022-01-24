import {
    absolute,
    center,
    column,
    flex,
    none,
    relative,
    row,
} from 'utils/themer'
import {
    colorPalette,
    globals
} from 'variables/styles'

export const socialMediaLinksStyle = {
    display: flex,
    flexDirection: column,
    link: {
        position: relative,
        size: [25, .7, 25],
        height: [40, .7, 40],
        width: [40, .7, 40],
        borderRadius: [20, .7, 20],
        marginLeft: [32, .7, '0'],
        backgroundColor: globals.colors.gray,
        display: flex,
        alignItems: center,
        justifyContent: center,
        mobile: {
            marginTop: 3,
            marginRight: 20
        },
        hover: {
            backgroundColor: globals.colors.blue,
        },
        print: {
            color: globals.colors.textColor
        },
        after: {
            content: '" "',
            height: 30,
            width: 2,
            backgroundColor: colorPalette.lightGray,
            position: absolute,
            right: -11,
            transform: 'rotate(20deg)'
        },
        lastChild: {
            after: {
                content: none
            }
        }
    }
}
export const footerSocialMediaLinksStyle = {
    ...socialMediaLinksStyle,
    flexDirection: row,
    paddingTop: [10, .7, 10],
    mobile: {
        marginLeft: -15
    },
    icon: {
        size: [20, .7, 20],
        color: globals.colors.footerSocialColor,
        hover: {
            color: globals.colors.linkActiveColor
        }
    }
}