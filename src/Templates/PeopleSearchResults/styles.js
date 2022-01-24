import {archiveSearchStyle} from 'Marquee/ArchiveSearch/styles'
import {defaultLegendStyle} from 'Shared/SmartInput/Legend'
import {
    absolute,
    auto,
    block,
    center,
    column,
    flex,
    flexStart,
    hidden,
    none,
    pointer,
    relative,
    row,
    spaceBetween,
    transparent,
    uppercase,
    white,
    wrap
}                           from 'utils/themer'
import {globals}            from 'variables/styles'

export const peopleSearchReviseWrapperStyle = {
    display: flex,
    justifyContent: spaceBetween,
    borderBottom: globals.style.dividingBorder,
    borderWidth: '2px',
    borderColor: globals.colors.headingColor,
    paddingBottom: [57, .7, '0'],
    mobile: {
        flexDirection: column,
        border: 0,
    }
}
export const peopleSearchReviseStyleToggleStyle = {
    size: [13, .7, 13],
    lineHeight: [30, .7, 30],
    letterSpacing: [2, .7, 2],
    weight: 600,
    textTransform: uppercase,
    color: globals.colors.textColor,
    mobile: {
        marginTop: 5
    },
    icon: {
        transform: 'rotate(-90deg)',
        marginLeft: [10, .7, 10]
    },
    hover: {
        color: globals.colors.linkActiveColor,
        cursor: pointer
    }
}
export const peopleSearchReviseStyle = {
    alphabet: {
        width: '100%',
        paddingTop: [41, .7, '0'],
        borderTop: `1px solid ${globals.colors.borderColor}`,
    },
    subHeading: {
        display: flex,
        width: '100%',
        flexDirection: row,
        justifyContent: spaceBetween
    }
}
export const peopleSearchReviseCloseStyle = {
    ...archiveSearchStyle.panelClose,
    right: -80,
    mobile: {
        ...archiveSearchStyle.panelClose.mobile,
        right: 0
    }
}

export const peopleSearchRevisePanelStyle = {
    ...archiveSearchStyle.panel,
    mobile: {
        ...archiveSearchStyle.panel.mobile,
        position: relative,
    }
}

export const peopleSearchReviseCloseIconStyle = {
    ...archiveSearchStyle.panelCloseIcon
}

export const peopleSearchResultsStyle = {
    display: flex,
    flexWrap: wrap,
    justifyContent: flexStart,
    flexDirection: row,
    marginTop: [50, .5],
    print: {
        display: block,
    },
    child: {
        selector: '> div',
        child: {
            selector: ':nth-last-child(2)',
            mobile: {
                before: {
                    content: none
                }
            }
        }
    },
    heading: {
        font: globals.fonts.heading,
        color: globals.colors.headingColor,
        size: [45, .7, 40],
        lineHeight: [40, .7, 40],
        marginBottom: [24, .7, 24],
        weight: 600,
        mobile: {
            marginTop: 6
        }
    },
    query: {
        marginBottom: 0,
        color: globals.colors.textColor,
        font: globals.fonts.body,
        position: relative,
        mobile: {
            marginBottom: 33,
            before: {
                position: absolute,
                bottom: -33,
                content: '\'\'',
                height: '2px',
                width: '100%',
                backgroundColor: globals.colors.headingColor
            }
        }
    },
    pagination: {
        paddingTop: 0,
        mobile: {
            marginTop: 30
        }
    },
    searchAgain: {
        maxWidth: [230, .7, 230],
        mobile: {
            marginBottom: 50,
            marginLeft: 0
        }
    },
    listing: {
        width: [258, globals.style.layoutScalingValue, '100%'],
        marginRight: [80, globals.style.layoutScalingValue, '0'],
        mobile: {
            background: globals.colors.inputBackgroundColor,
            padding: '34px 28px',
            marginBottom: 0,
            border: 0,
            position: relative,
        },
        before: {
            mobile: {
                content: '\'\'',
                position: absolute,
                bottom: 0,
                left: 28,
                width: 'calc(100% - 28px) !important',
                height: 1,
                backgroundColor: globals.colors.borderColor,
                zIndex: 1
            }

        },
        child: [
            {
                selector: ':nth-child(4n)',
                marginRight: 0
            }
        ],
        headshot: {
            marginRight: 0,
            mobile: {
                marginRight: 20
            }
        },
        print: {
            display: block,
            float: 'left',
            pageBreakInside: 'avoid',
            width: '40%',
            child: {
                selector: ':nth-child(even)',
                marginLeft: 100
            }
        }

    },
    search: {
        form: {
            width: auto,
            minWidth: '100%',
            flexDirection: column,
            paddingBottom: 80,
            mobile: {
                display: none,
            },
            print: {
                display: none
            }
        },
        firstField: {
            background: globals.colors.inputBackgroundColor,
            borderRadius: 10,
            border: none,
            icon: {
                display: none,
            },
            fieldset: {
                height: [64, .7, 64],
                marginBottom: [14, .5, 20],
                background: globals.colors.inputBackgroundColor,
                border: none,
                borderRadius: [10, .7, 10],
                overflowX: hidden
            },
            inputLabel: {
                font: globals.fonts.body,
                transform: 'translate(0,100%) scale(1)',
                size: [18, .6, 18],
                lineHeight: [22, .7, 22],
                weight: 300,
            },
        },
        field: {
            background: globals.colors.inputBackgroundColor,
            borderRadius: 10,
            border: none,
            height: [60, .7, 60],
            size: [18, .7, 18],
            weight: 300,
            mobile: {
                paddingLeft: 25,
            },
            fieldset: {
                marginBottom: [14, .5, 20],
                height: [64, .7, 64],
                background: globals.colors.inputBackgroundColor,
                border: none,
                borderRadius: [10, .7, 10],
                overflowX: hidden
            },
            lastChild: {
                marginBottom: 0
            },
            icon: {
                color: globals.colors.blue,
                size: [28, .7, 28],
                right: [23, .7, 23]
            },
            clearIcon: {
                fontSize: [24, .7, 24],
                right: [20, .7, 20],
                color: globals.colors.blue,
            },
            placeholder: {
                color: transparent,
                weight: 400,
                size: 18,
            },
            inputLabel: {
                font: globals.fonts.body,
                transform: 'translate(0,100%) scale(1)',
                size: [18, .7, 18],
                lineHeight: [22, .7, 22],
                weight: 300,
            },
            legend: {
                display: none,
                ie: {
                    ...defaultLegendStyle.ie,
                    backgroundColor: white
                }
            }
        },
        reset: {
            color: globals.colors.textColor,
            alignSelf: center,
            marginTop: [10, .7, 10],
            marginLeft: 0,
            hover: {
                color: globals.colors.gray,
                cursor: pointer
            }
        },
        buttonWrapper: {
            flexDirection: column
        },
        button: {
            paddingTop: 0,
            paddingBottom: 0,
            marginRight: 0,
            marginLeft: 0,
            justifyContent: 'space-around'
        }
    },
    container: {
        display: flex,
    },
}