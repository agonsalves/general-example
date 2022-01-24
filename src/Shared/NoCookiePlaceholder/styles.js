import {
    auto,
    block,
    center,
    column,
    flex,
    inlineBlock,
    sv,
    white
}                from 'utils/themer'
import {globals} from 'variables/styles'

export const noCookiePlaceholderStyle = {
    width: '100%',
    background: globals.colors.cookieBackgroundColor,
    color: white,
    padding: `${sv(45, .5)} ${sv(83, .5)}`,
    marginBottom: [30, .5, 30],
    boxSizing: 'border-box',
    textAlign: center,
    display: flex,
    flexDirection: column,
    alignItems: center,
    size: [18, .5, 18],
    lineHeight: [30, .5, 30],
    letterSpacing: [0.5, .7, 0.5],
    weight: 300,
    ie: {
        display: block
    },
    mobile: {
        paddingTop: 45,
        paddingBottom: 48
    },
    child: {
        selector: 'a',
        textDecoration: 'underline',
        color: white,
        hover: {
            color: globals.colors.gray
        }
    },
    inner: {
        width: '100%',
        child: {
            selector: '> div',
            display: inlineBlock
        }
    },
    accept: {
        alignSelf: center,
        margin: 0,
        marginTop: 27,
        width: 'auto',
        maxWidth: [245, .7, 'none'],
        padding: `0 ${sv(15)} 0 ${sv(20)}`,
        size: [18, .7, 18],
        letterSpacing: [0.2, .7, 0.2],
        ie: {
            marginLeft: auto,
            marginRight: auto
        },
        mobile: {
            paddingLeft: 20,
            paddingRight: 15
        }
    },
    icon: {
        size: [16, .7, 16],
        marginLeft: [50, .7, 50]
    },
    videoWidget: {
        padding: `${sv(45, .5)} ${sv(25, .5)}`,
        size: [18, .5, 18],
        lineHeight: [30, .5, 30],
        accept: {
            paddingLeft: [30, globals.style.layoutScalingValue],
            paddingRight: [30, globals.style.layoutScalingValue],
            paddingTop: [20, .5],
            paddingBottom: [20, .5],
            size: [18, .5, 18],
            whiteSpace: 'nowrap',
            width: 'auto',
            minWidth: 0,
            child: {
                selector: '> svg',
                marginLeft: [50, .1, 50],
                size: [18, .65, 18],
                minWidth: [18, .65, 18],
                mobile: {
                    size: 16
                }
            },
        },

    }
}