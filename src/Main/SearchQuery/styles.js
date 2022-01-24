import {globals} from 'variables/styles'
import {
    center,
    flex,
    pointer,
    spaceBetween,
    uppercase
} from 'utils/themer'

export const searchQueryStyle = {
    display: flex,
    justifyContent: spaceBetween,
    font: globals.fonts.body,
    size: [18, .7, 18],
    lineHeight: [30, .7, 30],
    marginBottom: 25,
    color: globals.colors.textColor,
    letterSpacing: [0.5, .7, 0.5],
    weight: 300,
    query: {
        weight: 600
    }
}

export const clearSearchQueryStyle = {
    display: flex,
    alignItems: center,
    color: globals.colors.buttonColor,
    textTransform: uppercase,
    letterSpacing: 2,
    font: globals.fonts.body,
    size: [12, .7, 12],
    lineHeight: 30,
    marginLeft: 5,
    weight: 600,
    hover: {
        cursor: pointer,
        color: globals.colors.buttonHoverColor,
        child: {
            selector: 'svg',
            color: globals.colors.buttonHoverColor
        }
    }
}