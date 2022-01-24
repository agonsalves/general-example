import {
    auto,
    block,
    column,
    flex
}                from '../../utils/themer'
import {globals} from '../../variables/styles'

export const accoladesStyle = {
    listing: {
        display: flex,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: [150, .7, 0],
        marginTop: 76,

        mobile: {
            flexDirection: 'row',
        },
        print: {
            padding: 0,
        },

        contentWrapper: {
            display: flex,
            flexDirection: column,
            width: [450, globals.style.layoutScalingValue, 0],
            padding: [40, globals.style.layoutScalingValue, 0],
            marginBottom: [10, globals.style.layoutScalingValue, 0],
            backgroundColor: globals.colors.cardBackgroundColor,
            mobile: {
                width: auto,
            },
            print: {
                backgroundColor: 'transparent',
                padding: 0,
                marginBottom: 40,
                width: '45%'
            }
        },
        heading: {
            display: block,
            font: globals.fonts.heading,
            size: [24, .7, 24],
            lineHeight: [30, .7, 30],
            marginBottom: [22, .7, 18],
            weight: 500,
            color: globals.colors.headingColor,
        },
        description: {
            size: [18, .9, 18],
            lineHeight: [30, .9, 30],
            color: globals.colors.textColor,
            weight: 300,
        },
        image: {
            marginBottom: [16, .7, 16],
            width: [130, .7, 130],
        }

    },
}