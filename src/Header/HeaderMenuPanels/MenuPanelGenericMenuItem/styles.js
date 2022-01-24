import {
    center,
    inlineFlex,
    pointer,
    relative,
    white
}                from 'utils/themer'
import {globals} from 'variables/styles'

export const genericMenuItemWrapperStyle = {
    position: relative,
    marginBottom: 24
}

export const genericMenuItemStyle = isActive => {
    const baseStyle = {
        size: [18, .7, 18],
        lineHeight: [24, .7, 24],
        display: inlineFlex,
        alignItems: center,
        color: globals.colors.headingColor,
        font: globals.fonts.body,
        hover: {
            color: globals.colors.linkHoverColor,
            cursor: pointer,
            child: {
                selector: 'svg',
                child: [
                    {
                        selector: '.fa-primary',
                        color: white
                    },
                    {
                        selector: '.fa-secondary',
                        color: globals.colors.linkActiveColor,
                        opacity: 1
                    }
                ]
            }
        },
        focus: {
            color: globals.colors.linkHoverColor,
            cursor: pointer,
            child: {
                selector: 'svg',
                child: [
                    {
                        selector: '.fa-primary',
                        color: white
                    },
                    {
                        selector: '.fa-secondary',
                        color: globals.colors.linkActiveColor,
                        opacity: 1
                    }
                ]
            }
        }
    }

    if (isActive)
        return {
            ...baseStyle,
            color: globals.colors.linkActiveColor,
            child: {
                selector: 'svg',
                child: [
                    {
                        selector: '.fa-primary',
                        color: white
                    },
                    {
                        selector: '.fa-secondary',
                        color: globals.colors.linkActiveColor,
                        opacity: 1
                    }
                ]
            },
            hover: {
                ...baseStyle.hover,
                color: globals.colors.linkActiveColor
            }
        }

    return {
        ...baseStyle
    }

}