import {
    borderBox,
    column,
    flex
}                from 'utils/themer'
import {globals} from 'variables/styles'

export const industriesMenuPanelStyle = {
    display: flex,
    flexDirection: 'row',
    wrap: 'nowrap',
    font: globals.fonts.body,
    column: {
        display: flex,
        flexDirection: column,
        width: '50%',
        boxSizing: borderBox,
        firstChild: {
            paddingRight: 40
        }
    },
    industry: isActive => {
        const baseStyle = {
            display: flex,
            marginTop: 42,
            paddingRight: 25,
            borderBottom: globals.style.dividingBorder,
            borderWidth: '1px',
            borderColor: '#E5E5E5',
            color: globals.colors.headingColor,
            firstChild: {
                marginTop: 0
            },
            hover: {
                color: globals.colors.linkActiveColor,
                child: {
                    selector: 'img',
                    opacity: globals.style.imageHoverOpacity
                }
            }
        }

        if (isActive)
            return {
                ...baseStyle,
                color: globals.colors.linkActiveColor,
                child: {
                    selector: 'img',
                    opacity: globals.style.imageHoverOpacity
                }
            }

        return {
            ...baseStyle
        }

    },
    industryThumb: {
        marginRight: 23,
        width: [160, globals.style.layoutScalingValue],
        minWidth: [160, globals.style.layoutScalingValue],
        maxWidth: [160, globals.style.layoutScalingValue],
        height: [98, globals.style.layoutScalingValue]
    },
    industryTitle: {
        size: 18,
        lineHeight: 24,
        letterSpacing: 0.5,
        paddingBottom: 15,
        textTransform: 'capitalize'
    }
}