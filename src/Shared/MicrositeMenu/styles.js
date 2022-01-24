import {iconToData} from 'utils/styling'
import {
    absolute,
    auto,
    black,
    borderBox,
    column,
    flex,
    hidden,
    none,
    sv,
    transparent,
    white,
}                   from 'utils/themer'
import {
    chevronDownLight,
    chevronUpLight
}                   from 'variables/iconLibrary'
import {globals}    from 'variables/styles'

export const micrositeMenuWrapperStyle = {
    position: 'relative',
    width: [290, globals.style.layoutScalingValue, '100%'],
    minWidth: [290, globals.style.layoutScalingValue, '100%']
}

export const micrositeMenuStyle = {
    position: 'sticky',
    width: auto,
    top: 0,
    minWidth: [205, globals.style.layoutScalingValue, '100%'],
    maxWidth: [205, globals.style.layoutScalingValue, '100%'],
    paddingTop: (globals.style.persistentHeaderHeight + globals.style.mainTopGutter),
    marginTop: -(globals.style.persistentHeaderHeight + globals.style.mainTopGutter),
    marginRight: 83,
    boxSizing: borderBox,
    font: globals.fonts.body,
    zIndex: 1,
    mobile: {
        marginTop: 32,
        paddingTop: 0
    },
    print: {
        display: none
    },
    list: {
        listStyleType: none,
        boxSizing: borderBox,
        backgroundColor: white,
        overflow: hidden,
        maxHeight: `calc(95vh - ${sv(205)})`,
        ie: {
            maxHeight: '64vh'
        },
        overflowY: 'scroll',
        msScrollBar: none,
        ffScrollBar: none,
        scrollBar: {
            display: none,
        },
        mobile: {
            display: flex,
            flexDirection: column,
            maxHeight: 300,
            minHeight: 300,
            backgroundColor: transparent,
            overflow: 'scroll'
        }
    },
    item: {
        display: flex,
        mobile: {
            minHeight: 60
        },
        firstChild: {
            child: [
                {
                    selector: '> span',
                    borderTop: globals.style.dividingBorder,
                    borderWidth: '1px',
                }
            ]
        }
    },
}

export const micrositeMenuOverflowIcon = {
    position: absolute,
    size: [24, .7, 24],
    marginLeft: [-8, .7, -8],
    left: '50%',
    mobile: {
        display: none
    }
}

export const micrositeMenuOverflowStyle = {
    before: {
        ...micrositeMenuOverflowIcon,
        content: iconToData(chevronUpLight, black),
        top: [(globals.style.persistentHeaderHeight + globals.style.mainTopGutter) - 30, .7],
        height: '20px',
        width: '20px',
    },
    after: {
        ...micrositeMenuOverflowIcon,
        content: iconToData(chevronDownLight, black),
        bottom: -28,
        height: '20px',
        width: '20px',
    }
}