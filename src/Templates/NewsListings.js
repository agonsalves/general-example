import PropTypes              from 'prop-types'
import React                  from 'react'
import {archiveListingStyle}  from '../Main/ArchiveListingWrapper/styles'
import NewsListing            from '../Main/NewsListing'
import {newsListingItemStyle} from '../Main/NewsListing/styles'
import Pagination             from '../Main/Pagination'
import PostContent            from '../Main/PostContent'
import {isPaginated}          from '../utils/flags'

const NewsListings = ({post}) =>
    <PostContent post={post}>
        {post.related_posts?.map((item, index) =>
            <NewsListing
                key={index}
                title={item.post_title}
                url={item.slug}
                date={item.date}
                type={item.news_item_type}
                source={item.source}
                image={item.thumbnail_teaser}
                description={index === 0 ? item.full_content : null}
                isFirstItem={index === 0 && parseInt(post.page) === 1}
                theme={newsListingItemStyle}
            />
        )}
        {isPaginated(post) && (
            <Pagination post={post} theme={archiveListingStyle.pagination}/>
        )}
    </PostContent>


NewsListings.propTypes = {
    post: PropTypes.object.isRequired,
}

export default NewsListings