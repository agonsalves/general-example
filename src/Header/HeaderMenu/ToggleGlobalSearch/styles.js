import {
    center,
    flex,
    none,
    pointer,
    relative,
    white
} from 'utils/themer'
import {
    colorPalette,
    globals
} from 'variables/styles'

export const globalSearchToggleStyle = {
    display: flex,
    alignItems: center,
    zIndex: globals.zIndex - 2
}

export const globalSearchIconStyle = {
    position: relative,
    cursor: pointer,
    size: 21,
    height: globals.style.globalSearchIconHeight,
    width: globals.style.globalSearchIconWidth,
    display: flex,
    alignItems: center,
    justifyContent: center,
    borderRadius: 50,
    backgroundColor: colorPalette.yellow,
    border: `2px solid ${colorPalette.yellow}`,
    child: {
        selector: 'svg',
        transition: 'opacity 250ms ease',
        pointerEvents: none,
        color: white
    },
    hover: {
        backgroundColor: colorPalette.lightBlue,
        borderColor: colorPalette.lightBlue,
    }
}