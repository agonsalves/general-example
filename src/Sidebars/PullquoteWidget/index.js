import PropTypes              from 'prop-types'
import React                  from 'react'
import Div                    from 'Shared/Div'
import RichText               from 'Shared/RichText'
import PullquoteAttribution   from '../PullquoteAttribution'
import Widget                 from '../Widget'
import {pullquoteWidgetStyle} from './styles'

const PullquoteWidget = ({quote, attribution, attributionTitle}) =>
    <Widget theme={pullquoteWidgetStyle}>
        <Div>
            {quote && (
                <Div theme={pullquoteWidgetStyle.quoteIcon}>
                    <RichText theme={pullquoteWidgetStyle.quote}>
                        {quote}
                    </RichText>
                </Div>
            )}
            <PullquoteAttribution
                attribution={attribution}
                attributionTitle={attributionTitle}
                theme={pullquoteWidgetStyle}
            />
        </Div>
    </Widget>

PullquoteWidget.propTypes = {
    quote: PropTypes.string.isRequired,
    attribution: PropTypes.string
}

export default PullquoteWidget