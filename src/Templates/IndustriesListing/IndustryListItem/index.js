import PropTypes                  from 'prop-types'
import React                      from 'react'
import Img                        from 'Shared/Img'
import LinkSwitch                 from 'Shared/LinkSwitch'
import Span                       from 'Shared/Span'
import {industriesMenuPanelStyle} from './styles'

const IndustryListingItem = ({industry, post}) =>
    <LinkSwitch
        url={industry.slug}
        theme={industriesMenuPanelStyle.industry(post.post_title === industry.post_title)}
    >
        <Img theme={industriesMenuPanelStyle.industryThumb} image={industry.thumbnail_teaser}/>
        <Span theme={industriesMenuPanelStyle.industryTitle}>{industry.post_title}</Span>
    </LinkSwitch>

IndustryListingItem.propTypes = {
    industry: PropTypes.object.isRequired
}

export default IndustryListingItem
