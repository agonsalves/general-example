import {
    block,
    center,
    column,
    flex,
    flexStart,
    none
}                from '../../utils/themer'
import {globals} from '../../variables/styles'

export const currentOpeningStyle = {
    display: flex,
    flexWrap: 'noWrap',
    alignItems: center,
    marginTop: 67,
    marginBottom: 60,
    mobile: {
        flexDirection: column,
        alignItems: flexStart
    },
    filter: {
        color: globals.colors.textColor,
        marginRight: 35,
        size: [18, .7, 18],
        lineHeight: [30, .7, 30],
        letterSpacing: [0.4, .7, 0.4],
        display: block,
        marginBottom: [10, .7, 10],
        print: {
            display: none
        }
    },
    jobListing: {

        title: {},
        offices: {},
        expandButton: {}
    }
}