import {globals} from 'variables/styles'

export const bioDescriptionStyle = {
    paddingBottom: 25
}

export const micrositeSectionBioWrapperStyle = {
    marginBottom: [43, .7, '0'],
    mobile: {
        marginTop: 0
    }
}

export const micrositeSectionBioInfoStyle = hasMicrositeMenu => {
    return {
        maxWidth: [hasMicrositeMenu ? 740 : 1030, globals.style.layoutScalingValue, '100%'],
        marginTop: [6, .7, 0],
        marginRight: [hasMicrositeMenu ? 0 : 120, globals.style.layoutScalingValue, '0'],
        print: {
            maxWidth: '100%',
            paddingRight: 50
        }
    }
}