import {
    absolute,
    inlineBlock,
    none,
    pointer,
    relative,
    transparent
}                from 'utils/themer'
import {globals} from 'variables/styles'

export const filterFieldStyle = {
    cursor: pointer,
    height: [64, .7, 64],
    weight: 300,
    backgroundColor: transparent,
    width: [375, globals.style.layoutScalingValue, '100%'],
    size: [18, .7, 18],
    placeholder: {
        color: transparent,
    },
    iconWrapperStyle: {
        backgroundColor: transparent
    },
    icon: {
        color: globals.colors.placeholderColor,
        height: '100%',
        marginRight: 20,
        pointerEvents: none,
        position: absolute,
        right: 0,
        top: 0,
        size: [28, .7, 28],
        zIndex: 1,
        tablet: {},
        small: {},
    },
    wrapper: {
        position: relative,
        display: inlineBlock,
        mobile: {
            marginBottom: 10
        },
        print: {
            display: none
        },
        firstOfType: {
            marginRight: 18
        },
        child: {
            selector: '.react-autosuggest__suggestions-container',
            marginTop: [5, .7, 5]
        }
    },
    datalistItemStyle: {
        width: '100%',
    },
}