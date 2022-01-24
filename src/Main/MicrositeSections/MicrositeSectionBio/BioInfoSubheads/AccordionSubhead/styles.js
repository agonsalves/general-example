import {
    borderBox,
    center,
    column,
    flex,
    hidden,
    inlineFlex,
    none,
    pointer,
    relative,
    spaceBetween,
    white
} from 'utils/themer'
import {
    colorPalette,
    globals
} from 'variables/styles'

export const bioInfoInnerStyle = {
    overflow: hidden,
    paddingLeft: [40, globals.style.layoutScalingValue, 40],
    paddingRight: [40, globals.style.layoutScalingValue, 40],
    boxSizing: borderBox,
    child: {
        selector: '> *',
        color: globals.colors.headingColor,
        size: [18, .7, 18],
        lineHeight: [30, .7, 30],
        weight: 300
    }
}
export const bioInfoHeaderStyle = isExpanded => {
    const baseStyle = {
        display: flex,
        width: '100%',
        justifyContent: spaceBetween,
        alignItems: center,
        minHeight: [94, .7, 74],
        paddingRight: [42, .7, 42],
        transition: 'background-color 250ms ease',
        hover: {
            cursor: pointer,
            backgroundColor: colorPalette.yellow,
            child: [
                {
                    selector: '> *',
                    color: white
                }
            ]
        }
    }

    if (isExpanded)
        return {
            ...baseStyle,
            child: {
                selector: '> svg',
                color: globals.colors.linkActiveColor
            },
            hover: {
                ...baseStyle.hover,
                backgroundColor: colorPalette.gray,
                child: {}
            }
        }

    return {
        ...baseStyle
    }

}
export const bioInfoStyle = isExpanded => {
    const baseStyle = {
        display: flex,
        flexDirection: column,
        position: relative,
        columnSpan: 'none',
        breakInside: 'avoid',
        overflow: hidden,
        borderBottom: globals.style.dividingBorder,
        borderWidth: '1px',
        firstChild: {
            marginTop: 0,
            paddingTop: 0,
            before: {
                content: none,
            }
        },
        print: {
            pageBreakInside: 'avoid'
        }
    }

    if (isExpanded)
        return {
            ...baseStyle,
            backgroundColor: colorPalette.gray
        }

    return {
        ...baseStyle
    }

}
export const bioInfoSubheadStyle = isExpanded => {
    const baseStyle = {
        display: inlineFlex,
        width: '100%',
        alignItems: center,
        size: [18, .7, 18],
        lineHeight: [28, .7, 28],
        weight: 600,
        letterSpacing: [0.2, .7, 0.2],
        marginTop: 0,
        marginBottom: 0,
        paddingLeft: [40, globals.style.layoutScalingValue, 30]
    }

    if (isExpanded)
        return {
            ...baseStyle,
            color: globals.colors.linkActiveColor
        }

    return {
        ...baseStyle
    }
}

export const bioInfoSubheadIcon = {
    size: [14,.7, 14]

}