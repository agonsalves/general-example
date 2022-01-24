import {archiveSearchStyle} from 'Marquee/ArchiveSearch/styles'
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
    transparent,
    white
}                           from 'utils/themer'
import {globals}            from 'variables/styles'

export const peopleSearchForm = {
    form: {
        width: 'auto',
        display: flex,
        alignItems: flexStart,
        position: relative,
        mobile: {
            border: none,
            flexDirection: column,
            marginTop: 30,
            paddingTop: 40,
        },
        before: {
            mobile: {
                content: '\' \'',
                width: '100%',
                height: 2,
                backgroundColor: '#ececec',
                left: 0,
                top: 0,
                position: absolute
            }
        },
        child: [
            {
                selector: '.react-autosuggest__suggestions-container',
                marginTop: -4
            }
        ]
    },
    formInner: {
        flexGrow: 1,
        boxSizing: borderBox,
        width: '100%',
    },
    firstField: {
        backgroundColor: transparent,
        fieldset: {
            backgroundColor: white,
            transition: 'margin 500ms ease',
            marginBottom: [13, .7, 20]
        },
        color: globals.colors.textColor,
        placeholder: {
            color: transparent
        }
    },
    field: {
        mobile: {
            paddingLeft: 25
        },
        lastChild: {
            marginBottom: 0
        },
        clearIcon: {
            fontSize: [21, .7, 21],
            right: [28, .7, 28],
            color: globals.colors.blue,
            zIndex: 1,
        },
        placeholder: {
            color: transparent,
            weight: 400,
            size: 18,
        },
        focusedInputLabelStyle: {
            zIndex: 1,

        },
        fieldset: {
            marginBottom: [13, .7, 20],
            backgroundColor: white,
        },
        inputLabel: {
            transform: `translate(0px, 100%) scale(1)`,
            color: globals.colors.textColor,
        },
        legend: {
            ie: {
                ...defaultLegendStyle.ie,
                backgroundColor: white
            }
        },
    },
    buttonWrapper: {
        display: flex,
        flexDirection: column,
        mobile: {
            flexDirection: 'row',
            justifyContent: center
        }
    },
    reset: {
        ...archiveSearchStyle.reset,
        bottom: [-30, .7, -30]
    },
}