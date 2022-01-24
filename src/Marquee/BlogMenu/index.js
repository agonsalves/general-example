import React      from 'react'
import Div        from 'Shared/Div'
import LinkSwitch from 'Shared/LinkSwitch'
import {
    blogMicrositeMenuItemStyle,
    blogMicrositeMenuWrapperStyle
}                 from './styles'

const BlogMenu = ({pages, blogSlug, postSlug}) => {
    return (
        <Div theme={blogMicrositeMenuWrapperStyle}>
            <LinkSwitch
                url={blogSlug}
                children={'Blog Posts'}
                theme={blogMicrositeMenuItemStyle}
                className={blogSlug === postSlug ? 'active' : ''}
            />
            {pages?.map((page) => page.page_template !== 'blog_subscribe' && (
                <LinkSwitch
                    url={page.slug}
                    children={page.post_title}
                    key={page.slug}
                    theme={blogMicrositeMenuItemStyle}
                    className={page.slug === postSlug ? 'active' : ''}
                />
            ))}
        </Div>
    )
}

export default BlogMenu