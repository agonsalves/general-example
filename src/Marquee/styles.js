import {pageFrameStyle} from '../Root/PageFrame/styles'
import {
    hasMicrositeMenu,
    hasTopMenu,
    isAboutUsSection,
    isArchiveDetail,
    isArchiveListing,
    isBlog,
    isCareersSection,
    isContactPage,
    isGlobalSearch,
    isHomepage,
    isOfficeDetail,
    isPeopleSearch,
    isPersonMicrosite,
    isPersonMicrositeHasPhoto,
    isPracticeMicrosite,
    isPracticeSearch
}                       from '../utils/flags'
import {
    auto,
    black,
    center,
    column,
    flex,
    flexEnd,
    flexStart,
    relative,
    row,
    white
}                       from '../utils/themer'
import {globals}       from '../variables/styles'

export const marqueeStyle = {
    ...pageFrameStyle.marquee,
    position: relative,
    color: white,
    display: flex,
    flexDirection: column,
    transition: 'min-height .5s ease',
    minHeight: [globals.style.marqueeHeight, globals.style.layoutScalingValue, 130],
    marginTop: [globals.style.headerHeight, .7, globals.style.mobileHeaderHeight],
    justifyContent: center,
    mobile: {
        ...pageFrameStyle.marquee.mobile,
        padding: 25,
        zIndex: '3 !important',
        justifyContent: center,
        minHeight: 180,
    },
    print: {
        height: 'auto !important',
    },
    inner: {
        transition: 'min-height .5s ease',
        display: flex,
        alignItems: center,
        height: '100%',
        width: auto,
        mobile: {
            flexDirection: column,
            alignItems: flexStart
        }
    }
}

