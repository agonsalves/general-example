import {searchButton} from 'Shared/ButtonLarge/styles'
import {
    absolute,
    auto,
    block,
    borderBox,
    center,
    column,
    fixed,
    flex,
    flexStart,
    hidden,
    none,
    pointer,
    relative,
    transparent,
    uppercase,
    white,
    wrap
}                     from 'utils/themer'
import {
    colorPalette,
    globals
}                     from 'variables/styles'

export const archiveSearchStyle = {
    panel: {
        top: '50vh',
        left: '50vw',
        height: 707,
        width: 870,
        marginTop: -(707 / 2),
        marginLeft: -(870 / 2),
        zIndex: 25,
        padding: [50, .7, 25],
        boxSizing: borderBox,
        position: fixed,
        backgroundColor: white,
        color: globals.colors.textColor,
        pointerEvents: auto,
        overflow: hidden,
        mobile: {
            top: 82,
            borderRadius: 0,
            left: 0,
            width: '100%',
            maxWidth: '100vw',
            marginTop: 0,
            marginLeft: 0
        },
        class: {
            name: 'open',
            pointerEvents: auto
        },
    },
    panelInner: {
        position: relative,
    },
    panelClose: {
        position: absolute,
        top: -50,
        right: -130,
        height: 80,
        width: 80,
        backgroundColor: globals.colors.headingColor,
        display: flex,
        alignItems: center,
        justifyContent: center,
        mobile: {
            right: -25,
            height: 82,
            width: 82,
            top: -107,
            borderRadius: 0
        },
        hover: {
            cursor: pointer
        }
    },
    panelCloseIcon: {
        color: white,
        size: [30, .7, 30],
        pointerEvents: none
    },
    portalHeading: {
        font: globals.fonts.heading,
        size: [45, .7, 36],
        lineHeight: [40, .7, 28],
        paddingBottom: [28, .7, 28],
        marginBottom: [30, .7, 30],
        weight: 600,
        borderBottom: globals.style.dividingBorder,
        borderColor: globals.colors.headingColor,
        color: globals.colors.headingColor,
    },
    container: {
        display: flex,
        flexWrap: wrap,
        width: '100%',
        mobile: {
            flexDirection: column
        },
        print: {
            display: none
        },
        child: {
            selector: '> div:first-child',
            child: [
                {
                    selector: 'svg',
                    display: none
                },
                {
                    selector: 'input',
                    backgroundColor: globals.colors.inputBackgroundColor,
                    borderColor: globals.colors.inputBackgroundColor
                }
            ]
        }
    },
    field: {
        color: globals.colors.headingColor,
        backgroundColor: white,
        borderColor: globals.colors.borderColor,
        size: [18, .7, 18],
        weight: 400,
        paddingLeft: [25, .7, 25],
        paddingRight: [15, .7, 15],
        borderRadius: [globals.style.inputBorderRadius, .7, globals.style.inputBorderRadius],
        fieldset: {
            width: [375, .7, '100%'],
            marginBottom: [20, .5, 20],
            class: {
                name: 'focused',
                child: {
                    selector: 'input',
                    color: globals.colors.textColor
                }
            }
        },
        legend: {
            display: none,
        },
        inputLabel: {
            transform: `translate(0px, 110%) scale(1)`,
            color: colorPalette.offBlue,
        },
        focusedInputLabelStyle: {
            transform: `translate(0, 8px) scale(${globals.style.inputLabelShrinkRatio})`,
            color: globals.colors.blue,
        },
        clearIcon: {
            fontSize: [21, .7, 21],
            right: [22, .7, 22],
        },
        iconWrapperStyle: {
            backgroundColor: transparent
        },
        icon: {
            height: '100%',
            fontSize: [20, .7, 20],
            right: [28, .7, 28],
            pointerEvents: none,
            color: globals.colors.blue,
            class: {
                name: 'fa-angle-up',
                fontSize: [28, .7, 28],
            },
        },
        fieldOuter: {
            firstChild: {
                child: [
                    {
                        selector: 'svg',
                        right: [20, .7, 20]
                    }
                ]
            }
        },
    },
    buttonWrapper: {
        display: flex,
        flexDirection: column,
        alignItems: center,
        justifyContent: flexStart
    },
    button: {
        ...searchButton,
        flexDirection: 'row-reverse',
        justifyContent: center,
        margin: 0,
        paddingTop: 0,
        paddingBottom: 0,
        child: {
            selector: 'svg',
            size: [21, .7, 21],
            marginLeft: 0,
            marginRight: [13, .7, 13]
        }
    },
    reset: {
        display: block,
        position: absolute,
        right: 0,
        bottom: [-15, .7, -15],
        border: 0,
        padding: 0,
        margin: 0,
        background: 0,
        height: auto,
        width: auto,
        marginRight: auto,
        marginLeft: 10,
        marginTop: 0,
        alignSelf: center,
        color: colorPalette.darkGray,
        textTransform: uppercase,
        letterSpacing: 2,
        font: globals.fonts.body,
        size: [12, .7, 12],
        lineHeight: 30,
        mobile: {
            color: globals.colors.linkHoverColor,
            marginTop: -5,
            marginLeft: 15
        },
        hover: {
            backgroundColor: transparent,
            color: globals.colors.gray,
            cursor: pointer
        }
    }
}