import {defaultFirstParagraphLargeStyle} from 'Shared/RichText/styles'
import {globals}                         from '../../../variables/styles'
import {micrositeSectionBioWrapperStyle} from '../MicrositeSectionBio/styles'

export const micrositeSectionOverviewStyle = {
    ...micrositeSectionBioWrapperStyle,
    mobile: {
        ...micrositeSectionBioWrapperStyle.mobile
    }
}

export const micrositeSectionOverviewDescriptionStyle = {
    ...defaultFirstParagraphLargeStyle
}

export const micrositeSectionOverviewInfoStyle = (hasMicrositeMenu, hasSidebar) => {
    if(hasMicrositeMenu && !Boolean(hasSidebar)) {
        return {
            maxWidth: [1030, globals.style.layoutScalingValue, 'none'],
            marginTop: [11, .7, 0],
            marginRight: 0,
            print: {
                maxWidth: '100%',
                paddingRight: 50
            }
        }
    } else {
        return {
            maxWidth: [hasMicrositeMenu ? 740 : 1030, .36, '100%'],
            marginTop: [6, .7, 0],
            marginRight: 0,
            paddingRight: [!hasMicrositeMenu ? 120 : 0, .36, '0'],
            print: {
                maxWidth: '100%',
                paddingRight: 50
            }
        }
    }

}