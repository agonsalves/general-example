import PropTypes   from 'prop-types'
import React       from 'react'
import Li          from 'Shared/Li'
import LinkSwitch  from 'Shared/LinkSwitch'
import Ul          from 'Shared/Ul'
import {plural}    from 'utils/helpers'
import Widget      from '../Widget'
import WidgetTitle from '../WidgetTitle'
import {
    associatedPracticeItemStyle,
    associatedPracticeList,
    associatedPracticeNameStyle,
    associatedPracticesStyle,
    associatedPracticeTitleStyle
}                  from './styles'

const AssociatedPracticesWidget = ({practices}) =>
    <Widget theme={associatedPracticesStyle}>
        <WidgetTitle theme={associatedPracticeTitleStyle}>Related {plural('practice-area')}</WidgetTitle>
        <Ul theme={associatedPracticeList}>
            {practices.map((item, index) =>
                <Li key={index} theme={associatedPracticeItemStyle}>
                    <LinkSwitch
                        theme={associatedPracticeNameStyle}
                        url={item.slug}
                        children={item.post_title}
                    />
                </Li>
            )}
        </Ul>
    </Widget>

AssociatedPracticesWidget.propTypes = {
    practices: PropTypes.array.isRequired,
}

export default AssociatedPracticesWidget