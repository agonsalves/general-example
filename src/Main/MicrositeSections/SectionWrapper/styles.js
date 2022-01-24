import {
    isPracticeMicrosite
}                from 'utils/flags'
import {
    block,
    column,
    flex,
    white
}                from 'utils/themer'
import {globals} from 'variables/styles'

export const micrositeSectionWrapperStyle = post => {
    const baseStyle = {
        display: flex,
        flexDirection: column,
        width: '100%',
        ie: {
            paddingLeft: 0
        },
        print: {
            marginTop: 0,
            paddingTop: 0,
            display: block,
            paddingLeft: 0
        }
    }

    if (isPracticeMicrosite(post))
        return {
            ...baseStyle,
            marginTop: [-(globals.style.mainTopGutter + globals.style.practiceMarqueePaddingBottom), .55, '0'],
            backgroundColor: white,
            paddingTop: [56, .55, '0'],
            paddingLeft: [85, globals.style.layoutScalingValue, '0']
        }

    return {
        ...baseStyle
    }

}