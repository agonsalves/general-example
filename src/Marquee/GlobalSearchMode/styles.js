import {
    absolute,
    borderBox,
    center,
    flex,
    inlineBlock,
    pointer,
    relative,
    sv,
    white
}                from 'utils/themer'
import {globals} from 'variables/styles'

export const globalSearchWrapperStyle = {
    display: 'flex',
    alignItems: 'center',
}

export const globalSearchMatchStyle = {
    display: flex,
    alignItems: center,
    size: [18, .7, 18],
    lineHeight: [30, .7, 30],
    letterSpacing: [0.2, .7, 0.2],
    weight: 600,
    height: [64, .7, 56],
    background: 'rgba(255,255,255,.2)',
    borderRadius: [60, .7, 60],
    boxSizing: borderBox,
    paddingLeft: [30, .7, 22],
    paddingRight: [30, .7, 22],
    marginTop: [34, globals.style.layoutScalingValue, 20]
}

export const globalSearchMatchButtonStyle = {
    position: relative,
    height: '100%',
    display: flex,
    alignItems: center,
    color: white,
    hover: {
        color: globals.colors.linkActiveColor,
        cursor: pointer
    }
}

export const globalSearchMatchFuzzyButtonStyle = {
    ...globalSearchMatchButtonStyle
}

export const globalSearchInfoIconStyle = {
    position: relative,
    font: globals.fonts.heading,
    minWidth: [40, .7, 40],
    size: [40, .7, 32],
    marginTop: [34, .7, 12],
    paddingLeft: [16, .7, 16],
    weight: 600,
    color: white,
    hover: {
        color: globals.colors.linkActiveColor,
        cursor: pointer,
        child: {
            selector: 'div',
            color: white
        }
    }
}

export const globalSearchInfoBoxStyle = {
    position: absolute,
    top: [70, .7, 70],
    width: [164, .7, 164],
    minHeight: [144, .7, 144],
    backgroundColor: globals.colors.linkActiveColor,
    borderRadius: [15, .7, 15],
    marginLeft: [-79, .7, -136],
    font: globals.fonts.body,
    size: [15, .7, 15],
    lineHeight: [22, .7, 22],
    padding: [21, .7, 21],
    boxSizing: borderBox,
    hover: {
        color: white
    },
    triangle: {
        display: inlineBlock,
        width: '0',
        height: '0',
        borderStyle: 'solid',
        borderWidth: `0 ${sv(12, .7)} ${sv(27, .7)} ${sv(12, .7)}`,
        borderColor: `transparent transparent #F99C03 transparent`,
        position: absolute,
        top: [-20, .7],
        left: `50%`,
        marginLeft: [-11, .7, -30],
        mobile: {
            left: '100%'
        }
    }
}

export const globalSearchMatchExactButtonStyle = {
    ...globalSearchMatchButtonStyle,
    paddingLeft: [30, .7, 20],
    marginLeft: [30, .7, 20],
    before: {
        content: '\'\'',
        height: [64, .7, 56],
        width: '2px',
        backgroundColor: 'rgba(255,255,255,.05)',
        position: absolute,
        left: 0,
        top: 0
    }
}

export const globalSearchMatchTextStyle = {
    position: relative,
    after: {
        height: [3, .7, 3],
        width: '100%',
        backgroundColor: globals.colors.linkActiveColor,
        position: absolute,
        bottom: [-2, .7, -2],
        left: 0
    },
}

export const globalSearchMatchExactTextStyle = isExact => {
    if (isExact) {
        return {
            ...globalSearchMatchTextStyle,
            after: {
                ...globalSearchMatchTextStyle.after,
                content: '\'\''
            }
        }
    }
}

export const globalSearchMatchFuzzyTextStyle = isExact => {
    if (!isExact) {
        return {
            ...globalSearchMatchTextStyle,
            after: {
                ...globalSearchMatchTextStyle.after,
                content: '\'\''
            }
        }
    }
}