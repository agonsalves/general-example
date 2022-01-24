import PropTypes               from 'prop-types'
import React                   from 'react'
import {connect}               from 'react-redux'
import Li                      from 'Shared/Li'
import Ul                      from 'Shared/Ul'
import LinkSwitch              from 'Shared/LinkSwitch'
import {absoluteToRelativeUrl} from 'utils/url'
import {footerMenuStyle}       from './styles'

const FooterMenu = ({menu, theme}) =>
    <nav>
        <Ul theme={{...footerMenuStyle, ...theme}}>
            {menu.map(item =>
                <Li key={item.ID} theme={{...footerMenuStyle.listItem, ...theme.listItem}}>
                    <LinkSwitch
                        theme={{...footerMenuStyle.link, ...theme.link}}
                        url={absoluteToRelativeUrl(item.url)}
                        children={item.title}
                        type="nav"
                    />
                </Li>
            )}
        </Ul>
    </nav>

FooterMenu.propTypes = {
    menu: PropTypes.array.isRequired,
    theme: PropTypes.object,
}

FooterMenu.defaultProps = {
    theme: {
        listItem: {},
        link: {}
    },
    menu: []
}

const mapStateToProps = ({site}) => ({
    menu: site.menus.locations?.['footer-menu'],
})

export default connect(mapStateToProps)(FooterMenu)