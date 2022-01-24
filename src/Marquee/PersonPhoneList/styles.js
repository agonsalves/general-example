import {
    center,
    column,
    flex,
    flexStart,
    row,
    white
} from 'utils/themer'

export const personPhoneListWrapperStyle = {
    display: 'table',
    marginTop: [26, .4],
    width: '100%',
    color: white,
    transition: 'margin .5s',
    transitionTimingFunction: 'cubic-bezier(.45,.22,.57,.91)',
    column: {
        display: flex,
        flexDirection: row,
        alignItems: center,
        lastChild: {
            marginTop: [12, .7, 12],
        }
    },
    columnInner: {
        display: flex,
        flexDirection: row
    },
    numberWrapper: {
        display: flex,
        alignItems: flexStart,
        flexDirection: column,
        justifyContent: center
    }
}