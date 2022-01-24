import {
    absolute,
    none
}                from 'utils/themer'
import {globals} from 'variables/styles'

export const defaultInputLabelStyle = {
    font: globals.fonts.body,
    position: absolute,
    left: globals.style.inputPaddingLeft,
    zIndex: 1,
    color: globals.colors.placeholderColor,
    weight: 300,
    transition: 'color 300ms cubic-bezier(0.0, 0, 0.3, 1) 0ms, ' +
        'transform 300ms cubic-bezier(0.0, 0, 0.3, 1) 0ms',
    transformOrigin: 'top left',
    pointerEvents: none,
    size: [18, .7, 18],
    lineHeight: [20, .7, 20],
    transform: 'translate(0,100%) scale(1)',
    whiteSpace: 'nowrap',
    ie: {
        zIndex: 1
    }
}