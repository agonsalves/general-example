import PropTypes                from 'prop-types'
import React                    from 'react'
import {isString}               from 'utils/helpers'
import PersonContact            from '../PersonContact'
import Widget                   from '../Widget'
import WidgetTitle              from '../WidgetTitle'
import {keyContactsWidgetStyle} from './styles'

const KeyContactsWidget = ({title, contacts, theme}) =>
    <Widget theme={{...keyContactsWidgetStyle, ...theme}}>
        <WidgetTitle theme={{...keyContactsWidgetStyle.heading, ...theme.heading}}>
            {title || 'Key Contacts'}
        </WidgetTitle>
        {contacts?.map((contact, index) =>
            <PersonContact
                key={index}
                name={contact.post_title || contact.name}
                image={contact.thumbnail_teaser || contact.headshot || (contacts.some(c => !!c.headshot) ? {} : undefined)}
                url={contact.slug || contact.url}
                phone={contact.phone}
                email={contact.email}
                position={contact.position?.[0].term || (isString(contact.position) && contact.position)}
            />
        )}
    </Widget>

KeyContactsWidget.propTypes = {
    title: PropTypes.string,
    contacts: PropTypes.array.isRequired,
    theme: PropTypes.object,
}

KeyContactsWidget.defaultProps = {
    theme: {
        heading: {},
        contact: {},
        imageWrapper: {},
        image: {},
        name: {},
        title: {},
        phone: {},
        email: {}
    },
}

export default KeyContactsWidget