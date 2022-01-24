import {
    borderBox,
    column,
    flex,
    none,
    relative,
    transparent
}                     from 'utils/themer'
import {globals}      from 'variables/styles'
import {searchButton} from '../../../../../Shared/ButtonLarge/styles'

export const mobileSearchInnerStyle = {
    display: flex,
    flexDirection: column,
    position: relative,
    boxSizing: borderBox,
    mobile: {
        paddingLeft: 25,
        paddingRight: 25,
        marginBottom: 25
    }
}

export const mobileSearchFieldStyle = {
    letterSpacing: .5,
    border: none,
    backgroundColor: globals.colors.inputBackgroundColor,
    font: globals.fonts.body,
    width: '100%',
    borderRadius: '60px',
    mobile: {
        size: 18,
        lineHeight: 22,
        weight: 400,
        height: 60,
        paddingLeft: 17
    },
    iconWrapperStyle: {
        background: transparent
    },
    icon: {
        display: none
    },
    fieldset: {
        borderRadius: '60px',
        border: '1px solid rgba(255,255,255,0)'
    },
    inputLabel: {
        mobile: {
            font: globals.fonts.body,
            color: globals.colors.placeholderColor,
            size: 18,
            lineHeight: 22,
            weight: 300,
            transform: 'translate(0,18px) scale(1)',
            zIndex: 1
        }
    },
    focusedInputLabelStyle: {
        mobile: {
            font: globals.fonts.body,
            transform: `translate(0, 8px) scale(${globals.style.inputLabelShrinkRatio})`,
            color: globals.colors.blue,
        }
    },
    legend: {
        mobile: {
            width: '0 !important',
            padding: '0 !important',
            marginLeft: '0 !important',
        }
    }
}

export const mobileSearchButtonStyle = {
    ...searchButton,
    mobile: {
        ...searchButton.mobile,
        marginRight: 'auto',
        marginLeft: 0,
        marginTop: 15
    },
    icon: {
        ...searchButton.icon
    }
}