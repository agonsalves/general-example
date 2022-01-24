import {
    auto,
    block,
    column,
    flex,
    flexStart,
    inlineBlock
} from 'utils/themer'
import {globals} from 'variables/styles'

export const archiveDetailStyle = {
    marginBottom: [114, .7, 45],
    date: {},
    teaserImage: {
        display: inlineBlock,
        width: [410, .5, '100%'],
        float: 'right',
        marginLeft: 45,
        marginBottom: 60,
        mobile: {
            display: block
        }
    }
}

export const archiveDetailTopTextWrapperStyle = {
    paddingLeft: [43, globals.style.layoutScalingValue, '0'],
    paddingRight: [63, globals.style.layoutScalingValue, '0'],
    paddingTop: [30, globals.style.layoutScalingValue, '0'],
    display: flex,
    flexDirection: column
}

export const archiveDetailThumbnailStyle = {
    minWidth: [555, globals.style.layoutScalingValue, 220],
    minHeight: [342, globals.style.layoutScalingValue, 'auto'],
    maxWidth: [555, globals.style.layoutScalingValue, 220],
    marginBottom: [-30, .7, -30],
    marginLeft: auto,
    alignSelf: flexStart,
    mobile: {
        display: block,
        marginBottom: 10,
        marginTop: 26,
        marginRight: auto,
        marginLeft: 0
    }
}

export const blogDetailCategoryWrapperStyle = {
    display: block,
    color: globals.colors.linkActiveColor
}

export const blogDetailTypeStyle = {
    whiteSpace: 'nowrap'
}