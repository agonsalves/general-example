import PropTypes                 from 'prop-types'
import React                     from 'react'
import AssociatedPracticesWidget from './AssociatedPracticesWidget'
import CallToActionWidget        from './CallToActionWidget'
import FeaturedContentWidget     from './FeaturedContentWidget'
import ImageWidget               from './ImageWidget'
import KeyContactsWidget         from './KeyContactsWidget'
import PullquoteImageWidget      from './PullquoteImageWidget'
import PullquoteWidget           from './PullquoteWidget'
import SpacerWidget              from './SpacerWidget'
import VideoWidget               from './VideoWidget'

const WidgetSwitch = ({widget}) => {
    switch (widget.template.type) {
        case 'call_to_action':
            return (
                <CallToActionWidget
                    title={widget.widget_title}
                    text={widget.widget_message}
                    url={widget.widget_link_url}
                    buttonTitle={widget.widget_link_description}
                    buttonLabel={widget.widget_link_label}
                    image={widget.widget_cta_image}
                />
            )
        case 'image':
            return <ImageWidget image={widget.widget_image} caption={widget.widget_caption}/>
        case 'key_contacts':
            return (
                <KeyContactsWidget
                    title={widget.widget_title}
                    contacts={widget.widget_key_contacts || widget.widget_key_contacts_manual}
                />
            )
        case 'pullquote':
            return (
                <PullquoteWidget
                    quote={widget.widget_quote}
                    attribution={widget.widget_attribution}
                    attributionTitle={widget.widget_attribution_title}
                />
            )
        case 'pullquote_with_image':
            return (
                <PullquoteImageWidget
                    quote={widget.widget_quote}
                    attribution={widget.widget_attribution}
                    attributionTitle={widget.widget_attribution_title}
                    image={widget.widget_pullquote_image}
                />
            )
        case 'spacer':
            return <SpacerWidget height={parseInt(widget.widget_height)}/>
        case 'video':
            return (
                <VideoWidget
                    videoUrl={widget.widget_video_url}
                    image={widget.widget_video_image}
                    caption={widget.widget_caption}
                    hasPlayButton={!!widget.widget_show_play}
                />
            )
        case 'related_content':
            return <FeaturedContentWidget widget={widget}/>
        case 'related_practices':
            return <AssociatedPracticesWidget practices={widget.widget_related_practices}/>
        default:
            return null
    }
}

WidgetSwitch.propTypes = {
    widget: PropTypes.object.isRequired,
}

export default WidgetSwitch
