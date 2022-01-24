import {firmHighlightsItemStyle} from '../../FirmHighlights/HighlightItem/styles'
import {
    auto,
    block,
    column,
    flex,
    flexStart,
    none,
    relative
}                                from '../../utils/themer'
import {globals}                 from '../../variables/styles'

export const officeDetailTopStyle = {
    display: flex,
    flexDirection: column,
    width: [880, globals.style.layoutScalingValue, '100%'],
    paddingBottom: [60, .7, '0'],
    mobile: {
        border: none,
        flexDirection: column,
    },
    image: {
        width: '50%',
        height: auto,
        alignSelf: flexStart,
    },
    googleMap: {
        width: [780, globals.style.layoutScalingValue],
        height: [507, globals.style.layoutScalingValue],
        alignSelf: flexStart,
        mobile: {
            width: '100%',
            height: auto,
            alignSelf: flexStart
        }
    },
    noCookie: {
        maxWidth: [440, .7, 280],
        padding: [40, .7, 40]
    },
    addressWidget: {
        mobile: {
            display: block,
            border: 0,
            borderTop: 0,
            paddingTop: 36,
            marginBottom: 35
        }
    },
    address: {},
    button: {
        ...firmHighlightsItemStyle.button,
        width: [220, .7, 220],
        position: relative,
        bottom: 0,
        marginTop: 28,
        mobile: {
            marginBottom: 40
        }
    },
    buttonText: {
        ...firmHighlightsItemStyle.buttonText
    },
    buttonIcon: {
        ...firmHighlightsItemStyle.buttonIcon
    },
    widget: {
        border: none,
        display: none,
        print: {
            display: none
        },
        mobile: {
            display: block,
            paddingTop: 37,
            paddingBottom: 55,
            marginBottom: 0,
            borderBottom: `1px solid ${globals.colors.borderColor}`
        }
    }
}
export const officeDetailHeadingStyle = {
    size: [45, .7, 40],
    lineHeight: [40, .7, 32],
    marginTop: 0,
    marginBottom: 45,
    weight: 600,
    mobile: {
        marginTop: 10,
        marginBottom: 33
    }
}
export const officeDetailDescStyle = {
    marginBottom: [120, .7, 50],
    mobile: {
        paddingBottom: 30,
        borderBottom: globals.style.dividingBorder,
        borderWidth: '1px'
    }
}