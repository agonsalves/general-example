import PropTypes            from 'prop-types'
import React                from 'react'
import CaseStudyListing     from 'Main/CaseStudyListing'
import NewsListing          from 'Main/NewsListing'
import PersonListing        from 'Shared/PersonListing'
import PracticeListing      from 'Main/MicrositeSections/MicrositeSectionBio/BioInfoSubheads/PracticeListing'
import {composePersonTitle} from 'utils/helpers'
import BlogPostListing      from 'Main/BlogPostListing'
import EventListing         from 'Main/EventListing'
import PublicationListing   from 'Main/PublicationListing'
import {
    blogPostListingItemStyle,
}                                              from '../../Templates/BlogMain/styles'
import {
    archiveListingPublicationListingStyle,
}                                              from '../../Templates/PublicationListings/styles'

const SearchListing = ({item, postType, theme}) => {
    switch (postType) {
        case 'person':
            return (
                <PersonListing
                    name={item.post_title}
                    url={item.slug}
                    headshot={item.headshot_photo}
                    position={composePersonTitle(item)}
                    email={item.email}
                    theme={theme}
                    phone={item.office_location
                        ? item.office_location[0].office_phone
                        : (item.alternate_phone_1 || item.alternate_phone_2)
                    }
                />
            )
        case 'practice-area':
            return (
                <PracticeListing
                    name={item.post_title}
                    url={item.slug}
                    description={item.full_content}
                    theme={theme}
                />
            )
        case 'news-item':
            return (
                <NewsListing
                    title={item.post_title}
                    url={item.slug}
                    date={item.date}
                    type={item.news_item_type}
                    source={item.source}
                    image={item.thumbnail_teaser}
                    theme={theme}
                />
            )
        case 'event':
            return (
                <EventListing
                    title={item.post_title}
                    url={item.slug}
                    date={item.date}
                    displayDate={item.display_date}
                    useDisplayDate={!!item.use_display_date}
                    people={item.people}
                    location={item.where}
                    theme={theme}
                />
            )
        case 'publication':
            return (
                <PublicationListing
                    title={item.post_title}
                    url={item.slug}
                    date={item.date}
                    type={item.publication_type}
                    source={item.publication}
                    byline={item.byline}
                    image={item.thumbnail_teaser}
                    displayDate={item.display_date}
                    useDisplayDate={!!item.use_display_date}
                    theme={theme}
                />
            )
        case 'case-study':
            return (
                <CaseStudyListing
                    title={item.post_title}
                    image={item.thumbnail_teaser}
                    description={item.full_content}
                    url={item.slug}
                    theme={theme}
                />
            )
        case 'blog-post':
            return (
                <BlogPostListing
                    title={item.post_title}
                    image={item.thumbnail_teaser}
                    description={item.full_content}
                    url={item.slug}
                    date={item.date}
                    authors={item.bp_authors}
                    guestAuthors={item.bp_guest_authors}
                    outsideAuthors={item.bp_outside_authors}
                    categories={item.bp_categories}
                    theme={{
                        ...archiveListingPublicationListingStyle(0, item.thumbnail_teaser),
                        ...blogPostListingItemStyle(0)
                    }}
                />
            )
        default:
            return null
    }
}

SearchListing.propTypes = {
    item: PropTypes.object.isRequired,
    postType: PropTypes.string.isRequired,
    theme: PropTypes.object
}

export default SearchListing