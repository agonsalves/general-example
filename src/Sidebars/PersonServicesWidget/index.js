import PropTypes                  from 'prop-types'
import React, {memo}              from 'react'
import Icon                       from 'Shared/Icon'
import Li                         from 'Shared/Li'
import LinkSwitch                 from 'Shared/LinkSwitch'
import Ul                         from 'Shared/Ul'
import {circle}                   from 'variables/iconLibrary'
import {
    associatedPracticeItemStyle,
    associatedPracticeList,
    associatedPracticeNameStyle
}                                 from '../AssociatedPracticesWidget/styles'
import Widget                     from '../Widget'
import WidgetTitle                from '../WidgetTitle'
import {personServiceWidgetStyle} from './styles'

const Index = memo(({post}) =>
    <Widget theme={personServiceWidgetStyle}>
        <WidgetTitle theme={personServiceWidgetStyle.title}>Services</WidgetTitle>
        <Ul theme={associatedPracticeList}>
            {post.practice_area?.map((item, index) =>
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
)

Index.displayName = 'PersonServicesWidget'

Index.propTypes = {
    post: PropTypes.object.isRequired,
}

export default Index