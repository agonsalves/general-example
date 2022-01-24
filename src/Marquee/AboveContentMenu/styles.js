import {
    flex,
    none,
    wrap
}                from '../../utils/themer'
import {globals} from '../../variables/styles'

export const aboutMicrositeMenuWrapperStyle = {
    display: flex,
    marginTop: [78, globals.style.layoutScalingValue - .3],
    marginBottom: [50, globals.style.layoutScalingValue - .3],
    flexWrap: wrap,
    mobile: {
        margin: 0
    },
    print: {
        display: none,
    }
}