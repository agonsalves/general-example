import idx                 from 'idx'
import React               from 'react'
import ReactHtmlParser     from 'react-html-parser'
import Blockquote          from '../Shared/Blockquote'
import BulletedList        from '../Shared/BulletedList'
import H3                  from '../Shared/H3'
import Img                 from '../Shared/Img'
import NumberedList        from '../Shared/NumberedList'
import LinkSwitch          from '../Shared/LinkSwitch'
import NoCookiePlaceholder from '../Shared/NoCookiePlaceholder'
import {configureStore}    from '../redux/store'
import {cssToReact}        from './cssToReactStyle'

/**
 * Converts a string with HTML (typically produced by a richtext editor from the CMS) into React Components.
 *
 * The parseElement function applies specific React components to various tags, and filters out bad HTML
 * It will also strip leading spaces from text - unless the text follows an inline tag.
 *
 * https://www.npmjs.com/package/html-react-parser
 *
 * @param {string} html
 * @returns {Array}
 */
export const parseHtml = html => {
    const {site} = configureStore.getState()
    const {cookieConsent} = site
    const {uploadsDomain} = site.config
    let noticeShown = false

    const inlineTags = ['a', 'span', 'sub', 'sup', 'b', 'strong', 'i', 'em', 'img']

    const parseElement = item => {
        if (item.name) {
            let newAttribs = attribConverter(item.attribs)
            switch (item.name) {
                case 'ul':
                    if (idx(item, _ => _.parent.name === 'li'))
                        return <ul
                            key={Math.random()}
                            children={item.children.map(item => parseElement(item))}
                        />

                    return <BulletedList
                        key={Math.random()}
                        children={item.children.map(item => parseElement(item))}
                        {...newAttribs}
                    />

                case 'ol':
                    if (idx(item, _ => _.parent.name === 'li'))
                        return <ol
                            key={Math.random()}
                            children={item.children.map(item => parseElement(item))}
                        />

                    return <NumberedList
                        key={Math.random()}
                        children={item.children.map(item => parseElement(item))}
                        {...newAttribs}
                    />

                case 'a':
                    return <LinkSwitch
                        key={Math.random()}
                        url={idx(item, _ => _.attribs.href)}
                        children={item.children.map(item => parseElement(item))}
                        style={item.attribs.style && cssToReact(item.attribs.style)}
                        {...newAttribs}
                    />

                case 'h3':
                    return <H3
                        key={Math.random()}
                        children={item.children.map(item => parseElement(item))}
                        {...newAttribs}
                        style={item.attribs.style && cssToReact(item.attribs.style)}
                    />

                case 'blockquote':
                    return <Blockquote
                        key={Math.random()}
                        children={item.children.map(item => parseElement(item))}
                        {...newAttribs}
                        style={item.attribs.style && cssToReact(item.attribs.style)}
                    />

                case 'img':
                    if (!cookieConsent && !item.attribs.src.includes(uploadsDomain)) {
                        if (!noticeShown) {
                            noticeShown = true
                            return <NoCookiePlaceholder key={Math.random()}/>
                        }

                        return null
                    }

                    return <Img
                        key={Math.random()}
                        {...newAttribs}
                        alt={item.attribs.alt || ''}
                        style={item.attribs.style && cssToReact(item.attribs.style)}
                    />

                case 'table':
                case 'tbody':
                case 'tr':
                case 'colgroup':
                    return <item.name
                        key={Math.random()}
                        children={item.children.map(item =>
                            item.type === 'tag' ? parseElement(item) : null
                        )}
                        {...newAttribs}
                        style={item.attribs.style && cssToReact(item.attribs.style)}
                    />

                case 'br':
                case 'hr':
                case 'col':
                    return <item.name key={Math.random()}/>

                case 'iframe':
                case 'embed':
                case 'script':
                case 'video':
                    if (!cookieConsent)
                        if (!noticeShown) {
                            noticeShown = true
                            return <NoCookiePlaceholder key={Math.random()}/>
                        } else
                            return null
                //noinspection FallthroughInSwitchStatementJS

                default:
                    return !!item.children &&
                        <item.name
                            key={Math.random()}
                            children={item.children.map(item => parseElement(item))}
                            style={item.attribs.style && cssToReact(item.attribs.style)}
                            {...newAttribs}
                        />
            }
        }

        if (idx(item, _ => inlineTags.includes(_.prev.name)))
            return item.data

        return item.data.replace(/^\s/g, '')
    }

    const parserOptions = {
        transform: node => parseElement(node),
    }

    return ReactHtmlParser(html.trim(), parserOptions)
}

/**
 * This object maps standard html tag attributes to their React prop equivalent.
 * The value should be false if the attribute should not carry over.
 *
 * Note: style is false because it is being constructed manually.
 */
const attribFilter = {
    allowfullscreen: 'allowFullScreen',
    frameborder: 'frameBorder',
    marginheight: 'marginHeight',
    marginwidth: 'marginWidth',
    class: 'className',
    cellpadding: 'cellPadding',
    cellspacing: 'cellSpacing',
    colspan: 'colSpan',
    rowspan: 'rowSpan',
    style: false
}

/**
 * Converts html attributes to React props.
 *
 * @param {object} attributes
 */
const attribConverter = attributes => {
    const newAttributes = {...attributes}
    Object.keys(attribFilter).forEach(key => {
        if (attribFilter[key] && newAttributes[key])
            newAttributes[attribFilter[key]] = newAttributes[key]

        delete newAttributes[key]
    })

    return newAttributes
}