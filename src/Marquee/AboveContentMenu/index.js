import React                            from 'react'
import {aboutMicrositeMenuItemStyle}    from '../MobileAboutMenu/styles'
import Div                              from 'Shared/Div'
import LinkSwitch                       from 'Shared/LinkSwitch'
import {isNavItemActive}                from 'utils/isNavItemActive'
import {aboutMicrositeMenuWrapperStyle} from './styles'

const AboveContentMenu = ({post}) =>
    <Div theme={aboutMicrositeMenuWrapperStyle} as="nav">
        {post.menu_above_content.items && post.menu_above_content.items.map(menuItem =>
            <LinkSwitch
                url={menuItem.url}
                children={menuItem.title}
                key={menuItem.ID}
                theme={aboutMicrositeMenuItemStyle}
                type="nav"
                isActive={isNavItemActive(menuItem, post)}
            />
        )}
    </Div>

export default AboveContentMenu