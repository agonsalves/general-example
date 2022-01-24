import {searchButton}       from 'Shared/ButtonLarge/styles'
import {defaultLegendStyle} from 'Shared/SmartInput/Legend'
import {
    absolute,
    borderBox,
    center,
    column,
    flex,
    flexStart,
    none,
    relative,
    spaceBetween,
    transparent
}                           from 'utils/themer'
import {globals}            from 'variables/styles'

export const practiceSearchBarStyle = {
    padding: '38px 0',
    display: flex,
    alignItems: center,
    justifyContent: center,
    boxSizing: borderBox,
    print: {
        display: none
    },
    form: {
        display: flex,
        flexDirection: 'row',
        justifyContent: flexStart,
        mobile: {
            display: none
        },
        print: {
            display: none
        },
        child: [
            {
                selector: '.react-autosuggest__container',
                display: flex,
                flexDirection: column
            },
            {
                selector: '.react-autosuggest__suggestions-container',
                position: absolute,
                marginTop: 78
            },
            {
                selector: 'ul',
                maxHeight: 500
            }
        ]
    },
    field: {
        height: [globals.style.inputHeight, .7, globals.style.inputHeight],
        weight: 300,
        minWidth: [578, .5, '100%'],
        borderRadius: [60, .7, 60],
        fieldset: {
            height: [globals.style.fieldSetHeight, .7, globals.style.fieldSetHeight],
            width: 'calc(100% - 2px)',
            border: `1px solid rgba(255,255,255,0)`,
            font: globals.fonts.body
        },
        placeholder: {
            color: transparent
        },
        icon: {
            display: none
        },
        inputLabel: {
            transform: 'translate(0,100%) scale(1)',
        },
        legend: {
            display: none,
            ie: {
                ...defaultLegendStyle.ie,
                backgroundColor: transparent
            }
        },
        fieldOuter: {
            flexGrow: 1
        },
    },
    button: {
        ...searchButton,
    },
    titleWrapper: {
        display: flex,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        width: '100%',
        justifyContent: spaceBetween,
        marginBottom: [55, .7, '0'],
        mobile: {
            position: relative,
            bottom: 0
        },
        child: [
            {
                selector: 'h1',
                position: relative,
                bottom: 0
            }
        ],
        print: {
            position: relative,
            bottom: 0
        }
    }
}