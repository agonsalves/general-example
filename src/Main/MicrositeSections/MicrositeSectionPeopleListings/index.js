import PropTypes                                    from 'prop-types'
import React                                        from 'react'
import {connect}                                    from 'react-redux'
import ButtonIconText                               from 'Shared/ButtonIconText'
import Div                                          from 'Shared/Div'
import PersonListing                                from 'Shared/PersonListing'
import {plural}                                     from 'utils/helpers'
import {longArrowAltRight}                          from 'variables/iconLibrary'
import {micrositeSectionListingViewMoreButtonStyle} from '../MicrositeSectionButton/styles'
import {
    micrositeSectionButtonWrapperStyle,
    micrositeSectionListingStyleSwitch
}                                                   from '../MicrositeSectionListings/styles'

const MicrositeSectionPeopleListings = ({section, postType, pathname, listingPage, defaultMaxPeople}) => {
    const relatedPeople = section.related_people ?? []
    const displayPeoplePosts = section?.featured_people
        ? section?.featured_people
        : relatedPeople.slice(0, defaultMaxPeople)
    const needsButton = relatedPeople.length > displayPeoplePosts.length
    return (
        <>
            <Div theme={micrositeSectionListingStyleSwitch(postType)}>
                {displayPeoplePosts?.map((item, index) => {
                        return (
                            <PersonListing
                                key={index}
                                url={item.slug}
                                headshot={item.thumbnail_teaser}
                                name={item.post_title}
                                position={item.alternate_title}
                                phone={item.phone}
                                email={item.email}
                            />
                        )
                    }
                )}
            </Div>
            {(needsButton &&
                <Div theme={micrositeSectionButtonWrapperStyle}>
                    <ButtonIconText
                        url={`${pathname}${listingPage}`}
                        label={`All ${plural(postType)}`}
                        icon={longArrowAltRight}
                        theme={micrositeSectionListingViewMoreButtonStyle}
                    />
                </Div>)}
        </>
    )
}

MicrositeSectionPeopleListings.propTypes = {
    section: PropTypes.object.isRequired,
    postType: PropTypes.string.isRequired,
    listingPage: PropTypes.string.isRequired,
    defaultMaxPeople: PropTypes.number.isRequired,
}

MicrositeSectionPeopleListings.defaultProps = {
    defaultMaxPeople: 8
}

const mapStateToProps = ({site, router}, {postType}) => ({
    listingPage: site.config.listingPages[postType]?.slug || '',
    pathname: router.location.pathname
})

export default connect(mapStateToProps)(MicrositeSectionPeopleListings)