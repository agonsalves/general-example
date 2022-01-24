import {
    absolute,
    block,
    center,
    column,
    flex,
    flexStart,
    none,
    relative
}                from 'utils/themer'
import {globals} from 'variables/styles'

export const genericSubMenuStyle = {
    display: flex,
    flexDirection: column,
    position: relative,
    font: globals.fonts.body,
    paddingLeft: 50
}

export const genericMenuSubItemStyle = {
    display: flex,
    alignItems: center,
    alignSelf: flexStart,
    position: relative,
    color: globals.colors.headingColor,
    size: [17, .7, 17],
    lineHeight: [24, .7, 24],
    paddingBottom: 6,
    textTransform: none,
    weight: 400,
    ie: {
        display: block
    },
    hover: {
        color: globals.colors.linkHoverColor,
        before: {
            backgroundColor: globals.colors.linkHoverColor
        }
    },
    focus: {
        color: globals.colors.linkHoverColor,
        before: {
            backgroundColor: globals.colors.linkHoverColor
        }
    },
    before: {
        content: '" "',
        backgroundColor: globals.colors.textColor,
        height: '4px',
        width: '4px',
        minWidth: '4px',
        minHeight: '4px',
        position: absolute,
        left: -15,
        top: 10,
        mobile: {
            left: '-14px',
            top: '11px'
        }

    },
    class: {
        name: 'active',
        color: globals.colors.linkActiveColor,
        before: {
            backgroundColor: globals.colors.linkActiveColor
        }
    }
}