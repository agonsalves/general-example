import {
    auto,
    center,
    flex,
    flexStart,
    none,
    pointer,
    row,
    white
}                from 'utils/themer'
import {globals} from 'variables/styles'

export const socialSharingInnerStyle = {
    mobile: {
        display: flex,
        flexDirection: row,
        marginBottom: 21
    },
    child: [
        {
            selector: '> button',
            height: [50, .7, 50],
            width: [50, .7, 50],
            border: globals.style.dividingBorder + '!important',
            borderWidth: '1px !important',
            display: flex,
            alignItems: center,
            justifyContent: center,
            hover: {
                backgroundColor: globals.colors.linkActiveColor + '!important',
                borderColor: globals.colors.linkActiveColor,
                child: {
                    selector: 'svg',
                    color: white
                }
            },
            child: [
                {
                    selector: ':not(:last-child)',
                    desktop: {
                        borderBottom: '0 !important'
                    },
                    mobile: {
                        borderRight: '0 !important'
                    }
                }
            ]
        }
    ]
}
export const socialSharingStyle = {
    display: flex,
    alignItems: center,
    alignSelf: flexStart,
    minWidth: [50, .7, 50],
    maxWidth: [50, .7, 50],
    mobile: {
        marginBottom: 10,
        marginRight: auto,
        marginLeft: 0,
        marginTop: 0
    },
    icon: {
        cursor: pointer,
        color: globals.colors.archiveDetailIconColor,
        size: [18, .7, 18],
        focus: {
            border: none
        }
    },
    shareText: {
        font: globals.fonts.body,
        size: [18, .7, 18],
        lineHeight: [30, .7, 30],
        weight: 400,
        color: globals.colors.gray,
        marginRight: 7
    },
    child: {
        selector: 'button',
        focus: {
            border: none
        },
        hover: {
            child: {
                selector: 'svg',
                color: globals.colors.blue
            }
        }
    }
}