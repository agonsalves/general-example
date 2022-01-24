import {
    isArchiveListingSearch,
    isBlogSearch,
    isCaseStudySearch,
    isEventSearch,
    isNewsSearch,
    isPracticeSearch,
    isPublicationSearch
}                from 'utils/flags'
import {
    absolute,
    auto,
    borderBox,
    center,
    column,
    flex,
    flexEnd,
    flexStart,
    hidden,
    inlineBlock,
    none,
    relative,
    row,
    spaceBetween,
    transparent
} from 'utils/themer'
import {
    colorPalette,
    globals
} from 'variables/styles'

export const searchListingStyle = {
    marginBottom: 0,
    position: relative,
    paddingRight: [80, globals.style.layoutScalingValue, '0'],
    paddingBottom: [50, globals.style.layoutScalingValue, '0'],
    paddingLeft: [20, globals.style.layoutScalingValue, '0'],
    paddingTop: [11, globals.style.layoutScalingValue, '0'],
    lastChild: {
        after: {
            content: none,
        }
    },
    after: {
        content: '\'\'',
        bottom: 0,
        right: [80, globals.style.layoutScalingValue, 25],
        width: [810, globals.style.layoutScalingValue, '100%'],
        height: '1px',
        position: absolute,
        background: globals.colors.borderColor,
        mobile: {
            width: 'calc(100% - 50px)'
        }
    },
    innerLink: {
        display: flex,
        flexDirection: 'row-reverse',
        justifyContent: spaceBetween,
        minHeight: 200,
        alignItems: center,
        mobile: {
            alignItems: flexStart,
            flexDirection: column,
            paddingBottom: 35
        }
    },
    title: () => {
        return {
            display: 'block; display: -webkit-box;',
            webkitLineClamp: 2,
            webkitBoxOrient: 'vertical',
            maxHeight: [60, .7, 60],
            overflow: hidden,
            textOverflow: 'ellipsis',
            height: auto,
            marginBottom: [12, .7, 12]
        }
    },
    date: () => {

    },
    type: {
        marginBottom: [14, .7, 14]
    },
    byline: {
        marginTop: [6, .7, 6]
    },
    thumbnail: () => {
        return {
            width: [195, globals.style.layoutScalingValue, '100%'],
            minWidth: [195, globals.style.layoutScalingValue, '100%'],
            maxWidth: [195, globals.style.layoutScalingValue, '100%'],
            paddingBottom: [30, .7, '0'],
            paddingTop: [35, .7, '0']
        }
    }
}
export const practiceSearchResultStyle = {
    boxSizing: borderBox,
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 60,
    paddingRight: 60,
    backgroundColor: globals.colors.inputBackgroundColor,
    marginBottom: [10, .7, 10],
    mobile: {
        padding: 25
    },
    query: {
        marginBottom: [50, .7, 50],
        paddingBottom: [42, .7, 50],
        borderBottom: globals.style.dividingBorder,
        borderWidth: '2px',
        borderColor: globals.colors.headingColor
    },
    print: {
        paddingLeft: 0,
        paddingBottom: 20,
        paddingTop: 20,
        pageBreakInside: 'avoid'
    },
    title: {
        font: globals.fonts.heading,
        display: inlineBlock,
        color: globals.colors.headingColor,
        weight: 500,
        size: [24, .7, 24],
        lineHeight: [30, .7, 30],
        hover: {
            color: globals.colors.linkActiveColor
        }
    },
    excerpt: {
        font: globals.fonts.body,
        color: globals.colors.textColor,
        size: [16, .7, 16],
        lineHeight: [24, .7, 24],
        letterSpacing: [0.4, .7, 0.4],
        weight: 300,
        marginTop: 12
    }
}
export const archiveSearchResultsStyle = post => {
    const baseStyle = {
        listing: {
            ...searchListingStyle,
        }
    }

    if (isBlogSearch(post))
        return {
            listing: {
                ...searchListingStyle,
                thumbnail: {
                    maxWidth: [195, globals.style.layoutScalingValue, '100%']
                }
            }
        }

    if (isArchiveListingSearch(post)) {
        const archiveBaseStyle = {
            query: {
                paddingTop: 0,
                paddingBottom: [56, globals.style.layoutScalingValue, 35],
                paddingLeft: 0,
                paddingRight: [40, globals.style.layoutScalingValue, 40],
                marginBottom: [90, globals.style.layoutScalingValue, 50],
                borderBottom: `2px solid ${globals.colors.headingColor}`
            },
            listing: {
                ...searchListingStyle
            }
        }

        if (isPublicationSearch(post))
            return {
                ...archiveBaseStyle,
                listing: {
                    ...archiveBaseStyle.listing,
                    innerLink: {
                        ...archiveBaseStyle.listing.innerLink,
                        display: flex,
                        flexDirection: 'row-reverse',
                        justifyContent: flexEnd
                    },
                    thumbnail: {
                        wrapper: {
                            alignSelf: center,
                            paddingLeft: [40, globals.style.layoutScalingValue, '0'],
                            marginLeft: auto,
                            background: transparent,
                            mobile: {
                                marginLeft: 25,
                                marginTop: 25,
                                alignSelf: flexStart
                            }
                        },
                        desktop: {
                            order: 1,
                        },
                        maxWidth: [195, globals.style.layoutScalingValue, '100%'],
                        minWidth: [195, globals.style.layoutScalingValue, '100%'],
                        alignSelf: center
                    }
                }
            }

        if (isEventSearch(post))
            return {
                ...archiveBaseStyle,
                listing: {
                    ...archiveBaseStyle.listing,
                    flexDirection: column,
                    alignItems: flexStart,
                    after: {
                        content: '\'\'',
                        bottom: 0,
                        right: [80, globals.style.layoutScalingValue, 25],
                        width: [810, globals.style.layoutScalingValue, '100%'],
                        height: '1px',
                        position: absolute,
                        background: colorPalette.blue,
                        mobile: {
                            width: 'calc(100% - 50px)'
                        }
                    },
                    innerLink: {
                        ...archiveBaseStyle.listing.innerLink,
                        display: flex,
                        flexDirection: column,
                        alignItems: flexStart,
                        width: '100%',
                        paddingLeft: [60, globals.style.layoutScalingValue, 25],
                        paddingRight: [0, globals.style.layoutScalingValue, '0'],
                        paddingTop: [30, globals.style.layoutScalingValue, 25],
                        paddingBottom: [30, globals.style.layoutScalingValue, 25]
                    },
                    thumbnail: {
                        maxWidth: [195, globals.style.layoutScalingValue, '100%']
                    },
                    infoLocationWrapper: {
                       // border: `1px solid #000`
                    },
                    info: {
                        width: '100%',
                        borderColor: `${globals.colors.borderColor} !important`
                    },
                    title: {
                        maxHeight: none,
                        minHeight: 0
                    }
                }
            }

        if (isNewsSearch(post))
            return {
                ...archiveBaseStyle,
                listing: {
                    ...archiveBaseStyle.listing,
                    paddingBottom: [30, globals.style.layoutScalingValue, 35],
                    innerLink: {
                        ...archiveBaseStyle.listing.innerLink,
                        display: flex,
                        flexDirection: row,
                    },
                    thumbnail: () => {
                        return {
                            wrapper: {
                                alignSelf: center,
                                mobile: {
                                    background: transparent,
                                    alignSelf: flexStart,
                                    marginLeft: 25,
                                    marginTop: 25
                                }
                            },
                            desktop: {
                                order: 1,
                            },
                            maxWidth: [195, globals.style.layoutScalingValue, 300],
                            minWidth: [195, globals.style.layoutScalingValue, '100%'],
                            alignSelf: center,
                        }

                    }
                }
            }

        if (isCaseStudySearch(post))
            return {
                ...archiveBaseStyle,
                listing: {
                    ...archiveBaseStyle.listing,
                    innerLink: {
                        ...archiveBaseStyle.listing.innerLink,
                        display: flex,
                        flexDirection: row,
                    },
                    thumbnail: {
                        order: 1,
                        minWidth: [195, globals.style.layoutScalingValue, '100%'],
                        maxWidth: [195, globals.style.layoutScalingValue, '100%'],
                        alignSelf: center,
                        mobile: {
                            order: -1
                        }
                    }
                }
            }

        return {
            ...archiveBaseStyle,
        }
    }

    if (isPracticeSearch(post)) {
        return {
            listing: {
                ...searchListingStyle,
                ...practiceSearchResultStyle,
                marginBottom: 0,
                title: {
                    ...searchListingStyle.title(),
                    ...practiceSearchResultStyle.title
                },
                excerpt: {
                    ...practiceSearchResultStyle.excerpt
                }
            }
        }
    }


    return {
        ...baseStyle
    }
}