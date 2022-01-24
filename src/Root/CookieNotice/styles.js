import {
    borderBox,
    center,
    column,
    flexStart,
    none,
    pointer,
    sv,
    transparent,
    white
}                from '../../utils/themer'
import {globals} from '../../variables/styles'

export const cookieNoticeWrapperStyle = {
    position: 'fixed',
    width: '100%',
    backgroundColor: globals.colors.cookieBackgroundColor,
    color: white,
    overflow: 'hidden',
    bottom: 0,
    zIndex: 100,
    mobile: {
        width: 'calc(100% - 50px)',
        left: 25,
        top: 65,
        background: transparent
    },
    print: {
        display: none
    }
}

export const cookieNoticeStyle = {
    font: globals.fonts.body,
    display: 'flex',
    padding: `${sv(45)} ${sv(80, .3)}`,
    boxSizing: 'border-box',
    alignItems: 'center',
    size: [18, .7, 18],
    lineHeight: [30, .7, 30],
    weight: 300,
    letterSpacing: [0.5, .7, 0.5],
    mobile: {
        flexDirection: column,
        backgroundColor: globals.colors.cookieBackgroundColor,
        padding: '32px',
        boxSizing: borderBox
    },
    print: {
        display: none
    },
    child: {
        selector: 'a',
        color: white,
        textDecoration: 'underline',
        hover: {
            color: globals.colors.linkActiveColor
        }
    },
    button: {
        flexShrink: 0,
        width: 'auto',
        backgroundColor: transparent,
        paddingTop: 0,
        paddingBottom: 0,
        alignSelf: center,
        border: globals.style.dividingBorder,
        borderWidth: '2px',
        borderColor: white,
        color: white,
        paddingLeft: [37, .7, 37],
        paddingRight: [30, .7, 30],
        whiteSpace: 'nowrap',
        maxWidth: [250, .7, 'none'],
        child: {
            selector: '> svg',
            marginLeft: [33, .4, 33],
            size: [18, .7, 18],
        },
        mobile: {
            alignSelf: flexStart,
            marginLeft: 0,
            width: 240,
            whiteSpace: 'nowrap'
        },
        hover: {
            cursor: pointer,
            backgroundColor: '#6a6a6a',
            borderColor: '#6a6a6a',
            color: white
        }

    },
    buttonAccept: {
        marginRight: 25,
        marginLeft: 120,
        backgroundColor: globals.colors.linkActiveColor,
        borderColor: globals.colors.linkActiveColor,
        color: white,
        child: {
            selector: '> svg',
            marginLeft: [37, .4, 37],
            size: [18, .7, 18],
            mobile: {
                size: 16
            }
        },
        mobile: {
            marginBottom: 15,
            marginLeft: 0,
            marginTop: 25,
            alignSelf: flexStart,
            width: 240,
            whiteSpace: 'nowrap'
        },
        hover: {
            cursor: pointer,
            backgroundColor: white,
            borderColor: white,
            color: globals.colors.linkActiveColor
        }
    }
}