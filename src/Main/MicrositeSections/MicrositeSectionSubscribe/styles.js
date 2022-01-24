import {pageFrameStyle} from '../../../Root/PageFrame/styles'
import {
    absolute,
    borderBox,
    column,
    flex,
    inherit,
    none,
    relative
}                       from '../../../utils/themer'
import {globals}        from '../../../variables/styles'
export const subscribeListingStyle = {
    position: absolute,
    left: 0,
    top: inherit,
    width: `100%`,
    display: flex,
    flexDirection: column,
    marginBottom: [10, .7, 10],
    boxSizing: borderBox,
    mobile: {
        position: relative,
        marginBottom: 50,
        padding: '25px'
    },
    inner: {
        ...pageFrameStyle.marquee,
        paddingLeft: [0, globals.style.layoutScalingValue, '0'],
        print: {
            paddingLeft: 0
        }
    },
    title: {
        border: none,
        paddingBottom: [32, .7, 32],
        marginBottom: 0,
    },
    description: {
        size: [18, .7, 18],
        lineHeight: [30, .7, 30],
        letterSpacing: [0.4, .7, 0.4],
        paddingBottom: [15, .7, 15]
    }
}
export const subscribeListingButtonStyle = {
    marginLeft: [0, globals.style.layoutScalingValue, '0'],
    ie: {
        width: '100%'
    }
}
export const subscribeListingButtonWrapperStyle = {
    display: flex,
    flexDirection: column
}