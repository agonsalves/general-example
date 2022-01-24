import React, {memo}                 from 'react'
import Div                           from 'Shared/Div'
import {headerBackgroundStyleSwitch} from './styles'

const HeaderBackground = memo(({post}) =>
    <Div
        id="header-background"
        theme={headerBackgroundStyleSwitch(post)}
    />
)

HeaderBackground.displayName = 'HeaderBackground'

export default HeaderBackground