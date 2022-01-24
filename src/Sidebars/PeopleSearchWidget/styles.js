import {
    auto,
    block,
    column,
    flex,
    row,
    spaceBetween,
    transparent,
    wrap
}                from '../../utils/themer'
import {globals} from '../../variables/styles'

export const peopleSearchWidgetStyle = {
    buttonWrapper: {
        flexDirection: 'column'
    },
    reset: {
        display: block,
        marginLeft: 0,
        marginTop: 10,
        color: globals.colors.blue,
        hover: {
            color: globals.colors.gray
        }
    },
}

export const peopleSearchReviseWidgetStyle = {
    width: '100%',
    marginBottom: 0,
    mobile: {
        paddingBottom: 50,
        border: 0
    },
    formWrapper: {
        form: {
            flexDirection: column,
        },
        formInner: {
            display: flex,
            flexDirection: row,
            flexWrap: wrap,
            justifyContent: spaceBetween,
            marginTop: [5, .7, 5],
            child: {
                selector: '> div',
                width: [375, .7, '100%'],
            }
        },
        field: {
            fieldset: {
                width: [375, .7, '100%'],
                marginBottom: [18, .7, 18]
            },
            iconWrapperStyle: {
                backgroundColor: transparent
            },
            icon: {
                right: [28, .7, 28]
            }
        },
        firstField: {
            width: [375, .7, '100%'],
            backgroundColor: globals.colors.inputBackgroundColor,
            borderColor: globals.colors.inputBackgroundColor,
            fieldset: {
                marginBottom: 0,
                mobile: {
                    marginBottom: 18
                }
            },
            iconWrapperStyle: {
                backgroundColor: transparent
            },
            icon: {
                right: [28, .7, 28],
                size: [18, .7, 18]
            }
        },
        buttonWrapper: {
            marginLeft: auto
        },
        buttonIcon: {
            marginRight: [13, .7, 13],
            size: [21, .7, 21]
        }
    }
}