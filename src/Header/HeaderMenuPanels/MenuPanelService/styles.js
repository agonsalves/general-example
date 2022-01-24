import {practiceSearchBarStyle}   from '../../../Marquee/PracticeSearchBar/styles'
import {
    absolute,
    block,
    borderBox,
    center,
    column,
    flex,
    flexEnd,
    flexStart,
    hidden,
    none,
    normal,
    pointer,
    relative,
    sv,
    uppercase,
    white,
    wrap
}                                 from '../../../utils/themer'
import {
    colorPalette,
    globals
}                                 from '../../../variables/styles'
import {headerMenuPanelStyle}     from '../HeaderMenuPanelWrapper/styles'
import {genericMenuItemStyleIcon} from '../MenuPanelGenericParentMenuItem/styles'
import {genericMenuSubItemStyle}  from '../MenuPanelGenericSubMenu/styles'

export const serviceMenuPanelStyle = {
    ...headerMenuPanelStyle,
    search: {
        display: flex,
        flexDirection: column,
        marginBottom: 58,
        borderBottom: globals.style.dividingBorder
    },
    searchHeading: {
        ...headerMenuPanelStyle.searchHeading
    },
    searchBar: {
        ...practiceSearchBarStyle,
        form: {
            ...practiceSearchBarStyle.form,
            paddingBottom: 58
        },
        field: {
            ...practiceSearchBarStyle.field,
            minWidth: [578, globals.style.layoutScalingValue, '100%'],
            backgroundColor: globals.colors.inputBackgroundColor,
            border: 0
        },
        button: {
            ...practiceSearchBarStyle.button,
            size: [18, .6, 18],
            minWidth: [167, globals.style.layoutScalingValue, 167],
            padding: `
                ${sv(26, globals.style.layoutScalingValue)} 
                ${sv(27, globals.style.layoutScalingValue)} 
                ${sv(26, globals.style.layoutScalingValue)} 
                ${sv(20, globals.style.layoutScalingValue)}
                `,
            marginLeft: 13,
        },
        icon: {
            size: [21, .7, 21]
        }
    },
    list: {
        display: flex,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        paddingLeft: 28
    },
    column: {
        display: flex,
        flexDirection: column,
        width: '50%',
        boxSizing: borderBox,
        firstChild: {
            paddingRight: 50
        }
    },
    subList: {
        overflow: hidden,
        paddingLeft: [50, .7, 50]
    },
    subItem: {
        display: block
    },
    listItem: {
        display: flex,
        flexDirection: column,
        marginBottom: 25,
        font: globals.fonts.body,
        mobile: {
            borderBottom: '2px solid #E5E5E5',
            paddingLeft: 15,
            paddingBottom: 18
        },
        child: {
            selector: '> span',
            alignItems: center
        }
    },
    title: isExpanded => {
        const baseStyle = {
            size: [20, .7, 20],
            lineHeight: [24, .7, 24],
            letterSpacing: [0.5, .7, 0.5],
            color: globals.colors.headingColor,
            display: flex,
            hover: {
                color: globals.colors.linkHoverColor,
                cursor: pointer,
                child: {
                    selector: 'svg',
                    child: [
                        {
                            selector: '.fa-primary',
                            color: white
                        },
                        {
                            selector: '.fa-secondary',
                            color: colorPalette.yellow,
                            opacity: 1
                        }
                    ]
                }
            }
        }

        if (isExpanded)
            return {
                ...baseStyle,
                color: globals.colors.linkActiveColor,
                child: {
                    selector: 'svg',
                    child: [
                        {
                            selector: '.fa-primary',
                            color: white
                        },
                        {
                            selector: '.fa-secondary',
                            color: colorPalette.yellow,
                            opacity: 1
                        }
                    ]
                }
            }

        return {
            ...baseStyle
        }

    },
    titleIcon: {
        ...genericMenuItemStyleIcon,
        child: [
            {
                selector: '.fa-primary',
                color: colorPalette.blue,
            },
            {
                selector: '.fa-secondary',
                color: colorPalette.gray,
                opacity: 1
            }
        ]
    },
    subItemTitle: isActive => {
        const baseStyle = {
            ...genericMenuSubItemStyle
        }

        if (isActive)
            return {
                ...baseStyle,
                color: globals.colors.linkActiveColor,
                before: {
                    ...genericMenuSubItemStyle.before,
                    backgroundColor: globals.colors.linkActiveColor
                }
            }

        return {
            ...baseStyle
        }
    },
    iconWrapper: {
        display: flex,
        borderBottom: `1px solid ${globals.colors.borderColor}`,
        paddingBottom: 15,
    },
    iconLinkWrapper: {
        display: flex,
        alignSelf: flexStart,
        hover: {
            child: {
                selector: '> a',
                color: globals.colors.linkHoverColor
            }
        },
        firstChild: {
            child: {
                selector: '> a',
                paddingLeft: 0
            }
        },
        lastChild: {
            child: {
                selector: '> a',
                marginRight: 0,
                after: {
                    content: none
                }
            }
        }
    },
    iconLink: {
        display: flex,
        flexWrap: wrap,
        position: relative,
        flexDirection: column,
        alignItems: flexStart,
        color: globals.colors.blue,
        paddingRight: [50, globals.style.layoutScalingValue],
        paddingLeft: [50, globals.style.layoutScalingValue],
        hover: {
            color: globals.colors.linkColor
        },
        after: {
            display: block,
            position: absolute,
            right: 0,
            top: 0,
            width: '1px',
            backgroundColor: globals.colors.borderColor,
            content: '" "',
            height: 85
        }
    },
    iconText: {
        size: [16, globals.style.layoutScalingValue],
        lineHeight: [20, .5],
        weight: 700,
        textTransform: uppercase,
        maxWidth: [135, globals.style.layoutScalingValue],
        whiteSpace: normal
    },
    icon: {
        marginBottom: 11,
        pointerEvents: none
    },
    moreLink: {
        display: flex,
        alignItems: center,
        justifyContent: flexEnd,
        size: [18, .6],
        lineHeight: 20,
        paddingTop: 39
    },
    moreLinkIcon: {
        size: [24, .5],
        marginRight: 18
    }
}