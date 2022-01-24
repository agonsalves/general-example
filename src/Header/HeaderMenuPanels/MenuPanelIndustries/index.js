import {headerMenuPanelStyle}     from 'Header/HeaderMenuPanels/HeaderMenuPanelWrapper/styles'
import IndustryItem               from 'Header/HeaderMenuPanels/MenuPanelIndustryItem'
import React                      from 'react'
import {connect}                  from 'react-redux'
import Div                        from 'Shared/Div'
import H2                         from 'Shared/H2'
import {splitAlphaList}           from 'utils/splitArray'
import {industriesMenuPanelStyle} from './styles'

const MenuPanelIndustries = ({industries, post}) =>
    <>
        <Div theme={headerMenuPanelStyle.search}>
            <H2 theme={headerMenuPanelStyle.heading}>Key Industries</H2>
        </Div>
        {industries && (
            <Div theme={industriesMenuPanelStyle}>
                {splitAlphaList(industries).map((industryColumn, i) =>
                    <Div theme={industriesMenuPanelStyle.column} key={i}>
                        {industryColumn.map((industry) =>
                            industry.thumbnail_teaser &&
                            <IndustryItem
                                industry={industry}
                                key={industry.slug}
                                post={post}
                            />
                        )}
                    </Div>
                )}
            </Div>
        )}
    </>


const mapStateToProps = ({site}) => ({
    industries: site.menus.menu_panels.industries
})

export default connect(mapStateToProps)(MenuPanelIndustries)