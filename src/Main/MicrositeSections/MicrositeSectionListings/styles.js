import {
    auto,
    center,
    column,
    flex,
    hidden,
    wrap
}                from '../../../utils/themer'
import {globals} from '../../../variables/styles'

export const micrositeSectionButtonWrapperStyle = {
    display: flex,
    flexDirection: column,
    alignItems: center,
    justifyContent: center
}
export const micrositePublicationListingStyle = {
    title: {
        display: 'block; display: -webkit-box;',
        webkitLineClamp: 3,
        webkitBoxOrient: 'vertical',
        maxHeight: [90, .7, 90],
        overflow: hidden,
        textOverflow: 'ellipsis',
        height: auto,
    }
}
export const micrositeSectionListingStyleSwitch = postType => {
    const baseStyle = {
        display: flex,
    }

    switch (postType) {
        case 'publication':
            return {
                ...baseStyle,
                flexWrap: wrap,
                child: {
                    selector: 'article',
                    width: [375, .43, ' 100%'],
                    marginRight: [10, globals.style.layoutScalingValue, '0'],
                    paddingBottom: [40, globals.style.layoutScalingValue, 40],
                    child: [
                        {
                            selector: ':nth-child(3n)',
                            marginRight: 0
                        }
                    ],
                    mobile: {
                        width: '100%'
                    }
                }
            }
        case 'blog-post':
            return {
                ...baseStyle,
                flexWrap: wrap,
                child: {
                    selector: 'article',
                    width: [403, globals.style.layoutScalingValue, ' 100%'],
                    marginRight: [10, globals.style.layoutScalingValue, '0'],
                    paddingBottom: [40, globals.style.layoutScalingValue, 40],
                    child: [
                        {
                            selector: ':nth-child(3n)',
                            marginRight: 0
                        }
                    ],
                    mobile: {
                        width: '100%'
                    }
                }
            }
        case 'person':
            return {
                ...baseStyle,
                flexWrap: wrap
            }

        case 'event':
            return {
                ...baseStyle,
                flexWrap: wrap,
                child: {
                    selector: 'article',
                    width: [568, .43, '100%'],
                    paddingTop: [26, globals.style.layoutScalingValue, 32],
                    paddingRight: [53, globals.style.layoutScalingValue, 53],
                    paddingBottom: [40, globals.style.layoutScalingValue, 40],
                    paddingLeft: [40, globals.style.layoutScalingValue, 40],
                    child: [
                        {
                            selector: ':nth-child(odd)',
                            marginRight: [10, globals.style.layoutScalingValue, 10]

                        }
                    ]
                }
            }
        case 'news-item':
        case 'case-study':
            return {
                ...baseStyle,
                flexDirection: column,
                paddingBottom: [40, globals.style.layoutScalingValue, 40],
            }
        default:
            return baseStyle
    }
}