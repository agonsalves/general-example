import {
    borderBox,
    center,
    flex,
    hidden,
    pointer,
    sv,
    white,
    wrap
}                from 'utils/themer'
import {globals} from 'variables/styles'

export const predictivePersonStyle = {
    display: flex,
    font: globals.fonts.body,
    color: globals.colors.textColor,
    padding: `${sv(12)} ${sv(9)}`,
    overflow: hidden,
    boxSizing: borderBox,
    borderBottom: globals.style.dividingBorder,
    backgroundColor: white,
    cursor: pointer,
    alignItems: center,
    class: {
        name: 'active',
        backgroundColor: globals.colors.blue,
        color: white,
        child: {
            selector: 'div',
            color: white
        }
    },
    image: {
        marginRight: [15, .7, 15],
        marginLeft: [5, .7, 5],
        width: [60, .7, 60],
        height: [60, .7, 60],
        borderRadius: 30,
        flexShrink: 0
    },
    content: {
        display: flex,
        flexShrink: 1,
        alignItems: center,
        flexWrap: wrap
    },
    name: {
        color: globals.colors.textColor,
        width: '100%',
        wordBreak: 'break-word',
        size: [18, .7, 18],
        lineHeight: [24, .7, 24],
        letterSpacing: [0.4, .7, 0.4],
        weight: 600,
    },
    title: {
        color: globals.colors.textColor,
        size: [18, .7, 18],
        lineHeight: [24, .7, 24],
        letterSpacing: [0.4, .7, 0.4],
        weight: 300,
    }
}