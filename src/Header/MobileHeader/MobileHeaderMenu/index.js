import PropTypes               from 'prop-types'
import React, {memo}           from 'react'
import {connect}               from 'react-redux'
import Div                     from 'Shared/Div'
import MobileMenuToggle        from './MobileMenuToggle'
import MobileMenu              from './MobileMenu'
import {mobileHeaderMenuStyle} from './styles'

const MobileHeaderMenu = memo(({menu, pathname, search}) =>
    <Div theme={mobileHeaderMenuStyle}>
        <MobileMenuToggle pathname={pathname} search={search} />
        <MobileMenu menu={menu}/>
    </Div>
)


MobileHeaderMenu.propTypes = {
    menu: PropTypes.array.isRequired,
}

const mapStateToProps = ({site, router}) => ({
    menu: site.menus.locations['mobile-header-menu'],
    pathname: router.location.pathname,
    search: router.location.search,
})

export default connect(mapStateToProps)(MobileHeaderMenu)