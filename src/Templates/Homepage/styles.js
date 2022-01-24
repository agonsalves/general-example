import {
    auto,
    column
}                from '../../utils/themer'
import {globals} from '../../variables/styles'

export const homepageStyle = {
    stage: {
        width: [1520, globals.style.layoutScalingValue, '100%'],
        minHeight: '100vh',
        marginBottom: [-315, .7, '0'],
        mobile: {
            transform: 'none !important'
        },
        print: {
            transform: 'none !important',
            marginTop: 50,
            minHeight: '1400px'
        }
    },
    stageInner: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        mobile: {
            flexDirection: column
        },
        print: {
            display: 'block'
        }
    },
}

export const clientStoriesListingStyleWrapper = {
    mobile: {
        transform: 'none !important'
    },
    print: {
        transform: 'none !important',
        height: auto,
        float: 'left',
        marginRight: 10
    }
}