export const marqueeStyleSwitch = post => {
    if (isPersonMicrosite(post))
        return {
            ...marqueeStyle,
            minHeight: [globals.style.personMarqueeHeight, globals.style.layoutScalingValue],
            marginTop: [globals.style.headerHeight, .7, globals.style.mobileMicrositeHeaderHeight],
            justifyContent: center,
            paddingTop: 20,
            paddingBottom: 20,
            print: {
                ...marqueeStyle.print,
            },
            mobile: {
                ...marqueeStyle.mobile,
                minHeight: isPersonMicrositeHasPhoto(post) ? globals.style.personMarqueeMobileHeight : globals.style.personMarqueeMobileHeightNoImage,
                width: '100%',
                height: auto
            },
            inner: {
                ...marqueeStyle.inner,
                flexDirection: column,
                justifyContent: center,
                alignItems: isPersonMicrositeHasPhoto(post)
                    ? flexEnd
                    : flexStart,
                paddingLeft: !isPersonMicrositeHasPhoto(post) && !hasMicrositeMenu(post)
                    ? 0
                    : !isPersonMicrositeHasPhoto(post)
                        ? [293, globals.style.layoutScalingValue, '0']
                        : 0,
                mobile: {
                    minHeight: 0,
                    height: auto,
                    alignItems: flexEnd
                },
                print: {
                    alignItems: flexStart
                }
            }
        }

    if (isPracticeMicrosite(post))
        return {
            ...marqueeStyle,
            minHeight: [globals.style.personMarqueeHeight, globals.style.layoutScalingValue],
            marginTop: [globals.style.headerHeight, .7, globals.style.mobileMicrositeHeaderHeight],
            paddingBottom: [globals.style.practiceMarqueePaddingBottom, .55, '0'],
            alignItems: flexStart,
            justifyContent: center,
            print: {
                ...marqueeStyle.print,
                marginTop: 100
            },
            mobile: {
                ...marqueeStyle.mobile,
                width: '100vw',
                height: auto
            },
            inner: {
                ...marqueeStyle.inner,
                flexDirection: column,
                justifyContent: center,
                child: {
                    selector: '> span:first-child',
                    mobile: {
                        minHeight: 175,
                        display: flex,
                        child: {
                            selector: '> h1',
                            alignSelf: center
                        }
                    }
                },
                mobile: {
                    minHeight: 175
                }
            }
        }

    if (isAboutUsSection(post) || isCareersSection(post))
        return {
            ...marqueeStyle,
            minHeight: [globals.style.personMarqueeHeight, globals.style.layoutScalingValue],
            marginTop: [globals.style.headerHeight, .7, globals.style.mobileHeaderHeight, 0],
            maxHeight: [globals.style.personMarqueeHeight, globals.style.layoutScalingValue],
            paddingBottom: [globals.style.practiceMarqueePaddingBottom, .55, 0],
            paddingTop: [78, globals.style.layoutScalingValue - .15, '0'],
            height: '100%',
            flexDirection: column,
            alignItems: flexStart,
            justifyContent: center,
            print: {
                ...marqueeStyle.print,
                marginTop: 155,
                minHeight: 'auto',
                paddingBottom: 50,
            },
            mobile: {
                ...marqueeStyle.mobile,
            },
            inner: {
                ...marqueeStyle.inner,
                display: flex,
                alignItems: flexStart,
                flexDirection: column,
                justifyContent: center,
                maxWidth: [1110, globals.style.layoutScalingValue, 'none'],
                print: {
                    height: auto,
                },
                mobile: {
                    minHeight: 180,
                },
                child: {
                    selector: '> span:first-child',
                    display: flex,
                    alignItems: center,
                    flexDirection: 'row',
                    width: '100%',
                    height: '100%',
                },
            }
        }


    if (hasTopMenu(post))
        return {
            ...marqueeStyle,
            minHeight: [588, .7],
            print: {
                minHeight: 200
            },
            mobile: {
                ...marqueeStyle.mobile,
            },
            inner: {
                ...marqueeStyle.inner,
                flexDirection: column,
                alignItems: flexStart
            }
        }

    if (isBlog(post))
        return {
            ...marqueeStyle,
            paddingBottom: [globals.style.archiveListingPaddingBottom, .55, '0'],
            paddingLeft: [43, .7, '0'],
            justifyContent: center,
            mobile: {
                ...marqueeStyle.mobile,
            },
            inner: {
                ...marqueeStyle.inner,
                flexDirection: row,
                alignItems: center,
                height: auto,
                paddingTop: [35, globals.style.layoutScalingValue, '0']
            }
        }


    if (isArchiveDetail(post) || isArchiveListing(post))
        return {
            ...marqueeStyle,
            paddingBottom: [globals.style.archiveListingPaddingBottom, .55, '0'],
            justifyContent: center,
            paddingLeft: [43, .7, '0'],
            mobile: {
                ...marqueeStyle.mobile,
            },
            inner: {
                ...marqueeStyle.inner,
                flexDirection: column,
                alignItems: flexStart,
                justifyContent: center
            }
        }

    if (isPeopleSearch(post) || isPracticeSearch(post) || isContactPage(post) || isOfficeDetail(post))
        return {
            ...marqueeStyle,
            minHeight: [globals.style.peopleSearchMarqueeHeight, globals.style.layoutScalingValue],
            paddingBottom: [globals.style.practiceMarqueePaddingBottom, .55, '0']
        }

    if (isHomepage(post))
        return {
            ...marqueeStyle,
            minHeight: [globals.style.homepageMarqueeHeight, globals.style.layoutScalingValue],
            inner: {
                ...marqueeStyle.inner,
                print: {
                    color: black
                }
            }
        }

    if (isGlobalSearch(post))
        return {
            ...marqueeStyle,
            minHeight: [globals.style.globalSearchMarqueeHeight, globals.style.layoutScalingValue],
            paddingBottom: [globals.style.archiveListingPaddingBottom, .55, '0'],
            paddingTop: [36, globals.style.layoutScalingValue, '0'],
            paddingLeft: [41, globals.style.layoutScalingValue, '0'],
            zIndex: 6,
            inner: {
                ...marqueeStyle.inner,
                flexDirection: column,
                alignItems: flexStart,
                justifyContent: center
            }
        }

    return {
        ...marqueeStyle
    }
}