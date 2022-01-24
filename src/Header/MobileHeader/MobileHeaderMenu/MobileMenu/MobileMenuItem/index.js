import PropTypes             from 'prop-types'
import React                 from 'react'
import Li                    from 'Shared/Li'
import MobileMenuLink        from '../MobileMenuLink'
import {mobileMenuItemStyle} from './styles'

const MobileMenuItem = ({post, item, resetSubMenuToggle}) =>
    <Li theme={mobileMenuItemStyle}>
        <MobileMenuLink
            item={item}
            post={post}
            children={item.hasOwnProperty('children')}
            resetSubMenuToggle={resetSubMenuToggle}
        />
    </Li>

MobileMenuItem.propTypes = {
    item: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
    resetSubMenuToggle: PropTypes.bool.isRequired,
}

export default MobileMenuItem