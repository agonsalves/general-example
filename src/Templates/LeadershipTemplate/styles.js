import {
    column,
    flex
}                from '../../utils/themer'
import {globals} from '../../variables/styles'

export const leadershipStyle = {
    executives: {
        display: flex,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        borderTop: `2px solid ${globals.colors.headingColor}`,
        paddingTop: [80, .7, 40],
        marginTop: [80, .7, 50],
        marginBottom: [80, .7, 0],
        large: {},
        mobile: {
            flexDirection: 'row',
        },
        item: {
            display: flex,
            flexDirection: column,
            marginBottom: [70, globals.style.layoutScalingValue, 50],
            width: [230, globals.style.layoutScalingValue, '100%'],
            height: [358, .55, 'auto'],
            textAlign: 'center',
            borderBottom: globals.style.dividingBorder,
            borderWidth: '1px',
            hover: {
                color: globals.colors.textColor,
            },
            mobile: {
                textAlign: 'left',
                paddingBottom: 40,
            },

        },
        image: {
            borderRadius: 200,
            marginBottom: 25,
            mobile: {
                width: '150',
            },
            hover: {
                opacity: .7
            },
        },
        name: {
            fontSize: [20, .7, 20],
            color: globals.colors.headingColor,
            lineHeight: 24,
            hover: {
                color: globals.colors.linkHoverColor,
            },
        },
        title: {
            fontSize: [18, .7, 18],
            hover: {
                color: globals.colors.textColor,
            },

        }
    },
}