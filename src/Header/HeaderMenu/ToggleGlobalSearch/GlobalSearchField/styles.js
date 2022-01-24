import {
    center,
    flex,
    flexEnd,
    none,
    pointer,
    transparent,
    white
}                from 'utils/themer'
import {globals} from 'variables/styles'

export const globalSearchFieldStyle = {
    display: flex,
    alignItems: flexEnd,
    field: {
        border: 0,
        borderRadius: 0,
        borderBottom: globals.style.dividingBorder,
        color: globals.colors.headingColor,
        size: 18,
        lineHeight: 24,
        letterSpacing: 0.5,
        width: 298,
        padding: 0,
        weight: 400,
        height: 60,
        placeholder: {
            color: transparent
        },
        icon: {
            display: none
        },
        fieldset: {
            border: none,
        },
        legend: {
            ie: {
                backgroundColor: transparent
            }
        },
        inputLabel: {
            transform: 'translate(0,11px) scale(1)',
            display: none
        },
        focusedInputLabelStyle: {
            display: none
        },
        iconWrapperStyle: {
            background: transparent
        }
    },
    buttonWrapper: {
        marginLeft: 18,
        zIndex: 1
    },
    button: {
        font: globals.fonts.body,
        backgroundColor: globals.colors.buttonColor,
        color: white,
        display: flex,
        alignItems: center,
        justifyContent: center,
        borderRadius: '40px',
        size: 18,
        letterSpacing: .2,
        width: 146,
        height: 60,
        lineHeight: 18,
        weight: 500,
        border: 0,
        transition: 'background-color 500ms ease',
        hover: {
            backgroundColor: globals.colors.buttonHoverColor,
            color: white,
            cursor: pointer
        },
        focus: {
            backgroundColor: globals.colors.buttonHoverColor,
            borderColor: globals.colors.buttonHoverColor
        }
    },
    child: [
        {
            selector: '.react-autosuggest__suggestions-container',
            marginTop: 4
        },
        {
            selector: '.react-autosuggest__suggestion',
            child: {
                selector: '> div',
                borderBottom: `2px solid ${globals.colors.borderColor}`,
                hover: {
                    borderBottom: `2px solid ${globals.colors.linkActiveColor}`
                }
            }
        }
    ]
}