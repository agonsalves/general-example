import PropTypes                 from 'prop-types'
import React, {memo}             from 'react'
import Div                       from 'Shared/Div'
import H3                        from 'Shared/H3'
import Icon                      from 'Shared/Icon'
import Img                       from 'Shared/Img'
import LinkSwitch                from 'Shared/LinkSwitch'
import Span                      from 'Shared/Span'
import {excerpt}                 from 'utils/helpers'
import {longArrowAltRight}       from 'variables/iconLibrary'
import {firmHighlightsItemStyle} from './styles'

const HighlightItem = memo(({label, description, url, image, title, theme, className}) =>
    <LinkSwitch url={url} theme={firmHighlightsItemStyle} className={className}>
        <Div theme={theme.postType}>
            {label}
        </Div>
        {image && (
            <Div theme={firmHighlightsItemStyle.imageWrapper}>
                <Img image={image} theme={firmHighlightsItemStyle.image}/>
            </Div>
        )}
        <H3 theme={firmHighlightsItemStyle.postTitle}>{title}</H3>
        {!image && description && (
            <Div theme={firmHighlightsItemStyle.excerpt} className={'highlight-excerpt'}>{excerpt(description)}</Div>
        )}
        {url && (
            <Div theme={firmHighlightsItemStyle.button}>
                <Span theme={firmHighlightsItemStyle.buttonText}>Read More</Span>
                <Icon theme={firmHighlightsItemStyle.buttonIcon} icon={longArrowAltRight}/>
            </Div>
        )}
    </LinkSwitch>
)

HighlightItem.displayName = 'HighlightItem'

HighlightItem.propTypes = {
    title: PropTypes.string.isRequired,
    label: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string.isRequired,
    image: PropTypes.object,
    className: PropTypes.string,
    theme: PropTypes.object,
}

HighlightItem.defaultProps = {
    theme: {},
}

export default HighlightItem