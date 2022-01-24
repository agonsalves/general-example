import {
    absolute,
    borderBox,
    none,
    white
}                                from 'utils/themer'
import {globals}                 from 'variables/styles'
import {predictivePracticeStyle} from '../PredictivePracticeItem/styles'

export const predictiveViewAllStyle = {
    ...predictivePracticeStyle,
    backgroundColor: globals.colors.headingColor,
    color: white,
    height: 80,
    width: '100%',
    border: none,
    padding: '20px 11px',
    boxSizing: borderBox,
    borderBottom: `1px solid #f2f2f2`,
    icon: {
        color: white,
        position: absolute,
        right: 13,
        bottom: 13,
        size: 18
    }
}