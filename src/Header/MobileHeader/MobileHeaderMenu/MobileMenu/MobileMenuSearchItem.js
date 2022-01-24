import PropTypes                 from 'prop-types'
import React                     from 'react'
import Icon                      from '../../../../Shared/Icon'
import Li                        from '../../../../Shared/Li'
import Span                      from '../../../../Shared/Span'
import MobileSearch              from './MobileSearch'
import {
    minus,
    plus
}                                from '../../../../variables/iconLibrary'
import {
    mobileMenuLinkStyle
}                                from './styles'
import {mobileMenuItemStyle}     from './MobileMenuItem/styles'
import {mobileMenuItemIconStyle} from './MobileMenuLink/styles'

const MobileMenuSearchItem = ({setSearchToggle, searchToggle}) =>
    <Li theme={mobileMenuItemStyle}>
        <Span
            theme={mobileMenuLinkStyle}
            onClick={(e) => {
                setSearchToggle(flag => !flag)
                e.stopPropagation()
            }}
        >
            Search
            <Icon
                theme={mobileMenuItemIconStyle}
                icon={!searchToggle ? plus : minus}
            />
        </Span>
        <MobileSearch isOpen={searchToggle}/>
    </Li>


MobileMenuSearchItem.propTypes = {
    searchToggle: PropTypes.bool.isRequired,
    setSearchToggle: PropTypes.func.isRequired
}


export default MobileMenuSearchItem