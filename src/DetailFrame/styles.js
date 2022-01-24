import {
    borderBox,
    column,
    fixed,
    flex,
    hidden,
    inlineBlock,
    none,
    relative,
    wrap
}                from '../utils/themer'
import {globals} from '../variables/styles'

export const detailFrameOverlayStyle = {
    position: 'absolute',
    left: 0,
    top: 0,
    width: `100%`,
    height: '100vh',
    backgroundColor: '#000',
    opacity: 0
}

export const detailFrameOverlayLinkStyle = {
    position: 'absolute',
    left: 0,
    top: 0,
    width: `100%`,
    height: '100vh',
}

export const detailFrameBlogCatWrapperStyle = {
    display: inlineBlock,
    color: globals.colors.linkActiveColor
}

export const detailFrameContentWrapperStyle = {
    position: relative,
    minWidth: [1022, globals.style.layoutScalingValue, '100%'],
    width: 'auto',
    paddingTop: [25, globals.style.layoutScalingValue, 30],
    paddingRight: [83, globals.style.layoutScalingValue, 25],
    paddingLeft: [83, globals.style.layoutScalingValue, 25],
    paddingBottom: [80, globals.style.layoutScalingValue, '0'],
    mobile: {
        boxSizing: borderBox,
        width: '100%'
    }
}

export const detailFramePeopleWrapperStyle = {
    display: flex,
    flexWrap: wrap,
    boxSizing: borderBox,
    paddingLeft: [80, globals.style.layoutScalingValue, '0'],
    paddingTop: [35, globals.style.layoutScalingValue, 35],
    paddingBottom: [35, globals.style.layoutScalingValue, 35],
    mobile: {
        paddingLeft: 25,
        paddingRight: 25
    }
}

export const detailFrameWrapperStyle = {
    position: fixed,
    overflow: hidden,
    zIndex: 30,
    width: '100%',
    height: '100vh',
}

export const detailFrameStyle = {
    position: relative,
    gridColumn: '1 / 6',
    msGridColumn: 1,
    msGridColumnSpan: 5,
    gridRow: 1,
    msGridRow: 1,
    gridRowStart: 1,
    gridRowEnd: 4,
    gridColumnStart: 1,
    gridColumnEnd: 6,
    zIndex: 30,
    width: [1476, globals.style.layoutScalingValue, '100%'], //1476 - correct value
    height: '100%',
    display: flex,
    flexDirection: column,
    hlm: {
        backgroundColor: globals.colors.micrositeDetailHeaderColor
    },
    lm: {
        height: '100vh',
        mobile: {
            display: none
        }
    },
    main: {
        paddingTop: 0,
        overflowX: hidden,
        position: relative,
        height: '100vh',
        msScrollBar: none,
        ffScrollBar: none,
        scrollBar: {
            display: none,
        },
        mobile: {
            marginTop: 0
        }
    }
}