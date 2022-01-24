import {
    center,
    flex,
    flexEnd,
    none,
    spaceBetween,
    uppercase,
    white
}                from 'utils/themer'
import {globals} from 'variables/styles'

export const paginationStyle = {
    display: flex,
    justifyContent: spaceBetween,
    alignItems: center,
    color: globals.colors.paginationColor,
    paddingTop: 29,
    marginBottom: [0, .7, 53],
    width: '100%',
    maxWidth: '100%',
    inner: {
        display: flex,
        mobile: {
            minWidth: '220px',
            maxWidth: '220px',
            justifyContent: flexEnd
        }
    },
    print: {
        display: none
    },
    pageNumber: {
        size: [16, .7, 16],
        lineHeight: [40, .7, 40],
        letterSpacing: [0.5, .7, 0.5],
        textTransform: uppercase,
        weight: 400,
        child: {
            selector: '> span',
            color: globals.colors.paginationAltColor,
            marginLeft: 3
        }
    },
    next: {
        display: flex,
        padding: 0,
        border: 0,
        justifyContent: center,
        alignItems: center,
        minWidth: [55, .7, 55],
        minHeight: [55, .7, 55],
        height: [55, .7, 55],
        borderRadius: [30, .7, 30],
        backgroundColor: globals.colors.inputBackgroundColor,
        marginLeft: 10,
        hover: {
            backgroundColor: globals.colors.headingColor,
            child: {
                selector: '> svg',
                color: white
            }
        },
        icon: {
            color: globals.colors.headingColor,
            size: [16, .7, 16],
        },
        mobile: {
            float: 'right'
        }
    },
    prev: {
        display: flex,
        padding: 0,
        border: 0,
        justifyContent: center,
        alignItems: center,
        minWidth: [55, .7, 55],
        minHeight: [55, .7, 55],
        height: [55, .7, 55],
        borderRadius: [30, .7, 30],
        backgroundColor: globals.colors.inputBackgroundColor,
        hover: {
            backgroundColor: globals.colors.headingColor,
            child: {
                selector: '> svg',
                color: white
            }
        },
        icon: {
            color: globals.colors.headingColor,
            size: [16, .7, 16],
        },
        mobile: {
            float: 'left'
        }
    },

}