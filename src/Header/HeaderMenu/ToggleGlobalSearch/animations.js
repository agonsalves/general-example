import {sv}      from 'utils/themer'
import {globals} from 'variables/styles'

export const globalSearchToggleVariants = {
    initial: {
        marginLeft: sv(`${globals.style.globalSearchClosedMarginLeft}`),
        transition: {
            duration: .5
        },
    },
    expanded: {
        marginLeft: sv(0),
        transition: {
            duration: .5
        }
    }
}
export const globalSearchIconVariants = {
    initial: {
        opacity: 1,
        width: sv(`${globals.style.globalSearchIconWidth}`),
        height: sv(`${globals.style.globalSearchIconHeight}`),
        transition: {
            duration: .5,
        }
    },
    expanded: {
        opacity: 0,
        width: 0,
        height: 0,
        transition: {
            duration: .5,
        }
    }
}
export const globalSearchVariants = {
    initial: {
        width: 0,
        transition: {
            duration: .5,
        }
    },
    expanded: {
        width: 'auto',
        transition: {
            duration: .5,
        }
    }
}