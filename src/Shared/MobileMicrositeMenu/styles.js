import {
    absolute,
    center,
    flex,
    none,
    pointer,
    white
}                from 'utils/themer'
import {globals} from 'variables/styles'

export const mobileMicrositeMenuWrapperStyle = {
    print: {
        display: none
    }
}
export const mobileMicrositeMenuStyle = {
    mobile: {
        marginTop: 0,
        paddingTop: 0
    },
    list: {},
    item: {}
}
export const mobileTopMenuStyle = {
    position: absolute,
    overflow: 'hidden',
    width: '100%',
    left: 0,
    top: 'initial',
    mobile: {
        position: absolute,
        overflow: 'hidden',
        width: '100%',
        left: 0,
        bottom: 0,
        marginBottom: -300
    },
    toggle: {
        backgroundColor: globals.colors.mobileMicrositeToggleBackgroundColor,
        mobile: {
            position: absolute,
            display: flex,
            alignItems: center,
            justifyContent: center,
            right: 0,
            bottom: 0,
            marginTop: -48,
            height: 48,
            width: 48,
            color: white,
        },
        hover: {
            cursor: pointer
        },
        print: {
            display: none
        }
    },
    toggleIcon: {
        mobile: {
            transformOrigin: center,
            size: 32
        }
    }
}
export const mobileTopMenuToggleStyle = {
    backgroundColor: globals.colors.mobileMicrositeToggleBackgroundColor,
    mobile: {
        position: absolute,
        display: flex,
        alignItems: center,
        justifyContent: center,
        right: 0,
        bottom: 0,
        marginTop: -48,
        height: 48,
        width: 48,
        color: white,
    },
    hover: {
        cursor: pointer
    },
    print: {
        display: none
    }
}
export const mobileTopMenuToggleIconStyle = {
    mobile: {
        transformOrigin: center,
        size: 32
    }
}