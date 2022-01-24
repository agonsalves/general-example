import {
    center,
    flex
} from 'utils/themer'
import {
    colorPalette,
    globals
} from 'variables/styles'

export const genericMenuItemParentStyle = {
    display: flex,
    alignItems: center,
    color: globals.colors.linkColor,
    hover: {
        color: globals.colors.linkColor,
        child: {
            selector: 'svg',
            color: globals.colors.linkColor,
        }
    }
}

export const genericMenuItemStyleIcon = {
    color: colorPalette.yellow,
    size: 18,
    marginLeft: 15,
    marginTop: 2,
    mobile: {
        size: 18,
    },
    child: [
        {
            selector: '.fa-primary',
            color: colorPalette.blue
        },
        {
            selector: '.fa-secondary',
            color: colorPalette.gray,
            opacity: 1,
        }
    ]
}