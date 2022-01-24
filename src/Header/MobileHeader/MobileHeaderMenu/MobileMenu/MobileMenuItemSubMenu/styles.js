import {
    hidden,
    none
}                            from '../../../../../utils/themer'
import {globals}             from '../../../../../variables/styles'
import {mobileMenuItemStyle} from '../MobileMenuItem/styles'

export const mobileMenuSubMenuWrapperStyle = {
    overflow: hidden
}

export const mobileMenuSubMenuStyle = {
    mobile: {
        padding: '16px 0 0 28px',
    }
}

export const mobileMenuSubMenuItemStyle = {
    ...mobileMenuItemStyle,
}

export const mobileMenuSubMenuLinkStyle = {
    mobile: {
        size: 18,
        lineHeight: 22,
        textTransform: none,
        weight: 400,
        paddingBottom: 20
    },
    class: {
        name: 'active',
        color: globals.colors.linkActiveColor
    }
}