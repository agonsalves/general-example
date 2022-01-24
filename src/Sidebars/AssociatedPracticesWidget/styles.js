import {
    flex,
    none,
    relative
}                from 'utils/themer'
import {globals} from 'variables/styles'

export const associatedPracticeItemStyle = {
    display: flex,
    position: relative,
    font: globals.fonts.body,
    weight: 400,
    size: [18, .7, 18],
    lineHeight: [26, .7, 26],
    marginBottom: [15, .7, 15],
    lastChild: {
        marginBottom: 0
    },
    icon: {
        display: none,
    }
}
export const associatedPracticeList = {
    margin: 0,
    marginTop: [15, .7, 15],
    padding: 0,
    listStyleType: none,
    desktop: {},
}
export const associatedPracticeNameStyle = {
    color: globals.colors.linkColor,
    textDecoration: 'underline',
    hover: {
        color: globals.colors.linkHoverColor
    }
}
export const associatedPracticesStyle = {
    borderLeft: globals.style.dividingBorder,
    borderWidth: '1px',
    paddingLeft: [40, .7, '0']
}
export const associatedPracticeTitleStyle = {
    marginBottom: [30, .7, 30]
}