import {none, center, auto, transparent, flexStart}    from 'utils/themer'
import {globals} from 'variables/styles'

export const blogPostListingItemStyle = isFirstItem => {
    const baseStyle = {
        byline: {
            display: none
        },
        excerpt: {
            display: none
        },
        thumbnail: {
            width: [isFirstItem ? 555 : 325, globals.style.layoutScalingValue, '100%'],
            minWidth: [isFirstItem ? 555 : 325, globals.style.layoutScalingValue, '100%'],
            paddingBottom: 0
        },
    }

    if (isFirstItem) {
        return {
            ...baseStyle,
            dateAndSource: {
                date: {
                    size: [18, .7, 18],
                    lineHeight: [30, .7, 30],
                    letterSpacing: [0.2, .7, 0.2],
                    paddingBottom: [30, .7, 30]
                }
            }
        }
    }

    return {
        ...baseStyle,
        thumbnail: {
            wrapper: {
                alignSelf: center,
                paddingLeft: [40, globals.style.layoutScalingValue, '0'],
                marginLeft: auto,
                marginRight: 50,
                background: transparent,
                mobile: {
                    marginLeft: 25,
                    marginTop: 25,
                    alignSelf: flexStart
                }
            },
            desktop: {
                order: 1,
            },
            maxWidth: [195, globals.style.layoutScalingValue, '100%'],
            minWidth: [195, globals.style.layoutScalingValue, '100%'],
            alignSelf: center
        }
    }
}
export const noPaginationStyle = {
    mobile: {
        marginBottom: 53
    }
}