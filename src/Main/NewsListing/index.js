import PropTypes                     from 'prop-types'
import React                         from 'react'
import Div                           from 'Shared/Div'
import {excerpt}                     from 'utils/helpers'
import ArchiveDate                   from '../ArchiveDate'
import {archiveDateAndSourceStyle}   from '../ArchiveDateAndSource/styles'
import ArchiveListingTeaserThumbnail from '../ArchiveListingTeaserThumbnail'
import ArchiveListingWrapper         from '../ArchiveListingWrapper'
import {archiveListingStyle}         from '../ArchiveListingWrapper/styles'
import {genericNewsListingItemStyle} from './styles'

const NewsListing = ({title, date, type, url, image, description, isFirstItem, theme}) =>
    <ArchiveListingWrapper
        theme={{
            ...genericNewsListingItemStyle,
            ...theme
        }}
        url={url}
    >
        <Div theme={{...archiveListingStyle.textWrapper, ...theme.textWrapper}}>
            {type && (
                <Div className="archive-accent"
                     theme={{...archiveListingStyle.type, ...theme.type}}>
                    {type?.[0].term}
                </Div>
            )}
            <Div
                theme={{
                    ...archiveListingStyle.title,
                    ...genericNewsListingItemStyle.title({isFirstItem}),
                    ...theme.title({isFirstItem})
                }}
                children={title}
            />
            <ArchiveDate
                date={date}
                theme={{
                    ...archiveDateAndSourceStyle.date,
                    ...genericNewsListingItemStyle.date({isFirstItem}),
                    ...theme.date({isFirstItem})
                }}
            />
            {(description) && (
                <Div theme={{
                    ...archiveListingStyle.excerpt,
                    ...genericNewsListingItemStyle.excerpt,
                    ...theme.excerpt
                }}>
                    {excerpt(description)}&#8230;
                </Div>
            )}
        </Div>
        {image && (
            <ArchiveListingTeaserThumbnail
                img={image}
                theme={{
                    ...genericNewsListingItemStyle.thumbnail({isFirstItem}),
                    ...theme.thumbnail({isFirstItem})
                }}
            />
        )}
    </ArchiveListingWrapper>

NewsListing.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    type: PropTypes.array,
    image: PropTypes.object,
    description: PropTypes.string,
    isFirstItem: PropTypes.bool,
    theme: PropTypes.object,
}

NewsListing.defaultProps = {
    theme: {
        title: () => {},
        date: () => {},
        thumbnail: () => {},
        source: {},
    },
}

export default NewsListing