import {archiveDateAndSourceStyle} from 'Main/ArchiveDateAndSource/styles'
import {archiveListingStyle}       from 'Main/ArchiveListingWrapper/styles'
import {
    auto,
    block,
    center,
    column,
    flex,
    flexStart,
    inherit,
    none,
    spaceBetween,
    transparent
}                                  from 'utils/themer'
import {
    colorPalette,
    globals
}                                  from 'variables/styles'

export const globalPublicationListingStyle = image => {
    const baseStyle = {
        borderBottom: globals.style.dividingBorder,
        borderWidth: '1px',
        paddingBottom: [49, .7, 50],
        marginBottom: [20, .7, 50],
        firstChild: {
            borderBottom: globals.style.dividingBorder,
            borderWidth: '1px',
        },
        innerLink: {
            display: flex,
            justifyContent: spaceBetween,
            flexDirection: !image ? 'row' : 'row-reverse',
            mobile: {
                flexDirection: column
            }
        },
        thumbnail: {
            minWidth: [195, globals.style.layoutScalingValue, 195],
            maxWidth: [195, globals.style.layoutScalingValue, 195],
            alignSelf: center,
            mobile: {
                marginLeft: 0,
                marginRight: auto
            }
        },
        title: {
            color: globals.colors.headingColor,
            marginBottom: [11, .7, 11],
            hover: {
                color: globals.colors.linkActiveColor
            }
        },
        type: {
            ...archiveListingStyle.type,
            marginTop: [1, .7, 24]
        },
        byline: {
            ...archiveListingStyle.byline
        },
        dateAndSource: {
            ...archiveDateAndSourceStyle
        }
    }

    return {
        ...baseStyle
    }

}

export const globalNewsListingStyle = {
    borderBottom: globals.style.dividingBorder,
    borderWidth: '1px',
    paddingBottom: [32, .7, 50],
    marginBottom: [20, .7, 10],
    firstChild: {
        borderBottom: globals.style.dividingBorder,
        borderWidth: '1px',
    },
    type: {
        ...archiveListingStyle.type,
        marginTop: [1, .7, 24]
    },
    byline: {
        ...archiveListingStyle.byline
    },
    dateAndSource: {
        ...archiveDateAndSourceStyle,
    }
}

export const globalCaseStudyListingStyle = {
    borderBottom: globals.style.dividingBorder,
    borderWidth: '1px',
    paddingBottom: [55, .7, 50],
    marginBottom: [50, .7, 50],
    firstChild: {
        borderBottom: globals.style.dividingBorder,
        borderWidth: '1px',
    },
    innerLink: {
        display: flex,
        alignItems: flexStart,
        justifyContent: spaceBetween,
        mobile: {
            flexDirection: column
        }
    },
    title: {
        marginTop: 0,
        marginBottom: 0,
        hover: {
            color: globals.colors.linkActiveColor
        }
    },
    thumbnail: {
        minWidth: [195, globals.style.layoutScalingValue, 195],
        maxWidth: [195, globals.style.layoutScalingValue, 195],
        mobile: {
            marginTop: 20
        }
    },
    readMore: {
        display: none
    }
}

export const globalEventListingStyle = {
    backgroundColor: transparent,
    borderBottom: `1px solid ${colorPalette.blue}`,
    borderWidth: '1px',
    paddingBottom: [55, .7, 50],
    marginBottom: [20, .7, 20],
    firstChild: {
        borderBottom: globals.style.dividingBorder,
        borderWidth: '1px',
        borderColor: globals.colors.headingColor
    },
    info: {
        paddingTop: [22, .7, 22],
        border: 0,
        marginTop: 0,
        child: {
            selector: 'div',
        }
    },
    infoLocationWrapper: {
        borderColor: globals.colors.borderColor
    },
    title: {
        maxHeight: none,
        minHeight: 0,
        color: `${globals.colors.headingColor} !important`,
        borderBottom: `1px solid ${globals.colors.borderColor}`,
        paddingBottom: [30, .7, 30]
    },
    infoDay: {
        size: [55, .7],
        lineHeight: [45, .7],
    },
    type: {
        marginTop: [8, .7, 24]
    },
    location: {
        child: {
            selector: '> div',
            color: globals.colors.linkActiveColor + '!important'
        }
    },
    month: {},
    innerLink: {
        flexDirection: column
    }
}

