import {
    absolute,
    auto,
    block,
    column,
    flex,
    flexStart,
    none,
    relative,
    transparent,
    white
}                from '../../../utils/themer'
import {globals} from '../../../variables/styles'

export const clientStoriesListingStyle = {
    display: block,
    width: [698, globals.style.layoutScalingValue, '100%'],
    height: auto,
    marginBottom: [120, globals.style.layoutScalingValue, 50],
    position: relative,
    cursor: 'pointer',
    transition: 'color 500ms ease',
    before: {
        display: block,
        position: absolute,
        content: '" "',
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: white,
        opacity: 0,
        transition: 'opacity 500ms ease',
        print: {
            display: none
        }
    },
    print: {},
    hover: {
        color: globals.colors.linkColor,
        child: [
            {
                selector: '.client-story-listing-title',
                color: globals.colors.linkActiveColor,
                transition: 'color 500ms ease',
            },
            {
                selector: ':before',
                opacity: .5,
            },
            {
                selector: 'span',
                color: globals.colors.textColor
            },
            {
                selector: 'svg',
                color: globals.colors.textColor
            }
        ]
    },
    image: {
        pointerEvents: none,
        mobile: {
            maxHeight: none,
            height: auto
        },
        print: {
            //  position: absolute,
        }
    },
    textPanel: {
        display: flex,
        flexDirection: column,
        alignItems: flexStart,
        position: relative,
        paddingTop: [45, globals.style.layoutScalingValue, 25],
        paddingRight: [123, globals.style.layoutScalingValue, '0'],
        paddingBottom: 0,
        paddingLeft: [80, globals.style.layoutScalingValue, '0'],
        width: '100%',
        pointerEvents: none,
        backgroundColor: white,
        print: {
            display: block
        }
    },
    title: {
        font: globals.fonts.heading,
        color: globals.colors.headingColor,
        size: [45, .7, 30],
        lineHeight: [40, .7, 40],
        weight: 600,
        pointerEvents: none,
        width: '100%'
    },
    description: {
        size: [18, .7, 18],
        letterSpacing: [0.4, .7, 0.4],
        lineHeight: [30, .7, 30],
        marginTop: [24, .7, 15],
        color: globals.colors.textColor,
        weight: 300,
        width: '100%'
    },
    button: {
        flexDirection: 'row-reverse',
        color: globals.colors.linkActiveColor,
        transition: 'color 500ms ease',
        size: [18, .7, 18],
        lineHeight: [18, .7, 18],
        marginTop: [14, .7, 8],
        iconWrapper: {
            backgroundColor: transparent,
            marginLeft: [15, .7, 15]
        },
        icon: {
            color: globals.colors.linkActiveColor,
            transition: 'color 500ms ease',
        }
    }
}