import {headerMenuPanelStyle}     from 'Header/HeaderMenuPanels/HeaderMenuPanelWrapper/styles'
import React                      from 'react'
import {connect}                  from 'react-redux'
import Div                        from 'Shared/Div'
import H2                         from 'Shared/H2'
import PracticeSearchBar          from 'Marquee/PracticeSearchBar'
import {singular}                 from 'utils/helpers'
import {splitAlphaList}           from 'utils/splitArray'
import MenuPanelServiceItem       from 'Header/HeaderMenuPanels/MenuPanelServiceItem'
import {industriesMenuPanelStyle} from '../MenuPanelIndustries/styles'
import {serviceMenuPanelStyle}    from './styles'

const MenuPanelService = ({services}) =>
    <>
        <Div theme={serviceMenuPanelStyle.search}>
            <H2 theme={headerMenuPanelStyle.heading}>Find a {singular('practice-area')}</H2>
            <PracticeSearchBar theme={serviceMenuPanelStyle.searchBar}/>
        </Div>
        {services && (
            <>
                <Div theme={serviceMenuPanelStyle.list}>
                    {splitAlphaList(services).map((serviceColumn, i) =>
                        <Div theme={industriesMenuPanelStyle.column} key={i}>
                            {serviceColumn.map((service) =>
                                <MenuPanelServiceItem
                                    service={service}
                                    key={service.object.slug}
                                />
                            )}
                        </Div>
                    )}
                </Div>
            </>
        )}
    </>

const mapStateToProps = ({site}) => ({
    services: site.menus.menu_panels.services.hierarchy
})

export default connect(mapStateToProps)(MenuPanelService)