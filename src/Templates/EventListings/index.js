import Div                   from 'Shared/Div'
import {archiveListingStyle} from 'Main/ArchiveListingWrapper/styles'
import EventListing          from 'Main/EventListing'
import Pagination            from 'Main/Pagination'
import PostContent           from 'Main/PostContent'
import PropTypes             from 'prop-types'
import React                 from 'react'
import RichText              from 'Shared/RichText'
import {isPaginated}         from 'utils/flags'
import {
    archiveListingEventListingStyle,
    eventListingsHeadingStyle,
    eventListingsWrapperStyle
}                            from './styles'

const EventListings = ({post}) =>
    <PostContent post={post}>
        {post.full_content && (
            <RichText isFirstParagraphLarge theme={eventListingsHeadingStyle}>{post.full_content}</RichText>
        )}
        <Div theme={eventListingsWrapperStyle}>
            {post.related_posts.map(item =>
                <EventListing
                    key={item.slug}
                    title={item.post_title}
                    url={item.slug}
                    date={item.date}
                    displayDate={item.display_date}
                    useDisplayDate={!!item.use_display_date}
                    people={item.people}
                    location={item.where}
                    otherSpeakers={item.other_speakers}
                    theme={archiveListingEventListingStyle}
                />
            )}
        </Div>
        {isPaginated(post) && (
            <Pagination post={post} theme={archiveListingStyle.pagination}/>
        )}
    </PostContent>

EventListings.propTypes = {
    post: PropTypes.object.isRequired,
}

export default EventListings