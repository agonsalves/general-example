import {isMicrosite} from 'utils/flags'
import {
    center,
    flex,
    relative
}                    from 'utils/themer'
import {globals}     from 'variables/styles'

export const mobileHeaderStyle = {
    mobile: {
        borderBottom: `2px solid rgba(255,255,255,1)`,
        width: '100vw'
    },
    inner: {
        display: flex,
        alignItems: center,
        justifyContent: 'space-between'
    },
    navWrapper: {},
    globalSearch: {},
}

export const mobileLogoStyle = post => {
    return {
        mobile: {
            position: relative,
            display: flex,
            top: 0,
            margin: 0,
            left: 0,
            height: isMicrosite(post) ? globals.style.mobileMicrositeHeaderHeight : globals.style.mobileHeaderHeight,
        },
        image: {
            mobile: {
                width: 200,
                marginLeft: 25
            }
        }
    }

}