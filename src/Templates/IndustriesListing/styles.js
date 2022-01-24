import {
    borderBox,
    column,
    flex,
}                from 'utils/themer'
import {globals} from 'variables/styles'

export const industriesListingStyle = {
    display: flex,
    flexDirection: 'row',
    wrap: 'nowrap',
    font: globals.fonts.body,
    column: {
        display: flex,
        flexDirection: column,
        width: '100%',
        boxSizing: borderBox,
        paddingRight: 40,
        mobile: {
            paddingRight: 0,
            marginBottom: 40
        },
    },
    mobile: {
        flexDirection: column,
        width: '100%',
        alignItems: 'center',
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
            alignItems: 'start',
            hover: {
                color: globals.colors.linkActiveColor,
                child: {
                    selector: 'img',
                    opacity: globals.style.imageHoverOpacity,
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
}