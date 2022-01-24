import PropTypes                 from 'prop-types'
import React                     from 'react'
import Div                       from 'Shared/Div'
import LinkSwitch                from 'Shared/LinkSwitch'
import Span                      from 'Shared/Span'
import {intersperse}             from 'utils/helpers'
import slugify                   from 'utils/slugify'
import {blogPostCategoriesStyle} from './styles'

const BlogPostCategories = ({post}) => {
    const currentPostCategories = post.hasOwnProperty('bp_categories') && post.bp_categories

    return (
        <Div theme={blogPostCategoriesStyle}>
            <Span theme={blogPostCategoriesStyle.title}>Categories: </Span>
            {intersperse(currentPostCategories.map(item =>
                <Span key={item.id}>
                    <LinkSwitch
                        key={item.id}
                        url={`${post.parent_blog.slug}/category/${slugify(item.term)}`}
                        children={item.term}
                        theme={blogPostCategoriesStyle.link}
                    />
                    {item.hasOwnProperty('children') && (
                        <>
                            {', '}
                            {intersperse(item.children.map(item =>
                                <LinkSwitch
                                    key={item.id}
                                    url=""
                                    children={item.term}
                                />), ', ')
                            }
                        </>
                    )}
                </Span>
            ), ', ')}
        </Div>
    )
}


BlogPostCategories.propTypes = {
    post: PropTypes.object.isRequired,
    theme: PropTypes.object
}

BlogPostCategories.defaultProps = {
    theme: {}
}

export default BlogPostCategories