import {
    center,
    flex,
    none,
    white
}                from 'utils/themer'
import {globals} from 'variables/styles'

export const archiveDetailBreadCrumbStyle = {
    display: flex,
    alignItems: center,
    size: [18, .7, 18],
    lineHeight: [18, .7, 18],
    color: white,
    marginTop: [27, globals.style.layoutScalingValue, 27],
    height: [64, .7, 50],
    inner: {
        display: flex,
        alignItems: center,
        hover: {
            color: globals.colors.linkActiveColor,
            child: [
                {
                    selector: '> div',
                    background: globals.colors.linkHoverColor,
                    child: {
                        selector: '> svg',
                        color: white
                    }
                }
            ]
        }
    },
    hover: {
        color: globals.colors.linkActiveColor,
        child: [
            {
                selector: '> div',
                child: {
                    selector: '> svg',
                    color: white
                }
            }
        ]
    },
    mobile: {
        display: none
    },
    iconWrapper: {
        display: flex,
        alignItems: center,
        justifyContent: center,
        height: [40, .7, 40],
        width: [40, .7, 40],
        background: 'rgba(255,255,255,0.2)',
        borderRadius: [20, .7, 20],
        marginRight: [15, .7, 15]
    },
    icon: {
        color: white
    }
}