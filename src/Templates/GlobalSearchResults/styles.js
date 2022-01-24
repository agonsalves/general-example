import {
    auto,
    borderBox,
    center,
    column,
    flex,
    flexEnd,
    none,
    spaceBetween
} from '../../utils/themer'
import {
    colorPalette,
    globals
} from '../../variables/styles'

export const globalSearchStyle = {
    container: {
        marginBottom: 172,
        marginTop: [50, .7, 50]
    },
    section: {
        display: flex,
        mobile: {
            flexDirection: column
        },
    },
    sectionHeader: {
        minWidth: [360, .7, '100%'],
        maxWidth: [360, .7, '100%'],
        backgroundColor: colorPalette.gray,
        paddingLeft: [54, .7, 25],
        paddingTop: [60, .7, 35],
        paddingRight: [54, .7, 25],
        boxSizing: borderBox,
        marginRight: [10, .7, '0'],
        marginBottom: [10, .7, '0'],
        mobile: {
            border: 0
        }
    },
    heading: {
        font: globals.fonts.heading,
        color: globals.colors.headingColor,
        size: [46, .7, 42],
        lineHeight: [50, .7, 42],
        letterSpacing: [-0.6, .7, -0.6],
        weight: 800,
        print: {
            size: 22
        }
    },
    results: (section) => {
        const baseStyle = {
            backgroundColor: colorPalette.gray,
            font: globals.fonts.heading,
            paddingTop: [49, .7, 30],
            paddingLeft: 60,
            paddingRight: 60,
            paddingBottom: [33, .7, 33],
            width: '100%',
            marginBottom: [10, .7, 10],
            mobile: {
                boxSizing: borderBox,
                paddingLeft: 25,
                paddingRight: 25
            },
            print: {
                border: 0
            }
        }

        if (section === 'people')
            return {
                ...baseStyle,
                paddingTop: [69, .7, 30]
            }

        if (section === 'practice-area'
            || section === 'page'
            || section === 'case-study'
            || section === 'blog-post'
        )
            return {
                ...baseStyle,
                paddingTop: [63, .7, 30]
            }

        if (section === 'publication')
            return {
                ...baseStyle,
                paddingTop: [56, .7, 30]
            }

        if (section === 'news-item')
            return {
                ...baseStyle,
                paddingTop: [56, .7, '0']
            }

        if (section === 'event')
            return {
                ...baseStyle,
                mobile: {
                    ...baseStyle.mobile,
                    paddingTop: 0
                }
            }


        if (section === 'person')
            return {
                ...baseStyle,
                paddingTop: [59, .7, 30],
            }

        return {
            ...baseStyle
        }
    },
    query: {
        size: [18, .7, 18],
        lineHeight: [30, .7, 30],
        letterSpacing: [0.4, .7, 0.4],
        paddingBottom: [32, .7, 32],
        marginBottom: 0,
        borderBottom: globals.style.dividingBorder,
        borderWidth: '2px',
        borderColor: globals.colors.headingColor
    },
    button: {
        display: flex,
        justifyContent: spaceBetween,
        alignItems: center,
        color: globals.colors.linkActiveColor,
        font: globals.fonts.body,
        alignSelf: flexEnd,
        size: [18, .7, 18],
        lineHeight: [18, .7, 18],
        letterSpacing: [0.2, .7, 0.2],
        height: [60, .7, 60],
        weight: 600,
        paddingTop: [23, .7, 23],
        paddingBottom: [23, .7, 23],
        width: [130, .7, 130],
        marginLeft: 'auto',
        marginTop: 21,
        mobile: {
            marginLeft: 0,
            marginRight: auto,
            marginTop: 30
        },
        hover: {
            color: globals.colors.linkColor,
        },
        print: {
            display: none
        },
        icon: {
            size: [19, .7, 19]
        }
    }
}