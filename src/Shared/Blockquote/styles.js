import {defaultRichTextStyle} from 'Shared/RichText/styles'

export const blockQuoteStyle = {
    fontStyle: 'italic',
    child: [
        {
            selector: 'p:first-child',
            ...defaultRichTextStyle,
            letterSpacing: [.1, .7, .1],
            weight: 400
        }
    ],
    mobile: {
        padding: '0 60px'
    },
    desktop: {
        paddingLeft: 72,
        paddingRight: 72,
        child: {
            selector: 'p',
            marginBottom: 23,
            marginTop: 25,
        }
    }

}