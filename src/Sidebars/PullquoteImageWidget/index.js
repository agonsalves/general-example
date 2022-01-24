import PropTypes                   from 'prop-types'
import React                       from 'react'
import Div                         from 'Shared/Div'
import Img                         from 'Shared/Img'
import RichText                    from 'Shared/RichText'
import PullquoteAttribution        from '../PullquoteAttribution'
import Widget                      from '../Widget'
import {pullquoteImageWidgetStyle} from './styles'

const PullquoteImageWidget = ({quote, attribution, attributionTitle, image}) =>
    <Widget theme={pullquoteImageWidgetStyle}>
        {image && (
            <Div theme={pullquoteImageWidgetStyle.quoteIcon}>
                <Img
                    theme={pullquoteImageWidgetStyle.image}
                    image={image}
                />
            </Div>
        )}
        <Div>
            {quote && (
                <RichText theme={pullquoteImageWidgetStyle.quote}>
                    {quote}
                </RichText>
            )}
            {(attributionTitle || attribution) && (
                <PullquoteAttribution
                    attribution={attribution}
                    attributionTitle={attributionTitle}
                    theme={pullquoteImageWidgetStyle}
                />
            )}
        </Div>
    </Widget>

PullquoteImageWidget.propTypes = {
    image: PropTypes.object,
    quote: PropTypes.string,
    attribution: PropTypes.string
}

PullquoteImageWidget.defaultProps = {
    theme: {}
}

export default PullquoteImageWidget