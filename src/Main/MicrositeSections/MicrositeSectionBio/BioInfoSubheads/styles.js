import {
    borderBox,
    column,
    flex,
    relative
}                from 'utils/themer'
import {globals} from 'variables/styles'

export const bioInfoWrapperStyle = {
    position: relative,
    size: [19, .9, 19],
    lineHeight: [32, .9, 32],
    weight: 400,
    borderTop: globals.style.dividingBorder,
    borderWidth: '1px',
    marginTop: 11,
    marginBottom: 106,
    boxSizing: borderBox,
    maxWidth: [780, globals.style.layoutScalingValue, 'auto'],
    mobile: {
        display: flex,
        flexDirection: column,
        width: '100%'
    }
}

export const associationsListStyle = {
    textDecoration: 'underline'
}