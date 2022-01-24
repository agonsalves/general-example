import {autosuggestStyles} from 'Shared/FieldSwitch/DatalistField/styles'
import {
    hasArchiveSearch,
    hasMicrositeMenu,
    isAboutUsSection,
    isArchiveDetail,
    isArchiveListing,
    isArchiveListingSearch,
    isBlog,
    isBlogSearch,
    isCareersSection,
    isCaseStudyListing,
    isContactPage,
    isEventListing,
    isGlobalSearch,
    isMicrosite,
    isOfficeDetail,
    isPeoplePage,
    isPeopleSearch,
    isPracticeListingPage,
    isPracticeMicrosite,
    isPracticeSearch
}                          from 'utils/flags'
import {
    absolute,
    block,
    column,
    flex,
    relative,
    sv,
    transparent,
    white
}                          from 'utils/themer'
import {
    genericMobileContainerStyles,
    globals
}                          from 'variables/styles'

export const contentRow = 2
const highlightsRow = contentRow + 1
const footerRow = highlightsRow + 1

export const pageFrameStyle = {
    display: flex,
    flexDirection: column,
    position: relative,
    margin: '0 auto',
    minHeight: '100vh',
    maxWidth: '1920px',
    backgroundColor: white,
    ...autosuggestStyles,
    desktop: {
        display: '-ms-grid; display: grid',
        gridTemplateColumns: `
            [begin] minmax(3vw, 1fr)
            ${sv(1110, globals.style.layoutScalingValue)}
            ${sv(80, globals.style.layoutScalingValue)}
            ${sv(130, globals.style.layoutScalingValue)}
            ${sv(200, globals.style.layoutScalingValue)}
            minmax(3vw, 1fr) [end]`,
        msGridColumns: `
            minmax(3vw, 1fr)
            ${sv(1110, globals.style.layoutScalingValue)}
            ${sv(80, globals.style.layoutScalingValue)}
            ${sv(130, globals.style.layoutScalingValue)}
            ${sv(200, globals.style.layoutScalingValue)}
            minmax(3vw, 1fr)`,
        gridTemplateRows: `[header-start] auto [header-end] max-content minmax(500px, 1fr) auto`,
        msGridRows: `auto auto minmax(500px, 1fr) auto`
    },
    large: {
        gridTemplateColumns: `1fr 1110px 80px 130px 200px 1fr`
    },
    ieBgHack: {
        msGridRow: contentRow,
        gridRow: contentRow,
        msGridColumn: 2,
        gridColumn: 2,
        background: white,
        zIndex: 1
    },
    hlm: {
        msGridRow: 1,
        gridRow: 1,
        msGridColumn: 1,
        gridColumn: 1,
    },
    hrm: {
        msGridRow: 1,
        gridRow: 1,
        msGridColumn: 6,
        gridColumn: 6,
    },
    lm: {
        position: relative,
        msGridRow: contentRow,
        gridRow: contentRow,
        msGridColumn: 1,
        gridColumn: 1,
        zIndex: 1,
        paddingTop: [globals.style.mainTopGutter, .7, '0'],
        backgroundColor: white,
    },
    rm: {
        position: relative,
        msGridRow: contentRow,
        gridRow: contentRow,
        msGridColumn: 6,
        gridColumn: 6,
        paddingTop: [globals.style.mainTopGutter, .7, '0'],
        backgroundColor: white
    },
    flm: {
        position: relative,
        msGridRow: '3',
        msGridRowSpan: '2',
        gridRow: '3 / 5',
        msGridColumn: 1,
        gridColumn: 1,
        zIndex: 1,
        print: {
            gridRow: '3 / 4',
            msGridRowSpan: '1',
            maxHeight: 200
        }
    },
    frm: {
        position: relative,
        msGridRow: '3',
        msGridRowSpan: '2',
        gridRow: '3 / 5',
        msGridColumn: 6,
        gridColumn: 6,
        zIndex: 1,
        print: {
            gridRow: '3 / 4',
            msGridRowSpan: '1',
            maxHeight: 200
        }
    },
    header: {
        gridColumn: '1 / 7',
        gridColumnSpan: 6,
        msGridRow: 1,
        gridRow: 1,
        msGridColumn: 1,
        zIndex: 4,
        position: relative,
        mobile: {
            minWidth: '100%',
            maxWidth: '100%',
            zIndex: 30
        }
    },
    marquee: {
        gridColumn: '2 / 6',
        gridColumnSpan: 4,
        msGridRow: 1,
        gridRow: 1,
        msGridColumn: 2,
        zIndex: 4,
        position: relative,
        mobile: {
            minWidth: '100%',
            maxWidth: '100%',
            zIndex: 2
        }
    },
    main: post => {
        const baseStyle = {
            position: relative,
            msGridRow: contentRow,
            gridRow: contentRow,
            msGridColumn: 2,
            gridColumn: 2,
            backgroundColor: white,
            zIndex: 5,
            paddingTop: [globals.style.mainTopGutter, .55],
            print: {
                display: block,
                paddingTop: 0,
            },
            ...genericMobileContainerStyles
        }

        if (isArchiveListingSearch(post))
            return {
                ...baseStyle,
                msGridColumnSpan: 4,
                gridColumn: '2 / 6',
                maxWidth: [1110, globals.style.layoutScalingValue, 'none'],
                marginTop: [-globals.style.archiveListingPaddingBottom, .55, '0'],
                paddingTop: [81, globals.style.layoutScalingValue, '0'],
                paddingLeft: [80, globals.style.layoutScalingValue, '0'],
                paddingRight: [80, globals.style.layoutScalingValue, '0'],
            }

        if (isArchiveListing(post))
            return {
                ...baseStyle,
                paddingTop: 0,
                marginTop: [-globals.style.archiveListingPaddingBottom, .55, '0']
            }

        if (isPracticeMicrosite(post))
            if (!hasMicrositeMenu(post))
                return {
                    ...baseStyle,
                    msGridColumnSpan: 4,
                    gridColumn: '2 / 6',
                    maxWidth: [1478, globals.style.layoutScalingValue, 'none'],
                }

        if (isPeoplePage(post))
            return {
                ...baseStyle,
                msGridColumnSpan: 4,
                gridColumn: '2 / 6',
                backgroundColor: globals.colors.blue,
                mobile: {
                    ...genericMobileContainerStyles,
                    backgroundColor: white
                },
                print: {
                    paddingTop: 0
                }
            }


        if (isAboutUsSection(post) || isCareersSection(post))
            return {
                ...baseStyle,
                paddingTop: [83, globals.style.layoutScalingValue, '0'],
                marginTop: [-globals.style.practiceMarqueePaddingBottom, .55, '0'],
                print: {
                    paddingRight: 0,
                    marginTop: 0,
                    paddingTop: 0,
                },
            }

        if (hasArchiveSearch(post))
            return {
                ...baseStyle,
                paddingTop: 33
            }

        if (isPracticeListingPage(post)) {
            return {
                ...baseStyle,
                msGridColumnSpan: 4,
                gridColumn: '2 / 6',
                backgroundColor: white,
                mobile: {
                    ...genericMobileContainerStyles,
                    backgroundColor: white,
                    width: '100%'
                },
                print: {
                    paddingTop: 0
                }
            }
        }

        if (isEventListing(post) || isCaseStudyListing(post)) {
            return {
                ...baseStyle,
                marginTop: [-globals.style.archiveListingPaddingBottom, .55, '0'],
                paddingTop: [56, globals.style.layoutScalingValue, '0'],
                paddingLeft: [85, globals.style.layoutScalingValue, '0'],
                paddingRight: [85, globals.style.layoutScalingValue, '0']
            }
        }

        if (isArchiveListing(post) || isArchiveDetail(post))
            return {
                ...baseStyle,
                paddingTop: 0,
                marginTop: [-globals.style.archiveListingPaddingBottom, .55, '0']
            }

        if (isContactPage(post) || isOfficeDetail(post))
            return {
                ...baseStyle,
                marginTop: [-globals.style.practiceMarqueePaddingBottom, .55, '0'],
                paddingTop: [83, globals.style.layoutScalingValue, '0'],
                paddingLeft: [82, globals.style.layoutScalingValue, '0'],
                paddingRight: [82, globals.style.layoutScalingValue, '0'],
            }

        if (isMicrosite(post) && !isBlog(post))
            return {
                ...baseStyle,
                msGridColumnSpan: 4,
                gridColumn: '2 / 6',
                mobile: {
                    ...baseStyle.mobile,
                }
            }

        if (isPracticeMicrosite(post))
            if (!hasMicrositeMenu(post))
                return {
                    ...baseStyle,
                    msGridColumnSpan: 4,
                    gridColumn: '2 / 6',
                    maxWidth: [1478, globals.style.layoutScalingValue, 'none'],
                }

        if (isPeopleSearch(post))
            return {
                ...baseStyle,
                msGridColumnSpan: 4,
                gridColumn: '2 / 6',
                maxWidth: [1437, globals.style.layoutScalingValue, 'none'],
                marginTop: [-globals.style.practiceMarqueePaddingBottom, .55, '0'],
                paddingTop: [88, globals.style.layoutScalingValue, '0'],
                paddingLeft: [80, globals.style.layoutScalingValue, '0'],
                paddingRight: [80, globals.style.layoutScalingValue, '0'],
            }

        if (isPracticeSearch(post))
            return {
                ...baseStyle,
                msGridColumnSpan: 4,
                gridColumn: '2 / 6',
                maxWidth: [1110, globals.style.layoutScalingValue, 'none'],
                marginTop: [-globals.style.practiceMarqueePaddingBottom, .55, '0'],
                paddingTop: [73, globals.style.layoutScalingValue, '0'],
                paddingLeft: [80, globals.style.layoutScalingValue, '0'],
                paddingRight: [80, globals.style.layoutScalingValue, '0'],
            }

        if (isGlobalSearch(post))
            return {
                ...baseStyle,
                msGridColumnSpan: 4,
                gridColumn: '2 / 6',
                maxWidth: [1437, globals.style.layoutScalingValue, 'none'],
                marginTop: [-globals.style.archiveListingPaddingBottom, .55, '0'],
                paddingTop: [81, globals.style.layoutScalingValue, '0'],
                paddingLeft: [80, globals.style.layoutScalingValue, '0'],
                paddingRight: [80, globals.style.layoutScalingValue, '0']
            }

        if (isBlogSearch(post))
            return {
                ...baseStyle,
                msGridColumnSpan: 4,
                gridColumn: '2 / 6',
                maxWidth: [1110, globals.style.layoutScalingValue, 'none'],
                marginTop: [-globals.style.archiveListingPaddingBottom, .55, '0'],
                paddingTop: [81, globals.style.layoutScalingValue, '0'],
                paddingLeft: [80, globals.style.layoutScalingValue, '0'],
                paddingRight: [80, globals.style.layoutScalingValue, '0'],
            }

        if (isBlog(post))
            return {
                ...baseStyle,
                paddingTop: 0,
                marginTop: [-globals.style.archiveListingPaddingBottom, .55, '0'],
                mobile: {
                    ...baseStyle.mobile,
                    marginBottom: 40
                }
            }

        return baseStyle
    },
    innerMargin: {
        msGridRow: contentRow,
        gridRow: contentRow,
        msGridColumn: 3,
        gridColumn: 3,
        backgroundColor: white,
        zIndex: 2,
        position: relative,
        before: {
            content: '" "',
            position: absolute,
            top: 0,
            left: -10,
            background: white,
            width: 20,
            zIndex: 0,
            height: '100%'
        },
        after: {
            content: '" "',
            position: absolute,
            top: 0,
            right: -10,
            background: white,
            width: 20,
            zIndex: 0,
            height: '100%'
        }
    },
    sidebar: {

        mobile: {},

    },
    highlights: {
        gridColumn: '1 / 7',
        gridColumnSpan: 6,
        gridRow: highlightsRow,
        msGridRow: highlightsRow,
        msGridColumn: 1,
        zIndex: 4,
        position: relative
    },
    footer: {
        gridColumn: '2 / 6',
        msGridColumnSpan: 4,
        msGridColumn: 2,
        gridRow: footerRow,
        msGridRow: footerRow,
        color: white,
        backgroundColor: white,
        zIndex: 4,
        position: relative,
        print: {
            backgroundColor: transparent,
            color: globals.colors.textColor,
            gridRow: highlightsRow,
            msGridRow: highlightsRow,
        }
    }
}