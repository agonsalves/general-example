import ArchiveListingTeaserThumbnail from 'Main/ArchiveListingTeaserThumbnail'
import {
    ArchiveListingTextWrapper,
    ArchiveListingTitle
}                                    from 'Main/ArchiveListingWrapper/styles'
import Div                           from 'Shared/Div'
import Icon                          from 'Shared/Icon'
import {
    auto,
    center,
    flex,
    flexStart
}                                    from 'utils/themer'
import {longArrowAltRight}           from 'variables/iconLibrary'
import {globals}                     from 'variables/styles'

export const CaseStudyTitle = props =>
    <ArchiveListingTitle
        {...props}
        theme={{marginTop: [50, globals.style.layoutScalingValue, 24]}}
    />

export const CaseStudyTextWrapper = props =>
    <ArchiveListingTextWrapper
        {...props}
        theme={{maxWidth: [820, globals.style.layoutScalingValue, '100%']}}
    />

export const CaseStudyReadMore = () =>
    <Div
        className="archive-accent"
        theme={{
            display: flex,
            alignItems: center,
            size: [18, .7, 18],
            lineHeight: [18, .7, 18],
            letterSpacing: [0.2, .7, 0.2],
            paddingBottom: [40, globals.style.layoutScalingValue, 40],
            weight: 600,
            marginTop: 0,
            marginBottom: 0,
            color: globals.colors.linkActiveColor
        }}
    >
        Read more
        <Icon
            icon={longArrowAltRight}
            theme={{
                marginLeft: [15, .7, 15],
                marginBottom: [-4, .7, -4]
            }}
        />
    </Div>

export const CaseStudyThumbnail = ({image}) =>
    <ArchiveListingTeaserThumbnail
        img={image}
        theme={{
            alignSelf: flexStart,
            height: auto,
            minWidth: [325, globals.style.layoutScalingValue, '100%'],
            maxWidth: [325, globals.style.layoutScalingValue, '100%'],
        }}
    />