import {
    auto,
    none
} from 'utils/themer'

export const subscribeFormTemplateStyle = {
    description: {},
    descriptionWrapper: {},
    image: {
        float: 'right',
        marginLeft: 60,
        marginBottom: 23,
        width: [410, .5, '100%'],
        mobile: {
            float: none,
            marginLeft: 0,
            marginBottom: 25,
            marginTop: 10
        }
    },
    form: {
        marginBottom: 150,
        clear: 'both',
        height: auto
    },
    formHeading: {
        size: [39, .7, 32],
        lineHeight: [39, .7, 32],
        weight: 800,
        paddingBottom: 55,
        marginBottom: 60,
        borderBottom: `2px solid #f3f3f3`
    }
}