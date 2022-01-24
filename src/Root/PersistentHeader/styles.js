import {isPracticeMicrosite} from 'utils/flags'
import {
    absolute,
    auto,
    center,
    column,
    fixed,
    flex,
    hidden,
    none,
    pointer,
    relative,
    row,
    uppercase,
    white
}                            from 'utils/themer'
import {globals}             from 'variables/styles'

const basePersistentHeaderStyle = {
    width: '100%',
    height: [globals.style.persistentHeaderHeight, .7, globals.style.persistentHeaderHeight],
    gridColumn: '1 / 7',
    gridRow: 1,
    msGridColumn: 1,
    msGridColumnSpan: 6,
    gridColumnStart: 1,
    gridColumnEnd: 7,
    pointerEvents: none,
    zIndex: 6,
    alignSelf: 'end',
    print: {
        display: none
    }
}

export const persistentHeaderFeaturedStyle = {
    display: flex,
    alignItems: center,
    width: 620,
    flexShrink: 0,
    flexGrow: 0,
    child: [
        {
            selector: '.slider-control-centerleft',
            display: none
        },
        {
            selector: '.slider-control-centerright',
            display: none
        },
        {
            selector: '.slider',
            height: '100% !important'
        },
        {
            selector: '.slider-frame',
            display: 'flex !important',
            alignItems: center
        },
        {
            selector: '.slider-control-topleft',
            left: 'inherit !important',
            top: '50% !important',
            right: 0,
            large: {
                right: '0',
                top: '40px'
            },
            mobile: {
                display: none
            }
        },
        {
            selector: '.slider-control-topright',
            right: 0,
            top: 0,
            mobile: {
                right: '0 !important',
                top: 'calc(50% - 25px) !important'
            }
        }
    ],
    previousButtonWrapper: {
        height: [62, .7],
        width: [62, .7],
        display: flex,
        alignItems: center,
        justifyContent: center,
        backgroundColor: globals.colors.sliderButtonBackgroundHoverColor,
        mobile: {
            display: none
        },
        print: {
            display: none
        },
        hover: {
            cursor: pointer,
            child: {
                selector: '> svg',
                color: globals.colors.linkActiveColor
            }
        }
    },
    nextButtonWrapper: {
        position: relative,
        cursor: pointer,
        color: globals.colors.textColor,
        height: [62, .7],
        width: [62, .7],
        borderBottom: `1px solid rgba(255,255,255,0.2)`,
        display: flex,
        alignItems: center,
        justifyContent: center,
        backgroundColor: globals.colors.sliderButtonBackgroundHoverColor,
        desktop: {
            borderLeft: 0,
        },
        mobile: {
            borderRadius: '5px'
        },
        print: {
            display: none
        },
        hover: {
            cursor: pointer,
            child: {
                selector: '> svg',
                color: globals.colors.linkActiveColor
            }
        }
    },
    previousButton: {
        color: 'rgba(255,255,255,0.5)'
    },
    nextButton: {
        color: 'rgba(255,255,255,0.5)'
    },
    inner: {
        display: flex,
        alignItems: center,
        height: '100%'
    },
    type: {
        size: 12,
        color: globals.colors.linkActiveColor,
        letterSpacing: 2,
        textTransform: uppercase,
        weight: 600
    },
    textWrapper: {
        display: flex,
        flexDirection: column,
        justifyContent: center
    },
    title: {
        size: 16,
        letterSpacing: .24,
        marginTop: 7,
        color: 'rgba(255,255,255,0.7)',
        display: 'block; display: -webkit-box;',
        webkitLineClamp: 2,
        webkitBoxOrient: 'vertical',
        maxHeight: [48, .7, 48],
        overflow: hidden,
        textOverflow: 'ellipsis',
        height: auto,
        maxWidth: 327,
        hover: {
            color: white
        }
    },
    imageWrapper: {
        width: 140,
        height: 80,
        background: white,
        marginRight: 25
    },
    image: {
        width: 140,
        height: 80,
        hover: {
            opacity: .8
        }
    }
}

