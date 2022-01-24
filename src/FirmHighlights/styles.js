import {
    center,
    flex,
    none,
    pointer,
    relative,
    sv,
    white
}                from '../utils/themer'
import {globals} from '../variables/styles'

export const firmHighlightsStyle = {
    backgroundColor: globals.colors.headingColor,
    paddingBottom: [113, .7, 10],
    paddingTop: [134, .7, 25],
    marginTop: [115, .7, '0'],
    inner: {
        width: [1432, globals.style.layoutScalingValue, '100%'],
        margin: '0 auto'
    },
    print: {
        display: none
    },
    wrapper: {
        margin: '0 auto',
        mobile: {
            margin: '0 0 0 25px',
            width: 330,
        },
        child: {
            selector: '.slider'
        }
    },
    child: [
        {
            selector: '.slider-frame',
            overflow: 'hidden !important',
            mobile: {
                width: 250
            }
        },
        {
            selector: '.slider-slide'
        },
        {
            selector: '.slider-control-centerleft',
            display: none
        },
        {
            selector: '.slider-control-centerright',
            display: none
        },
        {
            selector: '.slider-control-topleft',
            left: 'inherit !important',
            top: `${sv(-116, .75)} !important`,
            right: `${sv(68, .7)} !important`,
            large: {
                right: '68px !important'
            },
            mobile: {
                display: none
            }
        },
        {
            selector: '.slider-control-topright',
            right: 0,
            top: `${sv(-116, .75)} !important`,
            mobile: {
                right: '0 !important',
                top: 'calc(50% - 25px) !important'
            }
        }
    ],
    headingBar: {},
    heading: {
        color: white,
        font: globals.fonts.heading,
        weight: 500,
        size: [45, .7, 38],
        lineHeight: [40, .7, 40],
        paddingBottom: 33,
        borderBottom: globals.style.dividingBorder,
        borderWidth: '2px',
        marginBottom: [40, .7, 40],
        mobile: {
            marginLeft: 25,
            borderBottom: `2px solid ${globals.colors.lightGray}`,
            width: 'calc(100% - 50px)',
            paddingBottom: 22,
            paddingTop: 15,
            marginBottom: 21
        }
    },
    previousButtonWrapper: {
        height: [55, .7, 55],
        width: [55, .7, 55],
        borderRadius: [30, .7, 30],
        display: flex,
        alignItems: center,
        justifyContent: center,
        background: 'rgba(255,255,255,0.2)',
        mobile: {
            display: none
        },
        print: {
            display: none
        },
        hover: {
            backgroundColor: white,
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
        height: [55, .7, 45],
        width: [55, .7, 45],
        borderRadius: [30, .7, 30],
        display: flex,
        alignItems: center,
        justifyContent: center,
        background: 'rgba(255,255,255,0.2)',
        desktop: {
            borderLeft: 0,
        },
        print: {
            display: none
        },
        hover: {
            backgroundColor: white,
            child: {
                selector: '> svg',
                color: globals.colors.linkActiveColor
            }
        }
    },
    nextButton: {
        color: globals.colors.firmHighlightsArrowColor,
        zIndex: 2,
        position: relative,
        size: [24, .7, 24],
        hover: {
            color: globals.colors.firmHighlightsArrowColor,
            cursor: pointer
        }
    },
    prevButton: {
        color: globals.colors.firmHighlightsArrowColor,
        zIndex: 2,
        position: relative,
        size: [24, .7, 24],
        hover: {
            color: globals.colors.firmHighlightsArrowColor,
            cursor: pointer
        }
    }
}