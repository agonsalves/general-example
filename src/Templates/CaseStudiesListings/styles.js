import {defaultFirstParagraphLargeStyle} from 'Shared/RichText/styles'
import {
    auto,
    column,
    flex,
    flexStart,
    hidden,
    transparent,
    wrap
}                                        from 'utils/themer'
import {globals}                         from 'variables/styles'

export const archiveListingCaseStudyListingsStyle = {
    display: flex,
    flexWrap: wrap,
    child: {
        selector: '> article:nth-child(even)',
        marginRight: 0
    }
}

export const caseStudyListingsHeadingStyle = {
    ...defaultFirstParagraphLargeStyle,
    paddingBottom: [30, .7, '0']
}

export const archiveListingCaseStudyListingStyle = {
    marginRight: [10, globals.style.layoutScalingValue, '0'],
    width: [465, globals.style.layoutScalingValue, '100%'],
    innerLink: {
        display: flex,
        flexDirection: 'column-reverse'
    },
    title: {
        font: globals.fonts.heading,
        size: [24, .7, 24],
        lineHeight: [30, .7, 30],
        color: globals.colors.headingColor,
        display: 'block; display: -webkit-box;',
        webkitLineClamp: 3,
        webkitBoxOrient: 'vertical',
        maxHeight: [90, .7, 90],
        marginBottom: [18, .7, 18],
        marginTop: 0,
        overflow: hidden,
        textOverflow: 'ellipsis',
        height: auto,
    },
    button: {
        display: flex,
        alignSelf: flexStart,
        flexDirection: 'row-reverse',
        color: globals.colors.linkActiveColor,
        iconWrapper: {
            background: transparent
        },
        icon: {
            color: globals.colors.linkActiveColor
        }
    },
    textWrapper: {
        display: flex,
        flexDirection: column,
        paddingLeft: [40, globals.style.layoutScalingValue, 25],
        paddingRight: [120, globals.style.layoutScalingValue, 25],
        paddingTop: [30, globals.style.layoutScalingValue, 25]
    },
    thumbnail: {
        minWidth: '100%',
        maxWidth: '100%',
        width: '100%'
    }
}