export const globalArchiveListingStyle = {
    ...archiveListingStyle,
    paddingLeft: 0,
    hover: {
        backgroundColor: globals.colors.inputBackgroundColor
    },
    innerLink: {
        display: flex,
        flexDirection: 'row',
        mobile: {
            flexDirection: column
        },
        hover: {
            color: inherit
        }
    },
    mobile: {
        flexDirection: 'column-reverse'
    },
    print: {
        flexDirection: 'column',
        border: 0
    },
    firstChild: {
        paddingTop: 0,
        border: 0
    },
    textWrapper: {
        paddingLeft: 0
    },
    thumbnail: () => {
        const baseStyle = {
            minWidth: [195, globals.style.layoutScalingValue, 195],
            maxWidth: [195, globals.style.layoutScalingValue, 195],
            marginLeft: auto,
            alignSelf: center,
            wrapper: {
                display: block,
                minWidth: [195, globals.style.layoutScalingValue, 195],
                maxWidth: [195, globals.style.layoutScalingValue, 195],
                marginLeft: [75, .4, '0'],
                mobile: {
                    marginLeft: 0,
                    marginBottom: 15
                },
                print: {
                    marginLeft: 0,
                    marginTop: 15
                }
            },
            mobile: {
                width: 205,
                marginLeft: 0,
                marginRight: auto,
                marginTop: 20
            }
        }
        return {
            ...baseStyle
        }
    },
    excerpt: {
        font: globals.fonts.body,
        size: [18, .7, 18],
        color: globals.colors.textColor,
        marginTop: 13,
        hover: {
            color: globals.colors.textColor
        }
    },
    byline: {
        color: globals.colors.textColor,
        size: [18, .7, 18],
        lineHeight: [30, .7, 30],
        hover: {
            color: globals.colors.textColor
        }
    },
    source: {
        color: globals.colors.textColor,
        size: [18, .7, 18],
        lineHeight: [30, .7, 30],
        hover: {
            color: globals.colors.textColor
        }
    },
    title: () => {
        return {
            color: globals.colors.headingColor,
            hover: {
                color: globals.colors.linkActiveColor
            },
        }
    },
    date: () => {
        return {
            ...archiveDateAndSourceStyle.date,
        }
    },

}

export const globalResultTitleStyle = {
    display: block,
    size: [24, .7, 24],
    lineHeight: [30, .7, 30],
    weight: 500,
    marginBottom: 28,
    color: globals.colors.headingColor,
    hover: {
        color: globals.colors.linkActiveColor
    }
}

export const globalResultJustTitleStyle = {
    ...globalResultTitleStyle,

}

export const globalPersonListingStyle = {
    display: flex,
    border: none,
    backgroundColor: transparent,
    paddingTop: 0,
    justifyContent: 'flex-start',
    height: auto,
    flexDirection: 'row',
    alignItems: center,
    paddingBottom: 19,
    paddingLeft: 0,
    width: auto,
    mobile: {
        flexDirection: 'row',
        padding: '0 0 35px 0',
    },
    hover: {},
    lastChild: {
        border: none
    },
    firstOfType: {
        paddingTop: 0,
        mobile: {
            marginTop: 0
        }
    },
    headshot: {
        marginRight: 25,
        marginBottom: 0,
        minHeight: [100, .7, 70],
        minWidth: [100, .7, 70],
        borderRadius: 100
    },
    name: {
        font: globals.fonts.heading,
        weight: 600,
        color: globals.colors.headingColor,
        size: [24, .7, 24],
        lineHeight: [30, .7, 30],
        marginBottom: 0,
        hover: {
            color: globals.colors.linkActiveColor
        },
        print: {
            lineHeight: 36
        }
    },
    title: {
        font: globals.fonts.body,
        color: globals.colors.textColor,
        margin: 0,
        size: [16, .7, 16],
        lineHeight: [16, .7, 16],
        letterSpacing: [0.4, .7, 0.4],
        hover: {
            color: globals.colors.textColor
        },
        print: {
            lineHeight: 30
        }
    }
}