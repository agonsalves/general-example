import PropTypes                               from 'prop-types'
import React                                   from 'react'
import BlogPostListing                         from 'Main/BlogPostListing'
import Div                                     from 'Shared/Div'
import Pagination                              from 'Main/Pagination'
import PostContent                             from 'Main/PostContent'
import {isPaginated}                           from 'utils/flags'
import {archiveListingPublicationListingStyle} from '../PublicationListings/styles'
import {
    blogPostListingItemStyle,
    noPaginationStyle
}                                              from './styles'

const BlogMain = ({post}) =>
    <PostContent post={post}>
        {post.related_posts?.map((item, index) =>
            <BlogPostListing
                key={item.id}
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
                    ...archiveListingPublicationListingStyle(index === 0 && parseInt(post.page) === 1, item.thumbnail_teaser),
                    ...blogPostListingItemStyle(index === 0)
                }}
            />
        )}
        {(isPaginated(post) && (
            <Pagination post={post}/>
        )) || (
            <Div theme={noPaginationStyle}/>
        )}
    </PostContent>

BlogMain.propTypes = {
    post: PropTypes.object.isRequired,
}

export default BlogMain