import PropTypes                     from 'prop-types'
import React                         from 'react'
import Div                           from 'Shared/Div'
import Span                          from 'Shared/Span'
import {excerpt}                     from 'utils/helpers'
import ArchiveDateAndSource          from '../ArchiveDateAndSource'
import ArchiveListingTeaserThumbnail from '../ArchiveListingTeaserThumbnail'
import ArchiveListingWrapper         from '../ArchiveListingWrapper'
import {archiveListingStyle}         from '../ArchiveListingWrapper/styles'
import BlogPostByline                from '../BlogPostByline'
import {blogPostListingStyle}        from './styles'

const BlogPostListing = ({
                             title,
                             url,
                             authors,
                             guestAuthors,
                             outsideAuthors,
                             image,
                             description,
                             date,
                             categories,
                             theme
                         }) => {
    return (
        <ArchiveListingWrapper theme={theme} url={url}>
            {image && (
                <ArchiveListingTeaserThumbnail img={image} theme={theme.thumbnail}/>
            )}
            <Div theme={{...archiveListingStyle.textWrapper, ...theme.textWrapper}}>
                {categories && (
                    <Div className="archive-accent" theme={blogPostListingStyle.categoryWrapper}>
                        <Div className="archive-accent" theme={blogPostListingStyle.category}>
                            {categories[0].term}
                        </Div>
                    </Div>
                )}
                <Div
                    theme={{
                        ...archiveListingStyle.title,
                        ...blogPostListingStyle.title,
                        ...theme.title
                    }}
                    children={title}
                />
                {!image && !!description && (
                    <Span
                        theme={{
                            ...archiveListingStyle.excerpt,
                            ...blogPostListingStyle.excerpt,
                            ...theme.excerpt
                        }}
                    >
                        {excerpt(description)}&#8230;
                    </Span>
                )}
                <ArchiveDateAndSource
                    date={date}
                    theme={{...blogPostListingStyle.dateAndSource, ...theme.dateAndSource}}
                />
                {(authors || guestAuthors || outsideAuthors) && (
                    <BlogPostByline
                        authors={authors}
                        guestAuthors={guestAuthors}
                        outsideAuthors={outsideAuthors}
                        theme={{...archiveListingStyle.byline, ...theme.byline}}
                    />
                )}
            </Div>
        </ArchiveListingWrapper>
    )
}


BlogPostListing.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    image: PropTypes.object,
    authors: PropTypes.array,
    guestAuthors: PropTypes.array,
    outsideAuthors: PropTypes.array,
    description: PropTypes.string,
    theme: PropTypes.object
}

BlogPostListing.defaultProps = {
    theme: {},
}

export default BlogPostListing