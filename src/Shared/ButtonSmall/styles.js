import {
    center,
    inlineFlex,
    none,
    pointer
}                from 'utils/themer'
import {globals} from 'variables/styles'

export const smallButtonStyle = {
    color: globals.colors.blue,
    textDecoration: none,
    border: 0,
    cursor: pointer,
    display: inlineFlex,
    alignItems: center,
    icon: {
        size: [24, .7, 24],
        marginLeft: [20, .7, 20]
    },
}