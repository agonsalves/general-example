import {micrositeMenuStyle} from 'Shared/MicrositeMenu/styles'
import {none}               from 'utils/themer'
import {
    absolute,
    auto,
    center,
    flex,
    pointer,
    relative,
    spaceBetween,
    white
} from 'utils/themer'
import {globals} from 'variables/styles'

export const topMenuStyle = {
    ...micrositeMenuStyle,
    before: {
        content: none
    },
    inner: {
        ...micrositeMenuStyle.list,

        listItem: {
            ...micrositeMenuStyle.item,
        },
        link: {
            position: relative,
            display: flex,
            justifyContent: spaceBetween,
            alignItems: center,
            width: '100%',
            color: globals.colors.micrositeMenuItem,
            size: [18, .7, 18],
            lineHeight: [24, .7, 24],
            letterSpacing: [0.4, .7, 0.4],
            height: auto,
            minHeight: [60, .7, 60],
            paddingLeft: [30, globals.style.layoutScalingValue, 30],
            paddingRight: [20, globals.style.layoutScalingValue, 20],
            paddingTop: [18, globals.style.layoutScalingValue, 18],
            paddingBottom: [18, globals.style.layoutScalingValue, 18],
            borderBottom: globals.style.dividingBorder,
            borderWidth: '1px',
            background: white,
            transition: 'background-color 250ms ease',
            mobile: {
                backgroundColor: globals.colors.inputBackgroundColor,
                borderBottom: globals.style.dividingBorder,
                borderWidth: '1px',
                padding: `13px 25px`,
                hover: {
                    backgroundColor: globals.colors.linkActiveColor,
                    color: white
                }
            },
            hover: {
                cursor: pointer,
                color: globals.colors.linkHoverColor
            },
            class: {
                name: 'active',
                color: white,
                backgroundColor: globals.colors.linkActiveColor
            },
            child: {
                selector: 'span',
                marginRight: [5, .7, '0']
            }
        },
        icon: {
            position: absolute,
            size: 25,
            marginTop: 32,
            right: [17, globals.style.layoutScalingValue, 30],
            marginLeft: auto,
            color: 'transparent',
        }
    }
}