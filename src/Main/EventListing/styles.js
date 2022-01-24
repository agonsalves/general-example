import {
    auto,
    center,
    column,
    flex,
    flexStart,
    hidden,
    inherit,
    inlineBlock,
    white
}                from '../../utils/themer'
import {globals} from '../../variables/styles'

export const eventsListingStyle = {
    borderColor: '#DCDCDC',
    innerLink: {
        borderColor: inherit,
    },
    hover: {
        backgroundColor: globals.colors.linkActiveColor,
        borderColor: 'rgba(255,255,255,0.2)',
        color: white,
        child: [
            {
                selector: 'div',
                color: globals.colors.headingColor
            },
            {
                selector: 'span',
                color: white
            },
            {
                selector: 'h2',
                color: white,
            },
            {
                selector: 'div.archive-accent',
                color: white
            },
            {
                selector: 'img',
                opacity: .7
            }
        ]
    },
    type: {
        display: flex,
        alignItems: center,
        marginTop: 0,
        marginBottom: [12, .7, 12],
    },
    title: {
        display: 'block; display: -webkit-box;',
        webkitLineClamp: 3,
        webkitBoxOrient: 'vertical',
        maxHeight: [150, .7, 150],
        minHeight: [144, .7, 144],
        overflow: hidden,
        textOverflow: 'ellipsis',
        height: auto,
        size: [42, .7, 42],
        lineHeight: [48, .7, 48],
    },
    social: {
        marginBottom: [9, .7, 9]
    },
    button: {
        marginLeft: 0,
        marginBottom: [9, .7, 20],
        width: 'auto',
        mobile: {
            marginRight: 'auto'
        },
        icon: {
            marginLeft: 45,
            size: [18, .7, 18]
        }
    }
}

export const eventsListingUpcomingStyle = isUpcoming => {
    if (isUpcoming)
        return {
            backgroundColor: globals.colors.headingColor,
            color: white,
            borderColor: 'rgba(255,255,255,0.2)',
            child: [
                {
                    selector: 'div',
                    color: white
                },
                {
                    selector: 'span',
                    color: globals.colors.archiveDateAndTypeColor
                },
                {
                    selector: 'div.archive-accent',
                    color: globals.colors.linkActiveColor
                },
                {
                    selector: 'img',
                    opacity: .7
                }
            ]
        }

    return {}
}
export const eventsListingUpcomingIconStyle = {
    display: inlineBlock,
    size: [15, .7, 15],
    marginRight: [16, .7, 16]
}
export const eventListingInfoStyle = {
    display: flex,
    alignItems: flexStart,
    font: globals.fonts.body,
    color: globals.colors.textColor,
    marginTop: 32,
    paddingTop: 43,
    size: [18, .7, 18],
    lineHeight: [30, .7, 30],
    borderTop: '1px solid',
    borderColor: inherit,
    hover: {
        color: globals.colors.textColor
    }
}
export const eventListingInfoDateWrapperStyle = {
    minWidth: [125, globals.style.layoutScalingValue + .05, 125]
}
export const eventListingInfoMonthStyle = {
    size: [18, .7, 18],
    lineHeight: [30, .7, 30],
    letterSpacing: [0.2, .7, 0.2],
    weight: 400,
    marginTop: 0,
    marginBottom: 0,
    color: globals.colors.linkActiveColor
}
export const eventListingInfoDayStyle = {
    size: [65, .7],
    lineHeight: [55, .7],
    color: globals.colors.linkActiveColor
}
export const eventListingInfoLocationStyle = {
    ...eventListingInfoMonthStyle,
    display: flex,
    flexDirection: column
}
export const eventListingInfoLocationWrapperStyle = {
    display: flex,
    flexDirection: column,
    width: '100%',
    borderLeft: '1px solid',
    borderColor: inherit,
    paddingLeft: [40, globals.style.layoutScalingValue, 40],
    minHeight: [85, .7, 85]
}
export const eventListingInfoLocationIconStyle = {
    marginTop: [4, .7, 4],
    marginBottom: [10, .7, 10]
}
export const eventListingInfoCalendarIconStyle = {
    size: [20, .7, 20],
    marginRight: [15, .7, 15]
}