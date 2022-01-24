import {searchButton} from 'Shared/ButtonLarge/styles'
import {
    borderBox,
    center,
    column,
    flex,
    inlineFlex,
    none,
    relative,
    transparent,
    white,
    wrap
}                     from 'utils/themer'
import {globals}      from 'variables/styles'

export const alphabetFilterStyle = {
    display: flex,
    flexWrap: 'nowrap',
    mobile: {
        border: 0,
        margin: 0,
        order: -1,
        flexDirection: column,
        minWidth: 345,
        width: '350px',
        marginLeft: -6,
        marginTop: 13
    },
    inner: {
        display: flex,
        flexWrap: wrap,
        mobile: {
            width: '100%',
            marginLeft: '30px'
        }
    },
    letter: {
        display: flex,
        justifyContent: center,
        alignItems: center,
        height: [42, .7, 38],
        width: [42, .7, 38],
        boxSizing: borderBox,
        fontSize: [24, .65, 18],
        weight: 600,
        color: globals.colors.headingColor,
        backgroundColor: transparent,
        textDecoration: none,
        position: relative,
        zIndex: 0,
        hover: {
            color: globals.colors.linkHoverColor
        },
        mobile: {
            backgroundColor: globals.colors.gray,
            margin: '0 5px 10px 6px'
        },
        class: {
            name: 'undefined',
            opacity: .4,
            hover: {
                pointerEvents: none,
                color: globals.colors.headingColor
            },
            mobile: {
                color: 'rgba(255,255,255,0.4)',
                opacity: 1,
            }
        },
    },
    viewAll: {
        ...searchButton,
        color: globals.colors.textColor,
        borderColor: globals.colors.buttonColor,
        backgroundColor: white,
        width: [170, .7],
        height: [66, .7, 66],
        mobile: {
            marginTop: 10
        },
        hover: {
            ...searchButton.hover,
            background: globals.colors.linkHoverColor,
            borderColor: globals.colors.linkHoverColor,
            color: white
        }
    },
    viewAllLetter: {
        justifyContent: center,
        alignItems: center,
        backgroundColor: globals.colors.textColor,
        weight: 600,
        color: white,
        textDecoration: none,
        display: none,
        textTransform: 'uppercase',
        mobile: {
            display: inlineFlex,
            height: 38,
            width: 87,
            size: 13,
            lineHeight: 18,
            marginLeft: 6
        },
        hover: {
            color: white
        }
    },
    viewAllIcon: {
        size: [16, .7, 18],
        marginLeft: 15
    }
}