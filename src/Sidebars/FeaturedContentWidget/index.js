import PropTypes                    from 'prop-types'
import React, {memo}                from 'react'
import ButtonIconText               from 'Shared/ButtonIconText'
import Div                          from 'Shared/Div'
import Img                          from 'Shared/Img'
import LinkSwitch                   from 'Shared/LinkSwitch'
import {singular}                   from 'utils/helpers'
import {longArrowAltRight}          from 'variables/iconLibrary'
import {featuredContentWidgetStyle} from '../CallToActionWidget/styles'
import Widget                       from '../Widget'
import WidgetSwitch                 from '../WidgetSwitch'
import WidgetTitle                  from '../WidgetTitle'

const FeaturedContentWidget = memo(({widget}) => {
    if (widget.related_posts && widget.related_posts.length > 0) {
        let post = widget.related_posts[Math.floor(Math.random() * widget.related_posts.length)]

        if (post.post_type === 'widget')
            return <WidgetSwitch widget={post}/>

        return (
            <Widget theme={featuredContentWidgetStyle}>
                <WidgetTitle
                    theme={featuredContentWidgetStyle.heading}>Featured {singular(post.post_type)}</WidgetTitle>
                <LinkSwitch url={post.slug}>
                    {post.thumbnail_teaser && (
                        <Img image={post.thumbnail_teaser} theme={featuredContentWidgetStyle.image}/>
                    )}
                    <Div theme={featuredContentWidgetStyle.title}>{post.post_title}</Div>
                </LinkSwitch>
                <ButtonIconText
                    url={post.slug}
                    label="Read More"
                    theme={featuredContentWidgetStyle.button}
                    title={`Read More`}
                    icon={longArrowAltRight}
                />
            </Widget>
        )
    }

    return null
})

FeaturedContentWidget.displayName = 'FeaturedContentWidget'

FeaturedContentWidget.propTypes = {
    widget: PropTypes.object.isRequired,
    theme: PropTypes.object
}

FeaturedContentWidget.defaultProps = {
    theme: {}
}

export default FeaturedContentWidget