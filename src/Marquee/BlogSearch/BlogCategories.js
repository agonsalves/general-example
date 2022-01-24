import PropTypes                from 'prop-types'
import React                    from 'react'
import Div                      from 'Shared/Div'
import H3                       from 'Shared/H3'
import {blogSidebarWidgetStyle} from 'Sidebars/Widget/styles'
import {widgetTitleStyle}       from 'Sidebars/WidgetTitle/styles'
import LinkSwitch               from 'Shared/LinkSwitch'

const BlogCategories = ({categories, theme, post}) =>
    <Div theme={{...blogSidebarWidgetStyle, ...theme}}>
        <Div theme={theme.blogCategories}>
            <H3 theme={{...widgetTitleStyle, ...theme.title}}>
                Filter by Category:
            </H3>
            {categories.map((c, i) => (
                <LinkSwitch
                    key={i}
                    url={c.slug}
                    theme={theme.category}
                    className={c.slug === post.slug ? 'active' : ''}
                >
                    {c.name}
                </LinkSwitch>
            ))}
        </Div>
    </Div>

BlogCategories.propTypes = {
    categories: PropTypes.array
}

BlogCategories.defaultProps = {
    theme: {},
}


export default BlogCategories