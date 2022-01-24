import {
    block,
    center,
    flex,
    relative,
    wrap
}                from 'utils/themer'
import {globals} from 'variables/styles'

export const archiveDateAndSourceStyle = {
    display: flex,
    flexWrap: wrap,
    color: globals.colors.archiveDateAndTypeColor,
    transition: 'color 250ms ease',
    marginBottom: [4, .7, 4],
    date: {
        font: globals.fonts.body,
        color: globals.colors.archiveDateAndTypeColor,
        size: [16, .7, 16],
        lineHeight: [22, .7, 22],
        letterSpacing: [0.22, .7, 0.22],
    },
    source: {
        font: globals.fonts.body,
        display: flex,
        alignItems: center,
        position: relative,
        size: [16, .7, 16],
        lineHeight: [22, .7, 22],
        letterSpacing: [0.22, .7, 0.22],
        before: {
            display: block,
            position: relative,
            content: '\' \'',
            height: '1px',
            width: '10px',
            marginLeft: [6, .7, 6],
            marginRight: [6, .7, 6],
            backgroundColor: globals.colors.archiveDateAndTypeColor
        },
    }
}