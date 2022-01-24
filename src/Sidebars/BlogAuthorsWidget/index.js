import PropTypes                from 'prop-types'
import React                    from 'react'
import PersonContact            from '../PersonContact'
import Widget                   from '../Widget'
import {blogSidebarWidgetStyle} from '../Widget/styles'
import WidgetTitle              from '../WidgetTitle'

const BlogAuthorsWidget = ({blogAuthors, widgetTitle}) =>
    <Widget theme={blogSidebarWidgetStyle}>
        <WidgetTitle theme={blogSidebarWidgetStyle.title}>{widgetTitle}</WidgetTitle>
        {blogAuthors.map((item, index) => (
            <PersonContact
                key={index}
                image={item.thumbnail_teaser}
                name={item.post_title}
                url={item.slug}
            />
        ))}
    </Widget>

BlogAuthorsWidget.propTypes = {
    blogAuthors: PropTypes.array.isRequired,
    widgetTitle: PropTypes.string,
}

BlogAuthorsWidget.defaultProps = {
    widgetTitle: 'Contributing Authors',
}

export default BlogAuthorsWidget