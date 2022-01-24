import {isMicrosite} from 'utils/flags'
import {
    absolute,
    auto,
    block,
    column,
    flex,
    inlineBlock,
    none,
    relative,
    uppercase,
    white
} from 'utils/themer'
import {globals}     from 'variables/styles'

export const archiveDetailContentWrapperStyle = {
    paddingLeft: [68, globals.style.layoutScalingValue, '0'],
    width: [928, globals.style.layoutScalingValue, '100%']
}

export const micrositeDetailContentWrapperStyle = {
    minWidth: [721, globals.style.layoutScalingValue, '100%'],
    width: 'auto'
}

export const archiveDetailSocialWrapperStyle = {
    marginTop: [8, .7, 8]
}

export const detailFrameBottomStyle = {
    paddingLeft: 0
}

export const detailFrameTopStyle = {
    flexDirection: column,
    after: {
        content: none
    },
    borderBottom: globals.style.dividingBorder,
    borderWidth: '1px'
}

export const archiveDetailBottomStyle = {
    display: 'flex',
    alignContent: 'flex-start',
    paddingLeft: [43, globals.style.layoutScalingValue, '0'],
    mobile: {
        flexDirection: column
    }
}

export const archiveDetailTitleStyle = post => {
    const base = {
        font: globals.fonts.heading,
        size: [36, .7, 36],
        lineHeight: [44, .7, 42],
        color: globals.colors.headingColor,
        marginTop: [15, .7, '0'],
        paddingBottom: [13, globals.style.layoutScalingValue, 13],
        weight: 800,
    }

    if (isMicrosite(post)) {
        return {
            ...base,
        }
    }

    if (post.post_type === 'publication')
        return {
            ...base,
            paddingBottom: [40, globals.style.layoutScalingValue, 13]
        }

    if (post.post_type === 'news-item')
        return {
            ...base,
            paddingBottom: [71, globals.style.layoutScalingValue, 13]
        }

    return {
        ...base
    }

}

export const archiveDetailTypeStyle = {
    display: inlineBlock,
    size: [13, .7, 13],
    lineHeight: [30, .7, 30],
    letterSpacing: [2, .7, 2],
    weight: 500,
    color: globals.colors.linkActiveColor,
    textTransform: uppercase,
    mobile: {
        marginBottom: 14
    }
}

export const archiveDetailDateAndSourceStyle = {
    date: {
        size: [18, .7, 16],
        lineHeight: [30, .7, 22],
        letterSpacing: [0.2, .7, 0.18],
    },
    source: {
        size: [18, .7, 16],
        lineHeight: [30, .7, 22],
        letterSpacing: [0.2, .7, 0.18],
    }
}

export const eventRegisterButtonStyle = {
    marginTop: [35, .7, 35],
    marginBottom: [20, .7, 20],
    marginRight: auto,
    marginLeft: [85, .7, 85]
}

export const archiveDetailTopStyle = hasImage => {
    return {
        display: flex,
        marginBottom: [40, .7, 40],
        paddingBottom: [30, .7, 30],
        width: '100%',
        position: relative,
        after: {
            content: '\'\'',
            position: absolute,
            bottom: 0,
            right: hasImage ? 0 : 'initial',
            left: hasImage ? 'initial' : 43,
            width: [hasImage ? 1067 : 978, globals.style.layoutScalingValue, '0'],
            height: 1,
            background: globals.colors.borderColor,
            mobile: {
                content: none
            }
        },
        mobile: {
            flexDirection: column,
            borderBottom: globals.style.dividingBorder,
            borderWidth: '1px'
        }
    }
}

export const detailFrameInnerStyle = translateX => {
    return {
        display: flex,
        backgroundColor: white,
        paddingTop: 0,
        position: absolute,
        transform: `translateX(${translateX})`,
        mobile: {
            position: relative,
            flexDirection: column
        }
    }
}

export const detailSidebarImagePlaceholderStyle = {
    minWidth: [454, globals.style.layoutScalingValue, '100%'],
    maxWidth: [454, globals.style.layoutScalingValue, '100%'],
    height: [75, globals.style.layoutScalingValue, 75],
    mobile: {
        display: none
    }
}

export const detailSidebarImageStyle = {
    minWidth: [454, globals.style.layoutScalingValue, 220],
    maxWidth: [454, globals.style.layoutScalingValue, 220],
    marginBottom: [43, globals.style.layoutScalingValue, 43],
    mobile: {
        display: none
    }
}

export const detailMobileTopImageStyle = {
    ...detailSidebarImageStyle,
    mobile: {
        display: block,
        marginBottom: 10,
        marginTop: 26,
    }
}

export const detailSideBarWrapperStyle = {
    width: [454, globals.style.layoutScalingValue, '100%'],
    marginBottom: [30, .7, 80],
    mobile: {
        paddingLeft: 25,
        paddingRight: 25,
        position: relative,
        paddingTop: 40,
        empty: {
            display: none
        }
    },
    before: {
        mobile: {
            content: '\'\'',
            height: '1px',
            width: 'calc(100% - 50px)',
            background: globals.colors.borderColor,
            left: 25,
            position: absolute,
            top: 0,
        }
    },
}