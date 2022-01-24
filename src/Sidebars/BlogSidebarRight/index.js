import PropTypes                       from 'prop-types'
import React                           from 'react'
import Div                             from 'Shared/Div'
import {isBlogPost}                    from 'utils/flags'
import AssociatedPeopleWidget          from '../AssociatedPeopleWidget'
import BlogAuthorsWidget               from '../BlogAuthorsWidget'
import BlogDescriptionWidget           from '../BlogDescriptionWidget'
import BlogFollowWidget                from '../BlogFollowWidget'
import {blogSidebarWidgetWrapperStyle} from './styles'

const BlogSidebarRight = ({post}) => {
    const {
        authors,
        blog_contributing_authors_heading,
        description,
        blog_linkedin_link,
        blog_email_link,
        blog_twitter_link
    } = post.parentPost

    const {template} = post
    return (
        <Div theme={blogSidebarWidgetWrapperStyle}>
            {(!isBlogPost(post) && (
                <>
                    {description && (
                        <BlogDescriptionWidget
                            blogDescription={description}
                        />
                    )}
                    <BlogFollowWidget
                        linkedinLink={blog_linkedin_link}
                        emailLink={blog_email_link}
                        twitterLink={blog_twitter_link}
                        feedLink={post.parentPost.slug + '/feed.xml'}
                    />
                    {(authors && (template === 'blogs' || template === 'blogs-search')) && (
                        <BlogAuthorsWidget
                            blogAuthors={authors}
                            widgetTitle={blog_contributing_authors_heading}
                        />
                    )}
                </>
            )) || (
                <AssociatedPeopleWidget people={post.bp_guest_authors}/>
            )}
        </Div>
    )
}

BlogSidebarRight.propTypes = {
    post: PropTypes.object.isRequired
}

BlogSidebarRight.defaultProps = {
    theme: {}
}

export default BlogSidebarRight