import PropTypes     from 'prop-types'
import React, {memo} from 'react'
import Div           from 'Shared/Div'
import {parseHtml}   from 'utils/parseHtml'
import {
    defaultFirstParagraphLargeStyle,
    defaultRichTextStyle
}                    from './styles'

const RichText = memo(({isFirstParagraphLarge, theme, children, ...props}) => children
    ? <Div
        theme={{
            ...defaultRichTextStyle,
            ...isFirstParagraphLarge ? defaultFirstParagraphLargeStyle : {},
            ...theme
        }}
        {...props}
    >
        {parseHtml(children)}
    </Div>
    : null
)

RichText.displayName = 'RichText'

RichText.propTypes = {
    children: PropTypes.string,
    theme: PropTypes.object,
    isFirstParagraphLarge: PropTypes.bool
}

RichText.defaultProps = {
    children: '',
    theme: {},
    isFirstParagraphLarge: false
}

export default RichText