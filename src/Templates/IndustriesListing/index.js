import IndustryListingItem               from './IndustryListItem'
import React                      from 'react'
import {connect}                  from 'react-redux'
import Div                        from 'Shared/Div'
import {splitAlphaList}           from 'utils/splitArray'
import {industriesListingStyle} from './styles'

const IndustriesListing = ({industries, post}) =>
    <>
        {industries && (
            <Div theme={industriesListingStyle}>
                {splitAlphaList(industries).map((industryColumn, i) =>
                    <Div theme={industriesListingStyle.column} key={i}>
                        {industryColumn.map((industry) =>
                            industry.thumbnail_teaser &&
                            <IndustryListingItem
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

export default connect(mapStateToProps)(IndustriesListing)