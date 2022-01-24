import {
    absolute,
    auto,
    block,
    borderBox,
    center,
    flex,
    flexStart,
    hidden,
    none,
    relative,
    spaceBetween,
    uppercase,
    white
}                from 'utils/themer'
import {globals} from 'variables/styles'

export const firmHighlightsItemStyle = {
    display: block,
    boxSizing: borderBox,
    overflow: hidden,
    height: [370, .7, 402],
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    width: '100%',
    maxHeight: '402px',
    maxWidth: '287px',
    borderRadius: '10px',
    mobile: {
        width: 250,
        padding: 0,
        background: none,
    },
    hover: {
        color: globals.colors.linkActiveColor,
        child: [
            {
                selector: 'h3',
                textDecoration: 'underline'
            },
            {
                selector: 'img',
                opacity: .7
            },
            {
                selector: 'svg',
                color: globals.colors.linkActiveColor,
            },
            {
                selector: 'span',
                color: globals.colors.linkActiveColor,
            },
            {
                selector: 'div.highlight-excerpt',
                opacity: .7
            }
        ]
    },
    postType: {
        position: relative,
        color: globals.colors.linkActiveColor,
        fontWeight: 500,
        lineHeight: [30, .7, 30],
        textTransform: uppercase,
        size: [13, .7, 13],
        letterSpacing: [2, .7, 2],
        paddingBottom: [3, .7, 10],
        zIndex: 1,
        transition: 'opacity 500ms',
    },
    postTitle: {
        display: 'block; display: -webkit-box;',
        webkitLineClamp: 3,
        webkitBoxOrient: 'vertical',
        maxHeight: [88, .7, 115],
        overflow: hidden,
        textOverflow: 'ellipsis',
        height: auto,
        color: white,
        font: globals.fonts.heading,
        weight: 400,
        textTransform: 'none',
        transition: 'color 500ms ease, opacity 500ms ease;',
        size: [24, .6, 21],
        lineHeight: [30, .6, 28],
        marginBottom: [16, .7, 16],
        marginTop: 0,
        mobile: {
            webkitLineClamp: 4
        }
    },
    imageWrapper: {
        background: white
    },
    image: {
        margin: 0,
        width: '100%',
        marginBottom: [25, .7, 22],
        marginTop: [7, .7, '0'],
        transition: 'opacity 500ms'
    },
    excerpt: {
        display: 'block; display: -webkit-box;',
        webkitLineClamp: 7,
        webkitBoxOrient: 'vertical',
        size: [16, .65, 16],
        lineHeight: [24, .65, 24],
        marginTop: [15, .7, 15],
        maxHeight: [168, .7, 168],
        overflow: hidden,
        color: 'rgba(255,255,255,0.7)',
        transition: 'color 500ms ease, opacity 500ms ease;',
        mobile: {
            webkitLineClamp: 5,
        }
    },
    button: {
        display: flex,
        position: absolute,
        alignSelf: flexStart,
        justifyContent: spaceBetween,
        bottom: [0, globals.style.layoutScalingValue, 33],
        width: auto,
        color: globals.colors.blue,
        size: [16, .7, 16],
        lineHeight: [30, .7, 30],
        letterSpacing: [0.18, .7, 0.18],
        textTransform: none,
        weight: 400,
        alignItems: center,
        mobile: {

            width: 143
        }
    },
    buttonText: {
        position: relative,
        display: block,
        transition: '500ms ease color',
    },
    buttonIcon: {
        transition: 'color 500ms ease',
        size: [18, .7, 18],
        marginLeft: [20, .7, 20],
        marginTop: [2, .7, 2]
    }
}