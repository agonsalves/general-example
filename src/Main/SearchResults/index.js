import idx                         from 'idx'
import ArchiveSearchQuery          from 'Main/ArchiveSearchQuery'
import SearchPagination            from 'Main/SearchPagination'
import SearchListing               from 'Main/SearchResults/SearchListing'
import {
    blogSearchQuery,
    genericSearchResultsStyle
}                                  from 'Main/SearchResults/styles'
import PropTypes                   from 'prop-types'
import React                       from 'react'
import {
    connect,
    useSelector
}                                  from 'react-redux'
import {mobileFlag}                from 'redux/selectors'
import Div                         from 'Shared/Div'
import Icon                        from 'Shared/Icon'
import LinkSwitch                  from 'Shared/LinkSwitch'
import PracticeSearchWidget        from 'Sidebars/PracticeSearchWidget'
import {practiceSearchResultStyle} from 'Templates/ArchiveSearchResults/styles'
import {
    isBlog,
    isPeopleSearch,
    isPracticeSearch
}                                  from 'utils/flags'
import {isEmpty}                   from 'utils/helpers'
import {longArrowRight}            from 'variables/iconLibrary'

const SearchResults = ({query, results, theme, hasClearResults, post, postsPerPage}) => {
    const isMobile = useSelector(mobileFlag)
    return (
        <Div theme={{...genericSearchResultsStyle, ...theme}}>
            {!isEmpty(query.search) && !isPeopleSearch(post) && (
                <ArchiveSearchQuery
                    post={post}
                    query={query}
                    theme={isPracticeSearch(post)
                        ? {...practiceSearchResultStyle.query}
                        : isBlog(post)
                            ? {...blogSearchQuery}
                            : {...theme.query}
                    }
                />
            )}
            {isPracticeSearch(post) && isMobile && (
                <PracticeSearchWidget/>
            )}
            {isPeopleSearch(post) && hasClearResults && (
                <LinkSwitch
                    url={'/people?search[post_type]=person'}
                    theme={{...genericSearchResultsStyle.searchAgain, ...theme.searchAgain}}>
                    View All {post.post_title}
                    <Icon
                        icon={longArrowRight}
                        theme={{...genericSearchResultsStyle.buttonIcon, ...theme.buttonIcon}}
                    />
                </LinkSwitch>
            )}
            {idx(results, _ => _[query.search.post_type].hits.map(({_source: result}, index) =>
                <SearchListing
                    key={result.slug}
                    theme={theme.listing}
                    item={result}
                    postType={query.search.post_type}
                    post={post}
                    index={index}
                />
            ))}
            {query.total > postsPerPage && (
                <SearchPagination
                    slug={post.slug}
                    query={post.search?.query}
                    theme={theme.pagination}
                />
            )}
        </Div>
    )
}


SearchResults.propTypes = {
    theme: PropTypes.object,
    results: PropTypes.object.isRequired,
    hasClearResults: PropTypes.bool,
    post: PropTypes.object.isRequired,
    postsPerPage: PropTypes.number.isRequired
}

SearchResults.defaultProps = {
    theme: {},
    hasClearResults: true,
}

const mapStateToProps = ({router, site}, {post}) => ({
    query: idx(post, _ => _.search.query) || {},
    results: idx(post, _ => _.search.results) || {},
    postsPerPage: site.config.postsPerPage
})

export default connect(mapStateToProps)(SearchResults)