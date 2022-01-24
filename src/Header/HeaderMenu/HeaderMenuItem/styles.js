import {
    absolute,
    center,
    flex,
    pointer,
    relative,
    uppercase
} from 'utils/themer'
import {
    colorPalette,
    globals
} from 'variables/styles'

export const headerMenuLinkStyle = {
    display: flex,
    position: relative,
    alignItems: center,
    size: 17,
    lineHeight: 30,
    letterSpacing: 0.4,
    weight: 500,
    paddingLeft: 60,
    paddingRight: 60,
    textTransform: uppercase,
    color: globals.colors.headingColor,
    transition: 'opacity 250ms ease',
    cursor: pointer,
    before: {
        content: '\' \'',
        position: absolute,
        left: 0,
        height: 30,
        width: 1,
        background: colorPalette.lightGray,
        transform: 'rotate(11deg)'
    },
    hover: {
        color: globals.colors.linkHoverColor
    },
    focus: {
        color: globals.colors.linkHoverColor
    }
}