import PropTypes                from 'prop-types'
import React                    from 'react'
import RichText                 from 'Shared/RichText'
import Widget                   from '../Widget'
import {blogSidebarWidgetStyle} from '../Widget/styles'

const BlogDescriptionWidget = ({blogDescription}) =>
    <Widget theme={blogSidebarWidgetStyle}>
        <RichText theme={blogSidebarWidgetStyle.description}>{blogDescription}</RichText>
    </Widget>


BlogDescriptionWidget.propTypes = {
    blogDescription: PropTypes.string.isRequired,
}

export default BlogDescriptionWidget