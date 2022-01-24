import PropTypes                 from 'prop-types'
import React, {useState}         from 'react'
import Icon                      from 'Shared/Icon'
import LinkSwitch                from 'Shared/LinkSwitch'
import MenuListItem              from 'Shared/MenuListItem'
import {isNavItemActive}         from 'utils/isNavItemActive'
import {absoluteToRelativeUrl}   from 'utils/url'
import {
    minus,
    plus
}                                from 'variables/iconLibrary'
import MobileMenuItemSubMenu     from '../MobileMenuItemSubMenu'
import {mobileMenuLinkStyle}     from '../styles'
import {mobileMenuItemIconStyle} from './styles'

const MobileMenuLink = ({item, post, children, resetSubMenuToggle, theme}) => {
    const [subMenuToggle, setSubMenuToggle] = useState(false)

    return (
        <>
            <LinkSwitch
                type="nav"
                initial={isNavItemActive(item, post)}
                url={absoluteToRelativeUrl(item.url)}
                isActive={isNavItemActive(item, post)}
                theme={{...mobileMenuLinkStyle, ...theme}}
                data={true}
                onClick={() => setSubMenuToggle(flag => !flag)}
            >
                {item.title}
                {children && (
                    <Icon
                        theme={mobileMenuItemIconStyle}
                        icon={!subMenuToggle ? plus : minus}
                    />
                )}
            </LinkSwitch>
            {children && (
                <MobileMenuItemSubMenu
                    post={post}
                    subMenuToggle={subMenuToggle}
                    setSubMenuToggle={setSubMenuToggle}
                    resetSubMenuToggle={resetSubMenuToggle}
                    item={item}
                />
            )}
        </>
    )
}

MobileMenuLink.propTypes = {
    item: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
    resetSubMenuToggle: PropTypes.bool,
    children: PropTypes.bool,
    theme: PropTypes.object
}

MenuListItem.defaultProps = {
    theme: {},
}


export default MobileMenuLink
