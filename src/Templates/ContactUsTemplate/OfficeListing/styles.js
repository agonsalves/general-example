import {
    auto,
    block,
    borderBox,
    center,
    column,
    flex,
    none,
    relative,
    sv
}                from 'utils/themer'
import {globals} from 'variables/styles'

export const officeListingStyle = {
    display: block,
    position: relative,
    width: [467, globals.style.layoutScalingValue, '100%'],
    height: auto,
    borderRadius: [10, .7, 10],
    color: globals.colors.headingColor,
    marginBottom: [35, .7, 50],
    print: {
        pageBreakInside: 'avoid',
        pageBreakBefore: 'always'
    },
    hover: {
        color: globals.colors.linkActiveColor,
        child: {
            selector: 'img',
            opacity: .6
        }
    },
    ie: {
        marginBottom: sv(35, globals.style.layoutScalingValue, 35)
    },
    ieLarge: {
        marginBottom: '35px'
    },
    child: [
        {
            selector: ':nth-child(n+3):not(:nth-child(n+5))',
            msGridRow: 2
        },
        {
            selector: ':nth-child(n+5):not(:nth-child(n+7))',
            msGridRow: 3
        },
        {
            selector: ':nth-child(n+6):not(:nth-child(n+8))',
            msGridRow: 4
        },
        {
            selector: ':nth-child(n+8):not(:nth-child(n+10))',
            msGridRow: 5
        },
        {
            selector: ':nth-child(n+10):not(:nth-child(n+12))',
            msGridRow: 6
        },
        {
            selector: ':nth-child(even)',
            msGridColumn: 3
        }
    ],
    phone: {},
    button: {
        display: flex,
        position: relative,
        font: globals.fonts.heading,
        color: globals.colors.blue,
        size: [18, .7, 18],
        lineHeight: [20, .7, 20],
        textTransform: none,
        weight: 400,
        alignItems: center,
        marginTop: 31
    },
    buttonText: {
        position: relative,
        display: block,
        transition: '500ms ease color',
    },
    buttonIcon: {
        transition: 'color 500ms ease',
        size: [24, .7, 22],
        marginLeft: [20, .7, 20]
    },
    addressWrapper: {
        display: flex,
        flexDirection: column,
        size: [18, .7, 18],
        lineHeight: [30, .7, 30],
        letterSpacing: [.5, .7, .5],
        color: globals.colors.textColor,
        font: globals.fonts.body,
    },
    name: {
        font: globals.fonts.heading,
        size: [24, .7, 24],
        marginTop: [26, .4, 25],
        marginBottom: [11, .7, 11],
        lineHeight: [30, .7, 30],
        weight: 600,
        boxSizing: borderBox,
        transition: 'color 500ms ease',
        mobile: {
            position: relative
        }
    },
    image: {
        width: [467, .7, '100%'],
        height: auto,
        maxHeight: none,
        transition: 'opacity 500ms ease',
    }
}