import React                    from 'react'
import Div                      from 'Shared/Div'
import Icon                     from 'Shared/Icon'
import LinkSwitch               from 'Shared/LinkSwitch'
import Span                     from 'Shared/Span'
import {longArrowAltLeft}       from 'variables/iconLibrary'
import {headerMainSiteNavStyle} from './styles'

const HeaderMainSiteNav = () =>
    <LinkSwitch url="/" theme={headerMainSiteNavStyle}>
        <Div theme={headerMainSiteNavStyle.button}>
            <Div theme={headerMainSiteNavStyle.iconWrapper}>
                <Icon
                    theme={headerMainSiteNavStyle.icon}
                    icon={longArrowAltLeft}
                />
            </Div>
            <Span theme={headerMainSiteNavStyle.buttonText}>
                {'Go to Mako Website'}
            </Span>
        </Div>
    </LinkSwitch>


export default HeaderMainSiteNav