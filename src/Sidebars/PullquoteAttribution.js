import PropTypes from 'prop-types'
import React     from 'react'
import Div       from 'Shared/Div'

const PullquoteAttribution = ({attribution, attributionTitle, theme}) =>
    <Div theme={{...theme.attributionWrapper}}>
        {(attribution || attributionTitle) && (
            <Div theme={{...theme.attributionQuote}}/>
        )}
        <Div theme={{...theme.attributionWrapper.inner}}>
            {attribution && (
                <Div theme={{...theme.attribution}}>
                    {attribution}
                </Div>
            )}
            {attributionTitle && (
                <Div theme={{...theme.attributionTitle}}>
                    {attributionTitle}
                </Div>
            )}
        </Div>
    </Div>

PullquoteAttribution.propTypes = {
    attribution: PropTypes.string,
    attributionTitle: PropTypes.string,
    theme: PropTypes.object
}

export default PullquoteAttribution