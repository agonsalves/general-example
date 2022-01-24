import {globals} from 'variables/styles'

export const micrositeSectionCustomInfoStyle = hasSidebar => {
    return {
        maxWidth: [hasSidebar ? 740 : '100%', globals.style.layoutScalingValue, '100%'],
        marginRight: [120, globals.style.layoutScalingValue, '0'],
    }
}

export const micrositeCustomExperienceHeadingStyle = {
    size: [28, .7, 28],
    lineHeight: [45, .7, 45],
    marginBottom: [30, .7, 30],
    marginTop: [40, .7, 30],
    color: globals.colors.headingColor
}