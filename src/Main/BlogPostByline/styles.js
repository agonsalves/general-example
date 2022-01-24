import {archiveDetailDateAndSourceStyle} from 'DetailFrame/DetailFrameInner/styles'
import {globals}                         from '../../variables/styles'

export const archiveDetailBlogPostBylineStyle = {
    ...archiveDetailDateAndSourceStyle,
    color: globals.colors.archiveDateAndTypeColor,
    name: {
        color: globals.colors.archiveDateAndTypeColor,
        ...archiveDetailDateAndSourceStyle.date
    }
}