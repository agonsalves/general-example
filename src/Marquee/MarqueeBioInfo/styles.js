import {isPersonMicrositeHasPhoto} from 'utils/flags'
import {
    block,
    center,
    column,
    flex,
    inlineFlex,
    none,
    relative,
    row,
    uppercase,
    white
}                                  from 'utils/themer'
import {globals}                   from 'variables/styles'

export const personMicrositeBioInfoTextStyle = {
    font: globals.fonts.body,
    size: [18, .7, 18],
    letterSpacing: [0.33, .7, 0.33],
    lineHeight: [30, .7, 30],
    weight: 400,
    color: globals.colors.headingColor,
    mobile: {
        display: none
    },
    print: {
        color: globals.colors.headingColor
    }
}

export const personMicrositeBioInfoStyle = {
    positionSocialWrapper: post => {
        return {
            display: flex,
            alignItems: center,
            mobile: {
                display: isPersonMicrositeHasPhoto(post) ? none : block
            }
        }
    },
    position: {
        display: flex,
        alignItems: center,
        flexShrink: 0,
        font: globals.fonts.body,
        weight: 500,
        size: [18, .6, 16],
        lineHeight: [40, .6, 24],
        letterSpacing: [2, .6, 1.78],
        color: globals.colors.headingColor,
        textTransform: uppercase,
        whiteSpace: 'nowrap',
        marginRight: 30,
        height: [48, .7, 'auto'],
        mobile: {
            marginTop: 2
        },
        print: {
            color: globals.colors.textColor
        }
    },
    emailWrapper: {
        display: flex,
        alignItems: center,
        marginTop: 15,
        mobile: {
            display: none
        }
    },
    email: {
        ...personMicrositeBioInfoTextStyle,
        display: block,
        textDecoration: 'underline',
        hover: {
            color: globals.colors.linkHoverColor
        }
    },
    iconWrapper: {
        height: [40, .7, 40],
        width: [40, .7, 40],
        minWidth: [40, .7, 40],
        background: white,
        display: flex,
        alignItems: center,
        justifyContent: center,
        borderRadius: [20, .7, 20],
        marginRight: 20,
    },
    emailIcon: {
        size: [17, .7, 17],
        color: globals.colors.linkActiveColor
    },
    numbersIcon: isOffice => {
        const baseStyle = {
            size: [17, .7, 20],
            color: globals.colors.linkActiveColor
        }

        if (!isOffice)
            return {
                ...baseStyle,
                transform: 'rotate(90deg)'
            }

        return {
            ...baseStyle
        }

    },
    phoneList: {
        display: flex,
        flexDirection: column,
        marginTop: [6, .4],
        mobile: {
            display: none
        },
        contact: {
            display: flex,
            flexDirection: row,
            position: relative

        },
        nameLink: {
            ...personMicrositeBioInfoTextStyle,
        },
        phoneLink: {
            ...personMicrositeBioInfoTextStyle,
            display: flex,
            alignItems: center,
            before: {
                display: inlineFlex,
                marginLeft: 6,
                marginRight: 6,
                content: '\'  \'',
                width: [18, .7, 18],
                height: [2, .7, 2],
                backgroundColor: globals.colors.headingColor,
                position: relative,
                marginBottom: [-2, .7, -2]
            }
        },
        phoneLinkWithoutDash: {
            ...personMicrositeBioInfoTextStyle,
            display: flex,
            alignItems: center,
        }
    }
}