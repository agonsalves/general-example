import {
    absolute,
    auto,
    center,
    column,
    flex,
    flexEnd,
    flexStart,
    none,
    pointer,
    spaceBetween,
    uppercase,
    white
} from 'utils/themer'
import {
    colorPalette,
    globals
} from 'variables/styles'

export const micrositeDetailNavControlStyles = {
    display: flex,
    alignItems: center,
    hover: {
        color: globals.colors.linkActiveColor,
        cursor: pointer,
        child: {
            selector: 'svg',
            color: globals.colors.linkActiveColor
        }
    }
}

export const micrositeDetailNavControlIconStyles = {
    size: 18,
    color: globals.colors.headingColor,
}

export const micrositeDetailNavStyle = {
    display: flex,
    justifyContent: flexEnd,
    flexGrow: 1,
    size: [14, .7, 14],
    lineHeight: [20, .7, 20],
    letterSpacing: [2, .7, 2],
    textTransform: uppercase,
    color: globals.colors.headingColor,
    width: 300,
    marginRight: 42,
    mobile: {
        display: none
    },
    prev: hasPrev => {
        return {
            ...micrositeDetailNavControlStyles,
            color: hasPrev ? globals.colors.headingColor : colorPalette.offBlue,
            hover: {
                cursor: hasPrev ? pointer : auto
            }
        }
    },
    next: hasNext => {
        return {
            ...micrositeDetailNavControlStyles,
            color: hasNext ? globals.colors.headingColor : colorPalette.offBlue,
            marginLeft: 61,
            hover: {
                cursor: hasNext ? pointer : auto
            }
        }
    },
    nextIcon: hasNext => {
        return {
            ...micrositeDetailNavControlIconStyles,
            color: hasNext ? globals.colors.headingColor : colorPalette.offBlue,
            marginLeft: 22
        }

    },
    prevIcon: hasPrev => {
        return {
            ...micrositeDetailNavControlIconStyles,
            color: hasPrev ? globals.colors.headingColor : colorPalette.offBlue,
            marginRight: 22
        }
    }
}

export const micrositeDetailTopBarStyle = {
    display: flex,
    height: [80, globals.style.layoutScalingValue, 80],
    minHeight: [80, globals.style.layoutScalingValue, 80],
    width: '100%',
    backgroundColor: colorPalette.gray,
    overflow: 'visible',
    justifyContent: spaceBetween,
    alignItems: center,
    paddingLeft: [83, globals.style.layoutScalingValue, 25],
    title: {
        display: flex,
        alignItems: center,
        size: [16, .7, 16],
        lineHeight: [22, .7, 22],
        flexStretch: 1,
        color: globals.colors.micrositeDetailTypeColor,
        mobile: {
            height: 80,
            justifyContent: center,
            flexDirection: column,
            alignItems: flexStart
        }
    },
    name: {
        color: globals.colors.headingColor,
        paddingRight: [12, .7, '0']
    },
    type: {
        paddingLeft: [12, .7, '0'],
        mobile: {
            paddingTop: 2
        }
    },
    close: {
        display: flex,
        alignItems: center,
        justifyContent: center,
        backgroundColor: globals.colors.micrositeDetailCloseBackgroundColor,
        color: white,
        width: [80, globals.style.layoutScalingValue, 80],
        height: [80, globals.style.layoutScalingValue, 80],
        minHeight: [80, globals.style.layoutScalingValue, 80],
        position: absolute,
        left: '100%',
        top: 0,
        mobile: {
            left: 'inherit',
            right: 0
        },
        hover: {
            backgroundColor: globals.colors.micrositeDetailCloseBackgroundHoverColor
        }
    },
    closeIcon: {
        color: white,
        size: [30, globals.style.layoutScalingValue, 30]
    }
}