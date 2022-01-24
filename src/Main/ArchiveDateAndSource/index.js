import PropTypes                   from 'prop-types'
import React                       from 'react'
import Div                         from 'Shared/Div'
import Span                        from 'Shared/Span'
import ArchiveDate                 from '../ArchiveDate'
import {archiveDateAndSourceStyle} from './styles'

const ArchiveDateAndSource = ({date, source, displayDate, useDisplayDate, theme}) =>
    <Div theme={{...archiveDateAndSourceStyle, ...theme}}>
        <ArchiveDate
            date={date}
            displayDate={displayDate}
            useDisplayDate={useDisplayDate}
            theme={{...archiveDateAndSourceStyle.date, ...theme.date}}
        />
        {!!source && (
            <Span theme={{...archiveDateAndSourceStyle.source, ...theme.source}}>{` ${source}`}</Span>
        )}
    </Div>

ArchiveDateAndSource.propTypes = {
    date: PropTypes.string,
    displayDate: PropTypes.string,
    useDisplayDate: PropTypes.bool,
    source: PropTypes.string
}

ArchiveDateAndSource.defaultProps = {
    useDisplayDate: false,
    theme: {}
}

export default ArchiveDateAndSource