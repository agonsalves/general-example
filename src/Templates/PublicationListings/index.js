import PropTypes                               from 'prop-types'
import React                                   from 'react'
import {archiveListingStyle}                   from 'Main/ArchiveListingWrapper/styles'
import PublicationListing                      from 'Main/PublicationListing'
import Pagination                              from 'Main/Pagination'
import PostContent                             from 'Main/PostContent'
import {isPaginated}                           from 'utils/flags'
import {archiveListingPublicationListingStyle} from './styles'

const PublicationListings = ({post}) =>
    <PostContent post={post}>
        {post.related_posts?.map((item, index) =>
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
                theme={archiveListingPublicationListingStyle(index === 0 && parseInt(post.page) === 1, item.thumbnail_teaser)}
            />
        )}
        {isPaginated(post) && (
            <Pagination post={post} theme={archiveListingStyle.pagination}/>
        )}
    </PostContent>

PublicationListings.propTypes = {
    post: PropTypes.object.isRequired
}

export default PublicationListings