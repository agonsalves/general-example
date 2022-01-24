import PropTypes   from 'prop-types'
import React       from 'react'
import Icon        from 'Shared/Icon'
import Li          from 'Shared/Li'
import LinkSwitch  from 'Shared/LinkSwitch'
import Ul          from 'Shared/Ul'
import {circle}    from 'variables/iconLibrary'
import Widget      from '../Widget'
import WidgetTitle from '../WidgetTitle'
import {
    associatedPracticeItemStyle,
    associatedPracticeList,
    associatedPracticeNameStyle
}                  from './styles'

const AssociatedIndustriesWidget = ({industries}) =>
    <Widget>
        <WidgetTitle>Related Industries</WidgetTitle>
        <Ul theme={associatedPracticeList}>
            {industries.map((item, index) =>
                <Li key={index} theme={associatedPracticeItemStyle}>
                    <Icon icon={circle} theme={associatedPracticeItemStyle.icon}/>
                    <LinkSwitch
                        theme={associatedPracticeNameStyle}
                        url={item.slug}
                        children={item.post_title}
                    />
                </Li>
            )}
        </Ul>
    </Widget>

AssociatedIndustriesWidget.propTypes = {
    industries: PropTypes.array.isRequired,
}

export default AssociatedIndustriesWidget