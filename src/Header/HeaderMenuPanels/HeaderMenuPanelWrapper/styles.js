import {
    absolute,
    borderBox,
    center,
    column,
    fixed,
    flex,
    none,
    pointer,
    white
}                from 'utils/themer'
import {globals} from 'variables/styles'

export const headerMenuPanelStyle = {
    display: flex,
    position: fixed,
    flexDirection: column,
    font: globals.fonts.heading,
    height: '100vh',
    width: [940, .5],
    maxWidth: [940, .5],
    top: 0,
    right: 0,
    paddingTop: globals.style.headerHeight + 45,
    paddingBottom: globals.style.headerHeight + 45,
    paddingLeft: [120, globals.style.layoutScalingValue],
    paddingRight: [60, globals.style.layoutScalingValue],
    backgroundColor: white,
    boxSizing: borderBox,
    zIndex: 22,
    mobile: {
        display: none
    },
    heading: {
        font: globals.fonts.heading,
        size: [72, .5],
        marginTop: 0,
        marginBottom: [45, .7],
        lineHeight: 66,
        letterSpacing: -1,
        weight: 800,
        color: globals.colors.headingColor,
        mobile: {
            marginLeft: 10
        }
    },
    closeButton: {
        position: absolute,
        display: flex,
        alignItems: center,
        justifyContent: center,
        top: 0,
        right: 0,
        height: 80,
        width: 80,
        backgroundColor: globals.colors.micrositeDetailCloseBackgroundColor,
        transition: 'background-color 250ms ease',
        hover: {
            backgroundColor: globals.colors.micrositeDetailCloseBackgroundHoverColor,
            cursor: pointer
        }
    },
    closeButtonIcon: {
        color: white,
        size: 30
    }
}