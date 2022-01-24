import Div            from 'Shared/Div'
import {searchButton} from '../../Shared/ButtonLarge/styles'
import {
    block,
    column,
    flex,
    hidden,
    none,
    uppercase,
    white
}                     from '../../utils/themer'
import {
    colorPalette,
    globals
}                     from '../../variables/styles'

export const archiveWrapperStyle = {
    width: '100%',
    overflow: hidden,
    display: flex,
    flexDirection: column,
    marginBottom: [10, .7, 10],
    backgroundColor: globals.colors.cardBackgroundColor,
    transition: 'background-color 250ms ease, color 250ms ease',
    hover: {
        backgroundColor: globals.colors.cardBackgroundHoverColor,
        color: white,
        child: [
            {
                selector: 'div',
                color: colorPalette.blue
            },
            {
                selector: 'div > span',
                color: white
            },
            {
                selector: 'span',
                color: white
            },
            {
                selector: 'h2',
                color: globals.colors.linkActiveColor
            },
            {
                selector: 'div.archive-accent',
                color: white
            },
            {
                selector: 'span.archive-accent',
                color: globals.colors.linkActiveColor
            },
            {
                selector: 'img',
                opacity: .7
            }
        ],
        after: {
            content: none
        }
    },
    print: {
        pageBreakInside: 'avoid'
    },
}

export const archiveSourceStyle = {
    font: globals.fonts.body,
    fontStyle: 'italic',
    color: globals.colors.archiveDateAndTypeColor,
    size: [18, .7, 18],
    lineHeight: [30, .7, 30],
    letterSpacing: [0.5, .7, 0.5],
    weight: 300,
    marginTop: [3, .7, 3],
    byline: {}
}

export const archiveBylineStyle = {
    display: block,
    font: globals.fonts.body,
    color: globals.colors.archiveDateAndTypeColor,
    size: [16, .7, 16],
    lineHeight: [22, .7, 22],
    letterSpacing: [0.18, .7, 0.18],
    marginTop: [3, .7, 3],
}

export const ArchiveListingTitle = ({children, theme}) =>
    <Div theme={{
        display: block,
        font: globals.fonts.heading,
        size: [26, .7, 26],
        lineHeight: [30, .7, 30],
        marginBottom: [32, .7, 32],
        weight: 500,
        color: globals.colors.headingColor,
        ...theme
    }}>
        {children}
    </Div>

export const ArchiveListingTextWrapper = ({children, theme}) =>
    <Div theme={{
        paddingRight: [40, globals.style.layoutScalingValue, 25],
        paddingLeft: [40, globals.style.layoutScalingValue, 25],
        ...theme
    }}>
        {children}
    </Div>

export const archiveListingStyle = {
    innerLink: {
        display: block,
        height: '100%',
        width: '100%',
        paddingBottom: [35, .7, 35],
        mobile: {
            display: flex,
            flexDirection: column
        },
        print: {
            paddingBottom: 35,
        },
    },
    textWrapper: {
        paddingRight: [40, globals.style.layoutScalingValue, 25],
        paddingLeft: [40, globals.style.layoutScalingValue, 25],
    },
    pageTitle: {},
    title: {
        display: block,
        font: globals.fonts.heading,
        size: [26, .7, 26],
        lineHeight: [30, .7, 30],
        marginBottom: [32, .7, 32],
        weight: 500,
        color: globals.colors.headingColor,
    },
    excerpt: {
        display: block,
        size: [16, .7, 16],
        color: globals.colors.textColor,
        lineHeight: [24, .7, 24],
        marginBottom: [35, .7, 35],
    },
    source: {
        ...archiveSourceStyle
    },
    byline: {
        ...archiveBylineStyle,
        name: {
            color: globals.colors.archiveDateAndTypeColor
        }
    },
    eventListingInfoStyle: {
        color: globals.colors.textColor,
        marginTop: 13,
        size: [18, .7, 18]
    },
    query: {},
    type: {
        font: globals.fonts.body,
        textTransform: uppercase,
        size: [13, .7, 13],
        letterSpacing: [2, .7, 2],
        lineHeight: [30, .7, 30],
        marginBottom: [9, .7, 9],
        marginTop: [24, .7, 24],
        weight: 600,
        color: globals.colors.linkActiveColor
    },
    clearButton: {
        ...searchButton,
        mobile: {
            margin: '0px auto 30px 0'
        }
    },
    pagination: {
        paddingTop: [11, .7, 11],
        marginTop: 0,
    }
}