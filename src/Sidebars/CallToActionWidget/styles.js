import {
    auto,
    borderBox,
    flexEnd,
    none,
    relative
}                from 'utils/themer'
import {globals} from 'variables/styles'

export const featuredContentWidgetStyle = {
    boxSizing: borderBox,
    borderLeft: globals.style.dividingBorder,
    borderWidth: '1px',
    paddingLeft: [40, .7, '0'],
    heading: {
        position: relative,
        marginBottom: [20, .7, 20]
    },
    image: {
        marginBottom: [21, .7, 21],
        paddingTop: [5, .7, 5],
        transition: 'opacity .5s ease',
        hover: {
            opacity: .7
        }
    },
    title: {
        font: globals.fonts.body,
        size: [18, .7, 18],
        lineHeight: [30, .7, 30],
        color: globals.colors.textColor,
        letterSpacing: [0.4, .7, 0.4],
    },
    button: {
        justifyContent: flexEnd,
        flexDirection: 'row-reverse',
        color: globals.colors.linkActiveColor,
        marginTop: [25, .7, 25],
        iconWrapper: {
            background: none,
            marginLeft: [15, .7, 15],
            height: auto,
            width: auto,
            minWidth: 0
        },
        icon: {
            position: relative,
            top: [1, .7, 1],
            color: globals.colors.linkActiveColor
        },
        hover: {
            color: globals.colors.textColor,
            child: {
                selector: 'svg',
                color: globals.colors.textColor
            }
        }
    }
}

export const callToActionWidgetStyle = {
    ...featuredContentWidgetStyle,
    heading: {},
    image: {
        marginBottom: [20, .7, 20]
    },
    excerpt: {
        child: {
            selector: '> p',
            ...featuredContentWidgetStyle.title
        }
    },
    button: {
        ...featuredContentWidgetStyle.button,
        iconWrapper: {
            ...featuredContentWidgetStyle.button.iconWrapper,
            marginLeft: [27, .7, 27]
        }
    },
    child: [
        {
            selector: 'a',
            wordBreak: 'break-word'
        },
        {
            selector: '> *',
        }
    ]
}