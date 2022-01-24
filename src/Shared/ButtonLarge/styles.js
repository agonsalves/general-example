import {
    auto,
    center,
    flex,
    flexStart,
    none,
    pointer,
    sv,
    white
}                from 'utils/themer'
import {globals} from 'variables/styles'

export const searchButton = {
    font: globals.fonts.body,
    display: flex,
    justifyContent: 'space-around',
    alignItems: center,
    alignSelf: flexStart,
    color: white,
    backgroundColor: globals.colors.buttonColor,
    size: [18, .7, 18],
    lineHeight: [18, .7, 18],
    height: [globals.style.buttonHeight, .7, globals.style.buttonHeight],
    letterSpacing: [0.2, .7, 0.2],
    weight: 500,
    padding: `${sv(26)} ${sv(24)}`,
    minWidth: [167, .7, 167],
    maxWidth: '167px',
    marginLeft: 'auto',
    border: `2px solid ${globals.colors.buttonColor}`,
    borderRadius: [60, .7, 60],
    mobile: {
        padding: '0px 24px'
    },
    hover: {
        backgroundColor: globals.colors.buttonHoverColor,
        borderColor: globals.colors.buttonHoverColor,
        color: white,
        cursor: pointer
    },
    print: {
        display: none
    },
    icon: {
        size: [21, .7, 21],
    }
}

export const largeButtonStyle = {
    ...searchButton,
    minWidth: auto,
    maxWidth: none,
    icon: {
        ...searchButton.icon,
        marginLeft: [26, .7, 26],
        size: [18, .7, 18],
    }
}