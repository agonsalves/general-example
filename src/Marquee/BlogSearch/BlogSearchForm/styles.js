import {largeButtonStyle} from 'Shared/ButtonLarge/styles'
import {
    column,
    flex,
    none,
    pointer,
    relative,
    row,
    transparent,
    white
}                         from 'utils/themer'
import {globals}          from 'variables/styles'

export const blogSearchFormStyle = {
    display: flex,
    flexDirection: row,
    position: relative,
    border: none,
    borderRight: 0,
    width: '100%',
    borderBottom: globals.style.dividingBorder,
    borderWidth: '1px',
    paddingBottom: 40,
    marginBottom: 40,
    mobile: {
        flexDirection: column
    },
    button: {
        ...largeButtonStyle,
        marginLeft: [20, .7, '0'],
        minWidth: [167, .7, 167],
        mobile: {
            marginTop: 20,
            paddingLeft: 25,
            paddingRight: 25
        },
        hover: {
            cursor: pointer,
            backgroundColor: globals.colors.headingColor,
            borderColor: globals.colors.headingColor
        },
        child: {
            selector: 'svg',
            size: [21, .7, 21],
            marginLeft: 0,
            marginRight: [13, .7, 13]
        }
    },
    field: {
        width: '100%',
        paddingRight: 0,
        paddingTop: 0,
        weight: 400,
        height: [60, .7, 60],
        size: [18, .7, 18],
        fieldset: {
            borderRadius: 10,
            marginTop: [5, .7, 5],
            borderWidth: '1px'
        },
        iconWrapperStyle: {
            backgroundColor: transparent
        },
        legend: {
            display: none,
        }
    },
    icon: {
        size: [20, .7, 20],
        marginRight: [15, .7, 15],
        color: white,
        zIndex: 0,
        ie: {
            width: [20, .7, 20]
        }
    },
    child: [
        {
            selector: '> div',
            width: '100%',
            child: {
                selector: 'svg',
                display: none
            }
        }
    ]
}