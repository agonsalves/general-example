import {
    auto,
    column,
    flex,
    flexStart,
    hidden,
    row,
    spaceBetween
}                from '../../utils/themer'
import {globals} from '../../variables/styles'

export const archiveListingPublicationListingStyle = (isFirst, image) => {
    if (isFirst) {
        return {
            title: {
                display: 'block; display: -webkit-box;',
                webkitLineClamp: 3,
                webkitBoxOrient: 'vertical',
                maxHeight: [125, .7, 125],
                overflow: hidden,
                textOverflow: 'ellipsis',
                height: auto,
                size: [36, .6, 24],
                marginTop: [20, .4, 20],
                marginBottom: [41, .4, 12],
                lineHeight: [42, .5, 30],
                weight: 600,
                mobile: {
                    webkitLineClamp: 2,
                    maxHeight: [60, .7, 60],
                    weight: 400
                },
                print: {
                    maxHeight: 58
                }
            },
            byline: {
                size: [18, .8, 18],
                lineHeight: [30, .7, 30],
                letterSpacing: [0.2, .7, 0.2],
                marginBottom: [25, .7, '0']
            },
            dateAndSource: {
                date: {
                    size: [18, .8, 18],
                    lineHeight: [30, .7, 30],
                    letterSpacing: [0.2, .7, 0.2]
                },
                source: {
                    size: [18, .8, 18],
                    lineHeight: [30, .7, 30],
                    letterSpacing: [0.2, .7, 0.2]
                }
            },
            thumbnail: {
                width: [555, globals.style.layoutScalingValue, '100%'],
                minWidth: [555, globals.style.layoutScalingValue, '100%']
            },
            innerLink: {
                display: flex,
                flexDirection: image ? 'row-reverse' : row,
                justifyContent: spaceBetween,
                minHeight: 200,
                alignItems: flexStart,
                mobile: {
                    flexDirection: column,
                    paddingBottom: 35
                }
            },
        }
    }
    return {
        innerLink: {
            display: flex,
            flexDirection: image ? 'row-reverse' : row,
            justifyContent: spaceBetween,
            minHeight: 200,
            alignItems: flexStart,
            mobile: {
                flexDirection: column,
                paddingBottom: 35
            }
        },
        title: {
            display: 'block; display: -webkit-box;',
            webkitLineClamp: 2,
            webkitBoxOrient: 'vertical',
            maxHeight: [60, .7, 60],
            overflow: hidden,
            textOverflow: 'ellipsis',
            height: auto,
            marginBottom: [12, .7, 12]
        },
        type: {
            marginBottom: [14, .7, 14]
        },
        byline: {
            marginTop: [6, .7, 6],
            paddingBottom: [30, .7, '0']
        },
        thumbnail: {
            minWidth: [325, globals.style.layoutScalingValue, '100%'],
            width: [325, globals.style.layoutScalingValue, '100%'],
        }
    }
}