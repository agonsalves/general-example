import {
    center,
    column,
    flex,
    flexStart,
    none,
    relative,
    sv,
    uppercase,
    white
}                from '../../utils/themer'
import {globals} from '../../variables/styles'

export const personIconLinksStyle = {
    width: '100%',
    display: flex,
    transition: 'margin .5s',
    transitionTimingFunction: 'cubic-bezier(.45,.22,.57,.91)',
    mobile: {
        paddingBottom: [18, .55, 20],
        flexDirection: column,
        justifyContent: flexStart,
        alignItems: flexStart
    },
    print: {
        display: none
    },
    link: {
        font: globals.fonts.body,
        display: flex,
        alignItems: center,
        justifyContent: center,
        color: globals.colors.headingColor,
        padding: 0,
        minHeight: [48, .7, 40],
        minWidth: [48, .7, 40],
        borderRadius: 40,
        fontWeight: 700,
        fontSize: 14,
        position: relative,
        hover: {
            color: globals.colors.linkHoverColor,
            child: {
                selector: 'svg',
                color: globals.colors.linkHoverColor
            }
        }
    },
    icon: {
        size: [18, .7, 18],
        color: globals.colors.headingColor,
        zIndex: 1,
        ie: {
            position: relative,
            top: sv(12)
        },
        hover: {
            borderColor: globals.colors.linkHoverColor
        }
    },
    downloadIcon: {
        color: globals.colors.headingColor,
        link: {
            color: globals.colors.headingColor,
            textTransform: uppercase,
            weight: 600,
            padding: `0 ${sv(20)} 0 ${sv(15)}`,
            child: {
                selector: '> span',
                ie: {
                    position: relative,
                    top: sv(7)
                },
            },
            hover: {
                backgroundColor: white,
                color: globals.colors.blue,
                child: {
                    selector: 'svg',
                    color: globals.colors.blue
                }
            }
        },
        icon: {
            size: [13, .7, 13],
            marginRight: 14,
            ie: {
                position: relative,
                top: sv(7)
            },
        },
        mobile: {
            display: none
        }
    },
    iconWrap: {
        display: 'inline',
        mobile: {
            display: flex,
            justifyContent: center,
            alignItems: center,
            size: 18,
            lineHeight: 30,
            textDecoration: 'underline',
            marginBottom: 20,
            child: [
                {
                    selector: 'a',
                    color: globals.colors.headingColor,
                }
            ]
        },
    },
}