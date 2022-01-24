import {
    absolute,
    center,
    flex,
    none,
    transparent
}                from '../../utils/themer'
import {globals} from '../../variables/styles'

export const headerMenuStyle = {
    display: flex,
    alignItems: center,
    ie: {
        order: 1 /// position after pseudo element
    },
    print: {
        display: none
    },
    menu: {
        listStyle: none,
        display: flex,
        flexDirection: 'row',
        child: [
            {
                selector: '> div',
                firstChild: {
                    child: {
                        selector: 'span',
                        before: {
                            content: none
                        }
                    }
                }
            }
        ]
    },
    overlay: {
        background: transparent,
        zIndex: globals.zIndex - 1
    }
}

export const underlineAnimationStyle = isHidden => {
    const baseStyle = {
        backgroundColor: globals.colors.linkActiveColor,
        height: 4,
        position: absolute,
        bottom: 47
    }

    if (isHidden)
        return {
            display: none
        }

    return {
        ...baseStyle
    }
}