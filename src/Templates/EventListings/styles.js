import {
    borderBox,
    flex,
    wrap
}                from '../../utils/themer'
import {globals} from '../../variables/styles'

/**
 *
 *   EVENT LISTINGS
 *
 */


export const eventListingsWrapperStyle = {
    display: flex,
    flexWrap: wrap,
    child: {
        selector: '> article:nth-child(even)',
        marginRight: 0
    }
}
export const archiveListingEventListingStyle = {
    width: [465, globals.style.layoutScalingValue, '100%'],
    boxSizing: borderBox,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 29,
    paddingBottom: 40,
    marginRight: [10, globals.style.layoutScalingValue, '0'],
}

export const eventListingsHeadingStyle = {
    paddingBottom: [30, .7, 30]
}