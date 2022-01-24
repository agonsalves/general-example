import {iconToData} from 'utils/styling'
import {
    absolute,
    center,
    fixed,
    flex,
    hidden,
    none,
    normal,
    pointer,
    relative,
    sv,
    white
}                   from 'utils/themer'
import {search}     from 'variables/iconLibrary'
import {globals}    from 'variables/styles'

export const micrositeGalleryDescriptionWrapperStyle = {
    display: flex,
    marginBottom: [46, .7, 46]
}

export const micrositeGalleryDescriptionStyle = {
    marginRight: [120, globals.style.layoutScalingValue, '0']
}

export const micrositeGalleryHeadingStyle = {
    size: [28, .7, 28],
    marginBottom: [24, .7, 24],
    lineHeight: [35, .7, 35],
    color: globals.colors.headingColor,
    letterSpacing: normal,
    weight: 400,
    child: {
        selector: 'p',
        letterSpacing: 0,
        marginBottom: 31,
        weight: 400
    }
}
export const micrositeGalleryWrapperStyle = {
    child: [
        {
            selector: '.slider-slide',
            after: {
                position: absolute,
                top: '50%',
                left: '50%',
                marginLeft: [-30, .7, -30],
                marginTop: [-30, .7, -30],
                height: [60, .7, 60],
                width: [60, .7, 60],
                backgroundColor: globals.colors.linkActiveColor,
                borderRadius: [30, .7, 30],
                padding: [18, .7, 18],
                pointerEvents: none
            },
            hover: {
                child: [
                    {
                        selector: '> img',
                        opacity: .6
                    }
                ],
                after: {
                    content: iconToData(search, white),
                }
            }
        },
        {
            selector: '.slider-slide > img',
            mobile: {
                height: 'auto'
            }
        },
        {
            selector: '.slider-control-centerright',
            display: none
        },
        {
            selector: '.slider-control-centerleft',
            display: none
        },
        {
            selector: '.slider-control-topleft',
            left: 'inherit !important',
            top: `${sv(-70, .7)} !important`,
            right: `${sv(63, .7)} !important`,
            large: {
                right: '63px !important'
            },
            mobile: {
                display: none
            }
        },
        {
            selector: '.slider-control-topright',
            right: 0,
            top: `${sv(-70, .7)} !important`,
            mobile: {
                right: '0 !important',
                bottom: '-70px !important',
                top: 'inherit !important'
            }
        }
    ],
    previousButtonWrapper: {
        display: flex,
        alignItems: center,
        justifyContent: center,
        height: [55, .7, 55],
        width: [55, .7, 55],
        backgroundColor: globals.colors.sliderButtonBackgroundColor,
        borderRadius: [30, .7, 30],
        right: [55, .7, 55],
        hover: {
            cursor: pointer,
            backgroundColor: globals.colors.sliderButtonBackgroundHoverColor,
            child: {
                selector: 'svg',
                color: white
            }
        }
    },
    prevButton: {},
    nextButtonWrapper: {
        display: flex,
        alignItems: center,
        justifyContent: center,
        height: [55, .7, 55],
        width: [55, .7, 55],
        backgroundColor: globals.colors.sliderButtonBackgroundColor,
        borderRadius: [30, .7, 30],
        right: 0,
        hover: {
            cursor: pointer,
            backgroundColor: globals.colors.sliderButtonBackgroundHoverColor,
            child: {
                selector: 'svg',
                color: white
            }
        }
    },
    nextButton: {}
}
export const micrositeGalleryImageStyle = {
    height: [410, globals.style.layoutScalingValue, 410],
    width: [410, globals.style.layoutScalingValue, 410],
    print: {
        width: '33.3%',
        height: 300
    },
    searchIcon: {
        position: absolute,
        top: '50%',
        left: '50%',
        marginLeft: [-30, .7, -30],
        marginTop: [-30, .7, -30],
        height: [60, .7, 60],
        width: [60, .7, 60],
        backgroundColor: globals.colors.linkActiveColor,
        borderRadius: [30, .7, 30]
    }
}
export const micrositeGalleryPortalCarouselContainerStyle = {
    position: fixed,
    display: flex,
    alignItems: center,
    justifyContent: center,
    top: `calc(50% - 27vw)`,
    left: `calc(50% - 27vw)`,
    height: '54vw',
    width: '54vw',
    zIndex: 22
}
export const micrositeGalleryPortalContainerInnerStyle = {
    position: relative,
    height: '54vw',
    width: '54vw',
    userSelect: none,
    overflow: hidden
}
export const micrositeGalleryPortalImageWrapperStyle = {
    position: absolute,
    display: flex,
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    userSelect: none,
}
export const micrositeGalleryPortalImageStyle = {}
export const micrositeGalleryPortalControlsWrapperStyle = {
    position: absolute,
    width: '100%',
    top: `calc(50% - ${sv(45, globals.style.layoutScalingValue)})`
}
export const micrositeGalleryPortalControlStyle = {
    position: absolute,
    display: flex,
    alignItems: center,
    justifyContent: center,
    height: [90, globals.style.layoutScalingValue, 40],
    width: [90, globals.style.layoutScalingValue, 40],
    borderRadius: 50,
    background: white,
    transition: 'background-color 250ms ease',
    hover: {
        backgroundColor: globals.colors.headingColor,
        cursor: pointer,
        child: {
            selector: 'svg',
            color: white
        }
    },
    icon: {
        size: [24, .7],
        color: globals.colors.headingColor,
        transition: 'color 250ms ease',
    }
}
export const micrositeGalleryPortalControlRightStyle = {
    ...micrositeGalleryPortalControlStyle,
    right: [-215, globals.style.layoutScalingValue, 0],
    icon: {
        ...micrositeGalleryPortalControlStyle.icon,
    }
}
export const micrositeGalleryPortalControlLeftStyle = {
    ...micrositeGalleryPortalControlStyle,
    left: [-215, globals.style.layoutScalingValue, 0],
    icon: {
        ...micrositeGalleryPortalControlStyle.icon,
    }
}