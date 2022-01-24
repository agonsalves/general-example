import BlogPostListing        from 'Main/BlogPostListing'
import CaseStudyListing       from 'Main/CaseStudyListing'
import EventListing           from 'Main/EventListing'
import NewsListing            from 'Main/NewsListing'
import PublicationListing     from 'Main/PublicationListing'
import PropTypes              from 'prop-types'
import React, {useState}      from 'react'
import {connect}              from 'react-redux'
import Div                    from 'Shared/Div'
import MicrositeSectionButton from '../MicrositeSectionButton'
import {
    micrositePublicationListingStyle,
    micrositeSectionButtonWrapperStyle,
    micrositeSectionListingStyleSwitch
}                             from './styles'

const MicrositeSectionListings = ({section, listingPage, micrositeId, perRow, maxRows, postType, micrositeType, pathname}) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const listingUrl = `${listingPage}?search[post_type]=${postType}&search[${micrositeType}]=${micrositeId}`
    const relatedPosts = section?.related_posts || (section?.featured_people ? section?.featured_people : section?.related_people) || section.case_studies
    const totalPosts = relatedPosts?.length

    return (
        <>
            <Div theme={micrositeSectionListingStyleSwitch(postType)}>
                {relatedPosts && relatedPosts.map((item, index) => {
                    if ((
                            (isExpanded && index < perRow * maxRows)
                            || index < perRow
                    )) {
                        switch (postType) {
                            case 'publication':
                                return (
                                    <PublicationListing
                                        key={index}
                                        title={item.post_title}
                                        url={item.slug}
                                        date={item.date}
                                        type={item.publication_type}
                                        source={item.publication}
                                        byline={item.byline}
                                        image={item.thumbnail_teaser}
                                        displayDate={item.display_date}
                                        useDisplayDate={!!item.use_display_date}
                                        description={item.full_content}
                                        theme={micrositePublicationListingStyle}
                                    />
                                )
                            case 'news-item':
                                return (
                                    <NewsListing
                                        key={index}
                                        title={item.post_title}
                                        url={item.slug}
                                        date={item.date}
                                        type={item.news_item_type}
                                        description={index === 0 ? item.full_content : null}
                                        image={item.thumbnail_teaser}
                                        isFirstItem={index === 0}
                                    />
                                )
                            case 'event':
                                return (
                                    <EventListing
                                        key={item.slug}
                                        title={item.post_title}
                                        url={item.slug}
                                        date={item.date}
                                        location={item.where}
                                    />
                                )
                            case 'case-study':
                                return (
                                    <CaseStudyListing
                                        key={item.canonical}
                                        title={item.post_title}
                                        image={item.thumbnail_teaser}
                                        url={item.slug}
                                    />
                                )
                            case 'blog-post':
                                return (
                                    <BlogPostListing
                                        key={index}
                                        title={item.post_title}
                                        url={item.slug}
                                        date={item.date}
                                        image={item.thumbnail_teaser}
                                        description={item.full_content}
                                        authors={item.bp_authors}
                                        guestAuthors={item.bp_guest_authors}
                                        outsideAuthors={item.bp_outside_authors}
                                        categories={item.bp_categories}
                                    />
                                )

                            default:
                                return (
                                    <PublicationListing
                                        key={item.id}
                                        date={item.date}
                                        title={item.post_title}
                                        url={item.slug}
                                        theme={micrositeSectionListingStyleSwitch(postType).item}
                                    />
                                )
                        }
                    }
                    return null
                })}
            </Div>
            <Div theme={micrositeSectionButtonWrapperStyle}>
                <MicrositeSectionButton
                    perRow={perRow}
                    maxRows={maxRows}
                    isExpanded={isExpanded}
                    totalPosts={totalPosts}
                    setIsExpanded={setIsExpanded}
                    postType={postType}
                    listingUrl={listingUrl}
                    pathname={pathname}
                    listingPage={listingPage}
                />
            </Div>
        </>
    )
}

MicrositeSectionListings.propTypes = {
    section: PropTypes.object.isRequired,
    postType: PropTypes.string.isRequired,
    listingPage: PropTypes.string.isRequired,
    micrositeId: PropTypes.string.isRequired,
    micrositeType: PropTypes.string.isRequired,
    perRow: PropTypes.number.isRequired,
    maxRows: PropTypes.number.isRequired
}

MicrositeSectionListings.defaultProps = {
    perRow: 3,
    maxRows: 3
}

const mapStateToProps = ({site, router}, {postType}) => ({
    listingPage: site.config.listingPages[postType]?.slug || '',
    pathname: router.location.pathname
})

export default connect(mapStateToProps)(MicrositeSectionListings)