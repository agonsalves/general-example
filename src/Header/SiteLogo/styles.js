import {
    absolute,
    auto,
    block,
    none,
    relative
} from 'utils/themer'

export const logoStyle = {
    position: relative,
    display: block,
    width: [105, .7, 85],
    minWidth: '70px',
    ie: {
        order: -1 /// position before skip navigation
    },
    mobile: {
        display: none
    },
    child: {
        selector: '> canvas',
        position: absolute,
        width: [105, .7, 85],
        height: 47,
    },
    image: {
        width: '100%',
        height: auto
    },
    print: {
        marginTop: 20
    }
}