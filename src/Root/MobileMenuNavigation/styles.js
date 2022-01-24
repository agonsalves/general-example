import {
    absolute,
    auto,
    none,
    relative
}                           from 'utils/themer'
import {globals}            from 'variables/styles'
import {micrositeMenuStyle} from 'Shared/MicrositeMenu/styles'

export const mobileMenuNavigationStyle = {
    position: relative,
    width: 'calc(100% - 50px)',
    margin: '0 auto 50px auto',
    maxHeight: none,
    height: auto,
    mobile: {
        marginTop: 0
    },
    empty: {
        display: none
    }
}

export const mobileMenuTopMenuStyles = {
    mobile: {
        marginTop: 0,
        paddingTop: 0
    }
}

export const mobileMenuNavigationMenuStyles = {
    mobile: {
        ...micrositeMenuStyle.mobile,
        marginTop: 50,
        paddingTop: 50,
        before: {
            position: absolute,
            content: '\' \'',
            height: '1px',
            backgroundColor: globals.colors.borderColor,
            top: 0,
            left: 0,
            width: '100%'
        },
    },
    list: {
        ...micrositeMenuStyle.list.mobile,
        maxHeight: none,
        mobile: {
            height: auto
        }
    }
}