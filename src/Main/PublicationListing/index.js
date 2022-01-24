import PropTypes                        from 'prop-types'
import React                            from 'react'
import Div                              from 'Shared/Div'
import Span                             from 'Shared/Span'
import {excerpt}                        from 'utils/helpers'
import ArchiveDateAndSource             from '../ArchiveDateAndSource'
import ArchiveListingTeaserThumbnail    from '../ArchiveListingTeaserThumbnail'
import ArchiveListingWrapper            from '../ArchiveListingWrapper'
import {archiveListingStyle}            from '../ArchiveListingWrapper/styles'
import {publicationListingExcerptStyle} from './styles'

const PublicationListing = ({title, date, url, type, source, byline, useDisplayDate, displayDate, image, description, theme}) =>
    <ArchiveListingWrapper theme={theme} url={url}>
        {image && (
            <ArchiveListingTeaserThumbnail img={image} theme={theme.thumbnail}/>
        )}
        <Div theme={{...archiveListingStyle.textWrapper, ...theme.textWrapper}}>
            {type && (
                <Div className="archive-accent"
                     theme={{
                         ...archiveListingStyle.type,
                         ...theme.type
                     }}
                >
                    {type?.[0].term}
                </Div>
            )}
            <Div
                theme={{
                    ...archiveListingStyle.title,
                    ...theme.title,
                }}
                children={title}
            />
            {!image && !!description && (
                <Span theme={{
                    ...archiveListingStyle.excerpt,
                    ...publicationListingExcerptStyle,
                    ...theme.excerpt
                }}>
                    {excerpt(description, 80)}&#8230;
                </Span>
            )}
            <ArchiveDateAndSource
                date={date}
                useDisplayDate={useDisplayDate}
                displayDate={displayDate}
                source={source}
                theme={theme.dateAndSource}
            />
            {byline && (
                <Span theme={{
                    ...archiveListingStyle.byline,
                    ...theme.byline
                }}>
                    {byline}
                </Span>
            )}
        </Div>
    </ArchiveListingWrapper>

PublicationListing.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    displayDate: PropTypes.string,
    useDisplayDate: PropTypes.bool,
    type: PropTypes.array,
    source: PropTypes.string,
    byline: PropTypes.string,
    image: PropTypes.object,
    description: PropTypes.string,
    theme: PropTypes.object,
}

PublicationListing.defaultProps = {
    theme: {
        thumbnail: {},
        title: {},
        source: {},
    },
}

export default PublicationListing