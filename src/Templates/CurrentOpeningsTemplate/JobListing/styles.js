import {
    flex,
    none
}                from '../../../utils/themer'
import {globals} from '../../../variables/styles'

export const jobListingStyle = {
    borderTop: globals.style.dividingBorder,
    borderWidth: '1px',
    marginBottom: 60,
    lastChild: {
        marginBottom: 150
    },
    title: {
        color: globals.colors.headingColor,
        size: [18, .7, 18],
        weight: 600,
        lineHeight: [28, .7, 28],
        letterSpacing: [0.2, .7, 0.2],
        marginTop: [45, .7, 45],
        marginBottom: [2, .7, 2]
    },
    category: {
        size: [18, .7, 18],
        lineHeight: [30, .7, 30],
        display: none
    },
    offices: {
        color: globals.colors.textColor,
        size: [18, .7, 18],
        lineHeight: [30, .7, 30],
        letterSpacing: [0.4, .7, 0.4],
        marginBottom: 8
    },
    infoWrapper: {
        display: flex,
        flexDirection: 'row'
    },

    applyLinks: {
        color: globals.colors.textColor,
        size: [18, .7, 18],
        lineHeight: [30, .7, 30],
        marginTop: -20,
        weight: 300,
        child: {
            selector: ':not(li) li',
            marginBottom: 0
        }
    },
    applyOnline: {
        textDecoration: 'underline'
    },
    email: {
        textDecoration: 'underline'
    },
}