import {
    auto,
    flexStart,
    inlineFlex,
    spaceBetween
}                     from 'utils/themer'
import {globals}      from 'variables/styles'
import {searchButton} from '../../Shared/ButtonLarge/styles'

export const genericSearchResultsStyle = {
    viewAllButton: {
        ...searchButton,
        justifyContent: spaceBetween,
        alignSelf: flexStart
    },
    searchAgain: {
        ...searchButton,
        alignSelf: flexStart,
        marginBottom: 60,
        justifyContent: spaceBetween,
        marginRight: auto,
        display: inlineFlex,
        whiteSpace: 'nowrap',
        mobile: {
            margin: '0px auto 30px 0'
        }
    },
    buttonIcon: {
        size: [18, .7, 18],
        marginLeft: [50, .7, 50]
    },
    heading: {
        font: globals.fonts.heading,
        color: globals.colors.headingColor,
        size: [45, .7, 32],
        lineHeight: [40, .7, 38],
        weight: 600,
        marginBottom: 23,
        marginTop: [15, .7, '0'],
    }
}

export const blogSearchQuery = {
    paddingTop: 0,
    paddingBottom: [56, globals.style.layoutScalingValue, 35],
    paddingLeft: 0,
    paddingRight: [40, globals.style.layoutScalingValue, 40],
    marginBottom: [90, globals.style.layoutScalingValue, 50],
    borderBottom: `2px solid ${globals.colors.headingColor}`
}