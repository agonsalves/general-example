import {
    center,
    flex,
    none,
    pointer,
    relative
}                     from 'utils/themer'
import {colorPalette} from 'variables/styles'

export const mobileMenuToggleStyle = {
    border: none,
    cursor: pointer,
    display: flex,
    justifyContent: center,
    alignItems: center
}

export const mobileMenuToggleIconStyle = {
    mobile: {
        position: relative,
        size: 26,
        color: colorPalette.blue,
        transition: 'transform all .5s'
    }
}