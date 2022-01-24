import {
    auto,
    block,
    flex,
    flexStart,
    hidden,
    none,
    row,
    spaceBetween
}                            from 'utils/themer'
import {globals}             from 'variables/styles'
import {archiveListingStyle} from '../ArchiveListingWrapper/styles'

/**
 *
 *   NEWS LISTING
 *
 */

export const genericNewsListingItemStyle = {
    minHeight: [200, .7, 'auto'],
    innerLink: {
        ...archiveListingStyle.innerLink,
        display: flex,
        flexDirection: row,
        justifyContent: spaceBetween,
        desktop: {
            paddingBottom: 0
        },
        mobile: {
            ...archiveListingStyle.innerLink.mobile,
            flexDirection: 'column-reverse'
        }
    },
    title: ({isFirstItem}) => {
        const baseStyle = {
            marginBottom: [15, .7, 15],
            display: 'block; display: -webkit-box;',
            webkitLineClamp: 2,
            webkitBoxOrient: 'vertical',
            maxHeight: [60, .7, 60],
            overflow: hidden,
            textOverflow: 'ellipsis',
            height: auto,
        }

        if (isFirstItem) {
            return {
                ...baseStyle,
                size: [38, .7, 24],
                lineHeight: [42, .7, 30],
                maxHeight: [125, .7, 125],
                webkitLineClamp: 3,
            }
        }


        return {
            ...baseStyle
        }
    },
    date: ({isFirstItem}) => {
        const baseStyle = {
            display: block,
            marginBottom: [16, .7, '0']
        }

        if (isFirstItem) {
            return {
                ...baseStyle,
                size: [18, .8, 18],
                lineHeight: [30, .7, 30],
                letterSpacing: [0.2, .7, 0.2],
                marginBottom: [25, .7, '0']
            }
        }

        return {
            ...baseStyle
        }

    },
    thumbnail: ({isFirstItem}) => {
        const baseStyle = {
            alignSelf: flexStart,
            height: auto,
            minWidth: [325, globals.style.layoutScalingValue, '100%'],
            maxWidth: [325, globals.style.layoutScalingValue, '100%'],
        }

        if (isFirstItem) {
            return {
                ...baseStyle,
                minWidth: [615, globals.style.layoutScalingValue, '100%'],
                maxWidth: [615, globals.style.layoutScalingValue, '100%'],
            }
        }

        return {
            ...baseStyle
        }
    },
    excerpt: {
        mobile: {
            marginBottom: 0,
            marginTop: 16
        }
    }
}

export const newsListingItemStyle = {
    title: ({isFirstItem}) => {
        const baseStyle = {
            marginBottom: [15, .7, 15],
            display: 'block; display: -webkit-box;',
            webkitLineClamp: 2,
            webkitBoxOrient: 'vertical',
            maxHeight: [60, .7, 60],
            overflow: hidden,
            textOverflow: 'ellipsis',
            height: auto,
        }

        if (isFirstItem) {
            return {
                display: 'block; display: -webkit-box;',
                webkitLineClamp: 3,
                webkitBoxOrient: 'vertical',
                maxHeight: [125, .7, 125],
                overflow: hidden,
                textOverflow: 'ellipsis',
                height: auto,
                size: [36, .6, 24],
                marginTop: [20, .4, 20],
                marginBottom: [71, .4, 12],
                lineHeight: [42, .7, 30],
                weight: 600,
                mobile: {
                    webkitLineClamp: 2,
                    maxHeight: [60, .7, 60],
                    weight: 400
                }
            }
        }


        return {
            ...baseStyle
        }
    },
    date: ({isFirstItem}) => {
        const baseStyle = {
            display: block,
            marginBottom: [16, .7, '0']
        }

        if (isFirstItem) {
            return {
                ...baseStyle,
                size: [18, .8, 18],
                lineHeight: [30, .7, 30],
                letterSpacing: [0.2, .7, 0.2],
                marginBottom: [25, .7, '0']
            }
        }

        return {
            ...baseStyle
        }

    },
    thumbnail: ({isFirstItem}) => {
        const baseStyle = {
            alignSelf: flexStart,
            height: auto,
            minWidth: [325, globals.style.layoutScalingValue, '100%'],
            maxWidth: [325, globals.style.layoutScalingValue, '100%'],
        }

        if (isFirstItem) {
            return {
                ...baseStyle,
                minWidth: [555, globals.style.layoutScalingValue, '100%'],
                maxWidth: [555, globals.style.layoutScalingValue, '100%'],
            }
        }

        return {
            ...baseStyle
        }
    },
    excerpt: {
        display: none
    }
}