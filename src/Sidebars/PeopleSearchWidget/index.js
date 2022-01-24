import PropTypes                 from 'prop-types'
import React                     from 'react'
import PeopleSearchForm          from 'Shared/PeopleSearchForm'
import Widget                    from '../Widget'
import {peopleSearchWidgetStyle} from './styles'

const PeopleSearchWidget = ({theme, post}) =>
    <Widget theme={theme}>
        <PeopleSearchForm
            panelName={'people-search'}
            isAdvanced={true}
            theme={{...peopleSearchWidgetStyle, ...theme.formWrapper}}
            query={post.search?.query}
        />
    </Widget>

PeopleSearchWidget.propTypes = {
    theme: PropTypes.object,
    post: PropTypes.object.isRequired
}

PeopleSearchWidget.defaultProps = {
    theme: {
        field: {
            icon: {},
            fieldOuter: {}
        },
        button: {},
        formWrapper: {}
    }
}

export default PeopleSearchWidget