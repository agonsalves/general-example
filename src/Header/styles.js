import {
    isPersonMicrosite,
    isPracticeMicrosite
}                from 'utils/flags'
import {
    absolute,
    center,
    fixed,
    flex,
    flexStart,
    none,
    relative,
    spaceBetween,
    white
}                from 'utils/themer'
import {globals} from 'variables/styles'

export const headerContainerStyle = post => {
    const baseStyle = {
        position: absolute,
        width: '100%',
        height: globals.style.headerHeight,
        background: white,
        color: globals.colors.textColor,
        desktop: {
            position: relative,
            display: flex,
            justifyContent: spaceBetween,
            alignItems: center
        },
        mobile: {
            height: globals.style.mobileHeaderHeight,
            position: fixed
        },
        print: {
            height: 100,
            alignItems: flexStart,
            after: {
                content: none
            }
        }
    }

    if (isPersonMicrosite(post) || isPracticeMicrosite(post))
        return {
            ...baseStyle,
            mobile: {
                ...baseStyle.mobile,
                height: globals.style.mobileMicrositeHeaderHeight,
            }
        }

    return baseStyle
}

export const headerContainerInnerStyle = {
    margin: '0 auto',
    width: [1543, globals.style.layoutScalingValue, '100%'],
    display: flex,
    justifyContent: spaceBetween,
    alignItems: center
}