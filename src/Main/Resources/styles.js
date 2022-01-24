import {
    center,
    flex,
    none
}                from 'utils/themer'
import {globals} from 'variables/styles'

export const resourcesStyle = {
    heading: {
        color: globals.colors.headingColor,
        size: [18, .7, 18],
        lineHeight: [28, .7, 28],
        letterSpacing: [0.2, .7, 0.2],
        weight: 600,
        marginBottom: [17, .7, 17]
    },
    list: {
        not: {
            param: 'li',
            child: {
                selector: 'li',
                display: flex,
                alignItems: center,
                font: globals.fonts.body,
                marginBottom: [15, .7, 15],
                size: [18, .7, 18],
                lineHeight: [24, .7, 24],
                letterSpacing: [0.2, .7, 0.2],
                mobile: {
                    display: flex,
                    alignItems: center
                },
                before: {
                    content: none
                }
            }
        }
    },
    icon: {
        color: globals.colors.resourceIconColor,
        marginRight: [30, .7, 30],
        size: [19, .7, 19],
        globe: {
            size: [18, .7, 18],
            marginRight: [25, .7, 25],
        },
        mobile: {
            alignSelf: center
        }
    },
    link: {
        textDecoration: 'underline',
        mobile: {
            alignSelf: center
        }
    }
}