import {
    center,
    flex,
    flexStart,
    none,
    pointer,
    white
}                from 'utils/themer'
import {globals} from 'variables/styles'

export const archiveToggleStyle = {
    display: flex,
    alignItems: center,
    justifyContent: center,
    color: white,
    size: [18, .6, 18],
    lineHeight: [30, .7, 30],
    weight: 500,
    letterSpacing: [0.2, .7, 0.2],
    backgroundColor: 'rgba(255,255,255,.2)',
    borderRadius: [30, .7, 30],
    paddingLeft: [32, globals.style.layoutScalingValue, 32],
    paddingRight: [32, globals.style.layoutScalingValue, 32],
    marginTop: [27, globals.style.layoutScalingValue, 27],
    height: [64, .7, 50],
    minWidth: [250, globals.style.layoutScalingValue],
    marginLeft: 0,
    transition: 'margin 500ms ease; background-color 500ms ease;',
    mobile: {
        weight: 600,
        marginTop: 16,
        alignSelf: flexStart
    },
    hover: {
        cursor: pointer,
        color: globals.colors.linkActiveColor,
        backgroundColor: white
    },
    icon: {
        size: [22, .7, 22],
        marginLeft: 31
    },
    print: {
        display: none
    }
}