import {
    isAboutUsSection,
    isCareersPage,
    isContactPage,
    isGlobalSearch,
    isHomepage,
    isPeopleSearch,
    isPersonMicrosite,
    isPersonMicrositeHasPhoto,
    isPracticeMicrosite,
    isPracticeSearch
}                from 'utils/flags'
import {
    auto,
    black,
    block,
    center,
    column,
    flex,
    flexStart,
    inherit,
    none,
    pointer,
    relative,
    white
}                from 'utils/themer'
import {globals} from 'variables/styles'

export const pageTitleStyle = {
    color: white,
    font: globals.fonts.heading,
    fontWeight: 800,
    size: [96, globals.style.layoutScalingValue, 46],
    lineHeight: [96, .5, 50],
    letterSpacing: [-1.31, .7, -0.63],
    transition: 'margin 1s ease-out',
    mobile: {},
    print: {
        position: relative,
        bottom: 0,
        size: 42,
        lineHeight: 40,
        margin: '0 0 30px 0',
        letterSpacing: -1,
        color: black,
        opacity: '1 !important',
        ie: {
            color: black,
        },
    },
    wrapper: {
        height: 220,
        display: flex,
        flexDirection: column,
    },
    practice: {},
    person: {},
    personNoImage: {}
}
export const pageTitleInnerStyle = {
    mobile: {
        display: flex,
        alignItems: center
    }
}
export const pageTitleStyleSwitch = post => {
    const baseStyle = {
        ...pageTitleStyle,
        mobile: {
            ...pageTitleStyle.mobile,
            color: globals.colors.headingColor
        },
        print: {
            marginTop: 0,
        }
    }

    if (isPersonMicrosite(post)) {
        return {
            ...baseStyle,
            size: [72, .55, 34],
            lineHeight: [66, .55, 40],
            letterSpacing: [-.98, .7, '0'],
            marginBottom: [15, .55, '0'],
            color: globals.colors.headingColor,
            mobile: {
                display: isPersonMicrositeHasPhoto(post) ? none : block
            }
        }
    }

    if (isHomepage(post)) {
        return {
            ...baseStyle,
            size: [126, globals.style.layoutScalingValue, 58],
            lineHeight: [108, .55, 62],
            letterSpacing: [-.98, .7, -0.5],
            marginBottom: [15, .55, '0'],
            print: {
                size: 70
            },
            mobile: {
                color: white
            }
        }
    }

    if (isPracticeMicrosite(post))
        return {
            ...baseStyle,
            color: white,
            size: [96, .55, 46],
            lineHeight: [96, .55, 50],
            letterSpacing: [-1.31, .7, '0'],
            paddingLeft: [42, .7, '0'],
            marginBottom: 0,
            maxWidth: [1120, .7, 'none'],
            mobile: {
                ...baseStyle.mobile,
                color: white
            },
            print: {
                paddingLeft: 0
            }
        }

    if (isAboutUsSection(post) || isCareersPage(post) || isContactPage(post))
        return {
            ...baseStyle,
            marginBottom: 0,
            mobile: {
                ...baseStyle.mobile,
                color: white
            },
            print: {
                ...pageTitleStyle.print,
            }
        }

    if (isPeopleSearch(post) || isPracticeSearch(post) || isGlobalSearch(post))
        return {
            ...baseStyle,
            mobile: {
                ...baseStyle.mobile,
                color: white
            }
        }

    return pageTitleStyle
}
export const pageTitleWrapperStyle = post => {
    if (isPersonMicrosite(post))
        return {
            width: [isPersonMicrositeHasPhoto(post) ? 605 : auto, globals.style.layoutScalingValue, '100%'],
            marginRight: [145, globals.style.layoutScalingValue, '0'],
            mobile: {
                display: flex,
                flexDirection: column,
                alignItems: flexStart,
                minHeight: 0,
                height: 0,
                width: '100%',
                margin: 0,
                justifyContent: center
            },
            print: {
                width: '100%'
            }
        }

    if (isHomepage(post)) {
        return {
            width: [1057, globals.style.layoutScalingValue, '100%'],
            marginTop: [-120, globals.style.layoutScalingValue - .3, '0'],
            paddingLeft: [70, globals.style.layoutScalingValue, '0'],
            display: flex,
            flexDirection: column,
            alignItems: flexStart
        }
    }

    return {}
}
export const pageTitleLinkStyle = post => {
    const baseStyle = {
        color: inherit,
        print: {
            color: black
        },
        hover: {
            color: inherit
        }
    }

    if (isPersonMicrosite(post))
        return {
            color: globals.colors.headingColor,
            hover: {
                color: globals.colors.headingColor
            }
        }

    return {
        ...baseStyle
    }

}

export const homePageStyle = {
    description: {
        font: globals.fonts.body,
        size: [28, .7, 20],
        lineHeight: [42, .7, 30],
        marginTop: [36, globals.style.layoutScalingValue, 9],
        weight: 300,
        width: '100%'
    },
    button: {
        font: globals.fonts.body,
        size: [18, .7, 18],
        weight: 300,
        color: white,
        marginTop: [55, .7, 20],
        print: {
            display: none
        },
        hover: {
            cursor: pointer,
            child: [
                {
                    selector: '> div',
                    backgroundColor: 'rgba(255,255,255,1)'
                },
                {
                    selector: 'svg',
                    color: globals.colors.linkActiveColor
                }
            ]
        },
        iconWrapper: {
            backgroundColor: 'rgba(255,255,255,0.2)'
        },
        icon: {
            transition: 'color 500ms ease',
        }
    }
}