export const practicePersistentHeaderBackgroundStyle = post => {
    const baseStyle = {
        backgroundSize: '1920px',
        backgroundPositionX: '-240px',
        backgroundPositionY: '60px',
        mobile: {
            ...persistentHeaderStyle.inner.mobile,
        }
    }

    if (isPracticeMicrosite(post)) {
        if (post.industry_marquee === 'placeholder-1') {
            return {
                ...baseStyle,
                background: `url(${process.env.REACT_APP_CDN_LOCATION + 'marquee-industries-placeholder.jpg'}) no-repeat center center`,
                mobile: {
                    ...baseStyle.mobile,
                }
            }
        }

        if (post.industry_marquee === 'placeholder-2') {
            return {
                ...baseStyle,
                background: `url(${process.env.REACT_APP_CDN_LOCATION + 'marquee-industries-placeholder.jpg'}) no-repeat center center`,
                mobile: {
                    ...baseStyle.mobile,
                }
            }
        }

        if (post.industry_marquee === 'placeholder-3') {
            return {
                ...baseStyle,
                background: `url(${process.env.REACT_APP_CDN_LOCATION + 'marquee-industries-placeholder.jpg'}) no-repeat center center`,
                mobile: {
                    ...baseStyle.mobile,
                }
            }
        }

        return {
            ...baseStyle,
            background: `url(${process.env.REACT_APP_CDN_LOCATION + 'marquee-services-placeholder.jpg'}) no-repeat center center`,
            mobile: {
                ...baseStyle.mobile,
            }
        }
    }

    return {
        ...baseStyle
    }

}

export const practicePersistentNameStyle = {
    mobile: {
        color: white
    }
}

export const persistentHeaderStyle = {
    ...basePersistentHeaderStyle,
    position: fixed,
    top: 0,
    left: 0,
    mobile: {
        zIndex: 19,
        top: globals.style.mobileMicrositeHeaderHeight,
        height: auto,

    },
    placeholder: {
        ...basePersistentHeaderStyle,
        mobile: {
            position: absolute,
            top: globals.style.personMarqueeMobileHeight,
            height: globals.style.mobileHeaderHeight,
        }
    },
    inner: {
        color: white,
        backgroundColor: globals.colors.persistentHeaderBackgroundColor,
        borderBottom: '1px solid rgb(207 207 207 / 35%)',
        pointerEvents: auto,
        overflow: hidden,
        width: '100%',
        display: flex,
        alignContent: 'stretch',
        hover: {
            color: white
        },
        mobile: {
            position: relative,
            backgroundColor: globals.colors.mobilePersistentHeaderBackgroundColor,
            padding: '23px 0px',
        }
    },
    image: {
        width: 'auto',
        height: 125,
        hover: {
            cursor: pointer,
            opacity: .8
        }
    },
    imageWrapper: {
        height: 125,
        width: 125,
        minWidth: 125,
        backgroundColor: globals.colors.persistentHeaderBackgroundColor,
        borderBottom: '1px solid rgb(207 207 207 / 35%)',
    },
    info: {
        flexGrow: 1,
        display: flex,
        flexDirection: column,
        justifyContent: center,
        marginLeft: [37, globals.style.layoutScalingValue]
    },
    infoInner: {
        display: flex,
        flexDirection: row,
        alignItems: center,
    },
    contactWrapper: {
        display: flex,
        marginLeft: [30, globals.style.layoutScalingValue],
        marginRight: 50
    },
    iconWrapper: {
        display: flex,
        alignItems: center,
        justifyContent: center,
        height: 40,
        width: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 20,
        marginRight: 15,
        position: relative,
        hover: {
            cursor: pointer,
            backgroundColor: white,
            child: {
                selector: 'svg',
                color: globals.colors.linkActiveColor
            }
        }
    },
    phone: {
        size: 18,
        transform: 'rotate(90deg)',
        color: white
    },
    phoneNumber: {
        position: absolute,
        size: 16,
        lineHeight: 24,
        bottom: -30,
        letterSpacing: 0.4,
        left: 0,
        color: 'rgba(255,255,255, .7)'
    },
    email: {
        size: 18,
        color: white
    },
    name: {
        size: [30, .7, 26],
        letterSpacing: -0.5,
        font: globals.fonts.heading,
        lineHeight: 'initial',
        mobile: {
            color: globals.colors.headingColor
        },
        hover: {
            cursor: pointer,
            color: globals.colors.linkActiveColor
        }
    },
    title: {
        size: 18,
        letterSpacing: 0.5,
        weight: 300,
        lineHeight: 'initial'
    },
    type: {
        color: 'rgba(255,255,255,.7)',
        marginBottom: [5, .7, 5]
    }
}

export const adminPersistentHeaderStyle = {
    top: [32, .7, 32]
}

export const persistentHeaderMicrositeMenuStyle = {
    menu: {
        mobile: {
            marginTop: 0,
            paddingTop: 0,
        }
    },
    menuWrapper: {
        mobile: {
            position: absolute,
            overflow: 'hidden',
            width: '100%',
            left: 0,
            top: globals.style.mobileHeaderHeight
        }

    }

}