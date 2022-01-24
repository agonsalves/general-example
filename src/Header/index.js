import PropTypes      from 'prop-types'
import React, {memo}  from 'react'
import {useSelector}  from 'react-redux'
import Div            from '../Shared/Div'
import SiteLogo       from './SiteLogo'
import SkipNavigation from './SkipNavigation'
import HeaderMenu     from './HeaderMenu'
import {mobileFlag}   from '../redux/selectors'
import MobileHeader   from './MobileHeader'
import {
    headerContainerInnerStyle,
    headerContainerStyle
}                     from './styles'

const Header = memo(({theme, post}) => {
    const isMobile = useSelector(mobileFlag)

    return (
        <Div theme={{...theme, ...headerContainerStyle(post)}} className="header-container" as="header" data-nosnippet>
            <Div theme={headerContainerInnerStyle}>
                <SkipNavigation/>
                <SiteLogo/>
                {(!isMobile && (
                    <HeaderMenu post={post} />
                )) || (
                    <MobileHeader post={post} />
                )}
            </Div>
        </Div>
    )
})

Header.displayName = 'Header'

Header.propTypes = {
    theme: PropTypes.object,
    post: PropTypes.object
}

export default Header