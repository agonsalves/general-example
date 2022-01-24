import PropTypes     from 'prop-types'
import React         from 'react'
import Li            from 'Shared/Li'
import LinkSwitch    from 'Shared/LinkSwitch'
import {plural}      from 'utils/helpers'
import PersonContact from '../PersonContact'
import Widget        from '../Widget'
import WidgetTitle   from '../WidgetTitle'
import {
    associatedPeopleWidgetStyle,
    associatedPeopleWidgetTitleStyle,
    associatedPersonStyle
}                    from './styles'

const AssociatedPeopleWidget = ({people}) => (
    <Widget theme={associatedPeopleWidgetStyle}>
        <WidgetTitle theme={associatedPeopleWidgetTitleStyle}>Related {plural('person')}</WidgetTitle>
        {people.map((item, index) =>
            (people.length <= 2 &&
                <PersonContact
                    key={index}
                    image={item.thumbnail_teaser}
                    name={item.post_title}
                    url={item.slug}
                    theme={associatedPersonStyle.contact}
                />
            ) || (
                <Li key={index} theme={associatedPersonStyle.noImageListItem}>
                    <LinkSwitch
                        theme={associatedPersonStyle.noImageName}
                        url={item.slug}
                        children={item.post_title}
                    />
                </Li>
            )
        )}
    </Widget>
)

AssociatedPeopleWidget.propTypes = {
    people: PropTypes.array.isRequired,
}

export default AssociatedPeopleWidget