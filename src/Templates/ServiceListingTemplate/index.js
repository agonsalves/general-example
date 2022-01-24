import React                      from 'react'
import {connect}                  from 'react-redux'
import Div                        from 'Shared/Div'
import PracticeSearchBar          from 'Marquee/PracticeSearchBar'
import {splitAlphaList}           from 'utils/splitArray'
import ServiceItem                from './ServiceItem'
import {serviceMenuPanelStyle}    from './styles'

const ServicesListing = ({services}) =>
    <>
        <Div theme={serviceMenuPanelStyle.search}>
            <PracticeSearchBar theme={serviceMenuPanelStyle.searchBar}/>
        </Div>
        {services && (
            <>
                <Div theme={serviceMenuPanelStyle.list}>
                    {splitAlphaList(services).map((serviceColumn, i) =>
                        <Div theme={serviceMenuPanelStyle.column} key={i}>
                            {serviceColumn.map((service) =>
                                <ServiceItem
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

export default connect(mapStateToProps)(ServicesListing)