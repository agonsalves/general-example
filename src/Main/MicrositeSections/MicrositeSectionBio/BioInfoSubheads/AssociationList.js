import PropTypes               from 'prop-types'
import React                   from 'react'
import BulletedList            from 'Shared/BulletedList'
import LinkSwitch              from 'Shared/LinkSwitch'
import {associationsListStyle} from './styles'

const AssociationList = ({children}) =>
    <BulletedList>
        {children.map(item =>
            <li key={item.id}>
                <LinkSwitch
                    url={item.slug}
                    theme={associationsListStyle}
                    children={item.post_title}
                />
            </li>
        )}
    </BulletedList>


AssociationList.propTypes = {
    theme: PropTypes.object
}

export default AssociationList