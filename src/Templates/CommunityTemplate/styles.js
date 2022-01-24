import {defaultFirstParagraphLargeStyle} from '../../Shared/RichText/styles'
import {
    auto,
    column,
    flex
}                                        from '../../utils/themer'
import {globals}                         from '../../variables/styles'

export const communityStyle = {
    topSection: {
        marginBottom: [70, .7, 50],
    },
    paragraphStyle: {
        ...defaultFirstParagraphLargeStyle,
        child: [
            ...defaultFirstParagraphLargeStyle.child,
            {
                selector: 'p:first-child',
                marginBottom: [60, .5, 21],
                mobile: {
                    color: globals.colors.textColor,
                },
            }

        ]
    },
    gallery: {
        display: flex,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: [150, .7, 0],
        marginTop: 12,
        mobile: {
            flexDirection: 'row',
        },
        print: {
            padding: 0,
            pageBreakInside: 'avoid'
        },
        item: {
            display: flex,
            flexDirection: column,
            marginBottom: [70, globals.style.layoutScalingValue, 50],
            width: [430, globals.style.layoutScalingValue, 'auto'],
            mobile: {
                width: auto,
            },
            print: {
                pageBreakInside: 'avoid'
            }
        },
        caption: {
            size: [18, .9, 18],
            lineHeight: [30, .9, 30],
            color: globals.colors.textColor,
            weight: 300,
        },
        image: {
            height: [370, globals.style.layoutScalingValue, 'auto'],
            marginBottom: [21, .7, 21],

            print: {
                marginBottom: 0,
                pageBreakInside: 'avoid'
            },
        }
    }
}