import {
    flex,
    flexStart,
    none,
    relative,
    spaceBetween
}                from '../../utils/themer'
import {globals} from '../../variables/styles'

export const pullquoteWidgetStyle = {
    borderLeft: globals.style.dividingBorder,
    borderWidth: '1px',
    paddingLeft: [40, .7, '0'],
    before: {
        content: '\t&quot;',
        print: {
            display: none,
        }
    },
    quote: {
        child: {
            font: globals.fonts.heading,
            fontStyle: 'italic',
            selector: '> p',
            weight: 500,
            size: [33, .6, 33],
            lineHeight: [40, .5, 40],
            letterSpacing: [.5, .7, .5],
            color: globals.colors.headingColor
        },
    },
    quoteIcon: {
        position: relative,

    },
    attribution: {
        font: globals.fonts.body,
        size: [18, .7, 18],
        lineHeight: [24, .7, 24],
        letterSpacing: [.4, .7, .4],
        color: globals.colors.linkActiveColor,
        weight: 400,
        marginTop: [26, .7, 26]
    },
    attributionTitle: {
        font: globals.fonts.body,
        size: [18, .7, 18],
        letterSpacing: [.5, .7, .5],
        lineHeight: [24, .7, 24],
        color: globals.colors.archiveDateAndTypeColor,
        weight: 400,
        marginTop: [6, .7, 6]
    },
    attributionWrapper: {
        display: flex,
        justifyContent: spaceBetween,
        position: relative,
        inner: {
            display: flex,
            flexDirection: 'column',
            alignItems: flexStart,
            width: '100%'
        }
    },
    attributionQuote: {
        position: relative,

    },
}