import React, {memo}    from 'react'
import Div              from 'Shared/Div'
import SiteLogo         from '../SiteLogo'
import SkipNavigation   from '../SkipNavigation'
import MobileHeaderMenu from './MobileHeaderMenu'
import {
    mobileHeaderStyle,
    mobileLogoStyle
}                       from './styles'

const MobileHeader = memo(({post}) => (
    <Div as="header" className="header" theme={mobileHeaderStyle}>
        <Div theme={mobileHeaderStyle.inner}>
            <SiteLogo theme={mobileLogoStyle(post)}/>
            <MobileHeaderMenu/>
            <SkipNavigation/>
        </Div>
    </Div>
))

MobileHeader.displayName = 'MobileHeader'

export default MobileHeader