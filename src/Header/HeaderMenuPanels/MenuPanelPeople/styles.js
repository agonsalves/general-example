import {
    center,
    column,
    flex,
    none,
    pointer,
    transparent,
    uppercase,
    white
}                             from 'utils/themer'
import {
    colorPalette,
    globals
} from 'variables/styles'
import {archiveSearchStyle}   from '../../../Marquee/ArchiveSearch/styles'
import {headerMenuPanelStyle} from '../HeaderMenuPanelWrapper/styles'

export const peopleMenuPanelStyle = {
    ...headerMenuPanelStyle,
    display: flex,
    flexDirection: column,
    advancedSearch: {
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
    },
    advancedSearchIcon: {
        size: [14, .5, 14],
        marginRight: [16, .5, 16]
    },
    searchHeading: {
        ...headerMenuPanelStyle.searchHeading,
        paddingLeft: 34,
        marginTop: 58
    },
    inner: {
        paddingTop: 0
    },
    search: {
        borderBottom: `2px solid ${globals.colors.borderColor}`,
        paddingBottom: 50,
    },
    searchForm: {
        form: {
            child: [
                {
                    selector: '.react-autosuggest__suggestions-container',
                    marginTop: -4
                }
            ]
        },
        formInner: {
            width: [580, .3, '100%'],
            marginRight: 20
        },
        firstField: {
            marginBottom: 0,
            background: globals.colors.inputBackgroundColor,
            width: '100%',
            minWidth: '100%',
            borderColor: transparent,
            fieldOuter: {
                marginTop: 0
            },
            icon: {
                display: none
            },
        },
        field: {
            width: '100%',
            minWidth: '100%',
            background: white,
            iconWrapperStyle: {
                backgroundColor: white,
            }
        },
        reset: {
            ...archiveSearchStyle.reset,
            bottom: [-30, .7, -30],
            right: [183, .5, '0'],
            display: flex,
            alignItems: center,
            color: colorPalette.darkGray,
            textTransform: uppercase,
            letterSpacing: 2,
            font: globals.fonts.body,
            size: [12, .7, 12],
            lineHeight: 30,
            marginLeft: 5,
            weight: 600,
            hover: {
                cursor: pointer,
                color: globals.colors.linkColor
            }
        },
        buttonWrapper: {},
        button: {
            width: [163, globals.style.layoutScalingValue, 163],
            minWidth: [163, globals.style.layoutScalingValue, 163],
            maxWidth: '163px',
            justifyContent: center,
            size: [18, .7, 18],
            weight: 500,
            mobile: {
                marginTop: 20
            },
        },
        buttonIcon: {
            size: [20, .5, 20],
            marginRight: [12, .5, 12]
        }
    },
    alphabet: {
        display: flex,
        alignItems: center,
        marginTop: [50, .7, '0'],
        paddingBottom: [100, .7, '0'],
        font: globals.fonts.heading,
        letter: {
            mobile: {
                size: 22
            },
            class: {
                name: 'undefined',
                opacity: .4,
                hover: {
                    pointerEvents: none,
                    color: globals.colors.headingColor
                },
                mobile: {
                    color: globals.colors.headingColor,
                    opacity: .4,
                }
            },
        },
        viewAll: {
            alignSelf: center
        },
        viewAllLetter: {
            mobile: {
                display: none
            }
        },
        inner: {
            maxWidth: [550, .7, '100%'],
            marginLeft: [2, .7, '0']
        }
    }
}