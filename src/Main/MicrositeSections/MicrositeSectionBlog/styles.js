import {publicationListingExcerptStyle} from 'Main/PublicationListing/styles'
import {
    center,
    column,
    flex,
    none
}                                       from 'utils/themer'
import {globals}                        from 'variables/styles'

export const micrositeSectionBlogDescriptionWrapperStyle = {
    display: flex,
    borderBottom: `3px solid ${globals.colors.headingColor}`,
    borderWidth: 3,
    paddingBottom: [40, .7, 40],
    marginBottom: [50, .7, 50],
    alignItems: center,
    mobile: {
        flexDirection: column
    }
}

export const micrositeSectionBlogDescriptionStyle = {
    ...publicationListingExcerptStyle,
    maxWidth: [900, globals.style.layoutScalingValue, '100%'],
    paddingTop: [40, .7, 40],
    mobile: {
        marginBottom: 20,
        maxHeight: none
    },
    child: {
        selector: 'p',
        marginBottom: 0
    }
}

export const micrositeSectionBlogButtonStyle = {
    alignSelf: center
}

export const micrositeSectionBlogHeadingStyle = {
    marginBottom: 0,
    border: 0,
    paddingBottom: 0

}