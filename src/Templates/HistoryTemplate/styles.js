import {
    absolute,
    auto,
    column,
    flex,
    flexStart,
    inlineBlock,
    inlineFlex,
    none,
    relative,
    uppercase
}                from '../../utils/themer'
import {globals} from '../../variables/styles'

export const historyTemplateStyle = {
    flexWrap: 'nowrap',
    itemWrapper: {
        borderTop: `2px solid #F3F3F3`,
        paddingTop: 60,
        marginTop: 72
    },
    imageWrapper: {
        marginRight: 73,
        width: [330, .6, '100%'],
        minWidth: [330, .7, 'inherit'],
        maxWidth: [330, .7, '330px'],
        alignSelf: flexStart,
    },
    image: {
        width: '100%',
        mobile: {
            marginBottom: 20
        }
    },
    item: {
        display: flex,
        marginBottom: 60,
        print: {
            pageBreakInside: 'avoid'
        },
        mobile: {
            flexDirection: column
        },
        lastChild: {
            marginBottom: 90,
            child: {
                selector: 'div',
                border: none
            }
        },
    },
    year: {
        marginTop: 0,
        size: [39, .7, 32],
        lineHeight: [39, .7, 32],
        marginBottom: 32,
        weight: 800,
        position: relative,
        display: inlineFlex,
    },
    yearWithImage: {
        marginTop: 0,
        size: [39, .7, 32],
        lineHeight: [39, .7, 32],
        marginBottom: 32,
        weight: 800,
        position: relative,
        display: inlineBlock,
        after: {
            content: '\' \'',
            height: 4,
            width: '100%',
            backgroundColor: globals.colors.blue,
            position: absolute,
            marginBottom: -15,
            left: 0,
            top: auto,
            bottom: 0
        }
    },
    description: {
        borderBottom: `2px solid #F3F3F3`,
        child: {
            selector: 'p',
            marginBottom: 51
        }
    },
    textWrapper: {
        marginTop: -9,
        mobile: {
            marginTop: 0
        }
    }
}

export const micrositePageTitleStyle = {
    font: globals.fonts.heading,
    color: globals.colors.textColor,
    textTransform: uppercase,
    fontSize: [38, .7, 26],
    fontWeight: 800,
    lineHeight: [48, .7, 36],
    paddingBottom: [52, .7, 23]
}