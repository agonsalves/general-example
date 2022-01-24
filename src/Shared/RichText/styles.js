import {flex}    from 'utils/themer'
import {globals} from 'variables/styles'

export const defaultRichTextStyle = {
    size: [19, .9, 19],
    lineHeight: [32, .9, 32],
    color: globals.colors.textColor,
    font: globals.fonts.body,
    weight: 400,
    webkitTextSizeAdjust: '100%',
    child: [
        {
            selector: 'p',
            letterSpacing: [.4, .7, .4],
            marginBottom: 35,
            child: {
                selector: 'img',
                maxWidth: '100%',
                width: 'auto',
                class: [
                    {
                        name: 'aligncenter',
                        margin: '0 auto'
                    },
                    {
                        name: 'alignright',
                        float: 'right',
                        marginLeft: 20,
                        marginTop: 20,
                        marginBottom: 20
                    },
                    {
                        name: 'alignleft',
                        float: 'left',
                        marginRight: 20,
                        marginTop: 20,
                        marginBottom: 20
                    }
                ]
            }
        },
        {
            selector: 'a',
            textDecoration: 'underline'
        },
        {
            selector: 'strong',
            weight: 600
        },
        {
            selector: 'em',
            fontStyle: 'italic'
        },
        {
            selector: 'sup',
            verticalAlign: 'super',
            fontSize: 'smaller',
            ie: {
                fontSize: 'smaller'
            }
        },
        {
            selector: 'iframe',
            mobile: {
                width: '100% !important',
                height: '56.25vw'
            }
        },
        {
            selector: 'blockquote',
            child: {
                selector: 'p',
                firstChild: {
                    marginBottom: 35
                }
            }
        },
        {
            selector: '.embed-video',
            display: flex,
            marginTop: 30,
            marginBottom: 30,
            child: {
                selector: 'iframe',
                maxWidth: '100%'
            }
        }
    ],
}

export const defaultFirstParagraphLargeStyle = {
    color: globals.colors.textColor,
    child: [
        ...defaultRichTextStyle.child,
        {
            selector: 'p:first-child',
            size: [28, .7, 18],
            color: globals.colors.headingColor,
            lineHeight: [40, .7, 30],
            marginBottom: [28, .7, 24.5],
            weight: 400,
            mobile: {
                weight: 300
            }
        }
    ]
}