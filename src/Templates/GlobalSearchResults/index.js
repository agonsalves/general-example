import Div                 from 'Shared/Div'
import SearchQuery         from 'Main/SearchQuery'
import PostContent         from 'Main/PostContent'
import PropTypes           from 'prop-types'
import React               from 'react'
import {isEmpty}           from 'utils/helpers'
import {postTypeConfig}    from 'variables/postTypes'
import GlobalSearchSection from './GlobalSearchSection'
import {globalSearchStyle} from './styles'

const isContentSection = (results, section) => results.hasOwnProperty(section) && section === 'categories'

const GlobalSearchResults = ({post}) => {
    const {results, query: queryObject} = post.search
    const {s: query} = queryObject
    return (
        <PostContent post={post}>
            {(results && !isEmpty(results) && (
                <>
                    <SearchQuery
                        query={query}
                        theme={globalSearchStyle.query}
                        post={post}
                    />
                    <Div theme={globalSearchStyle.container}>
                        {postTypeConfig.map(({name, plural}) =>
                            (results.hasOwnProperty(name) && name !== 'categories' && (
                                <GlobalSearchSection
                                    key={name}
                                    title={plural}
                                    results={results[name]}
                                    section={name}
                                    post={post}
                                />
                            ))
                            || (isContentSection(results, name) && Object.keys(results[name]).map(key =>
                                <GlobalSearchSection
                                    key={key}
                                    title={key}
                                    results={results[name][key]}
                                    section="page"
                                    post={post}
                                />
                            ))
                        )}
                    </Div>
                </>

            ))
            || (results && isEmpty(results) && (
                <>
                    There are no results for: {query}
                    {query.length <= 2 && (
                        <div>Your query must be at least 3 characters long.</div>
                    )}
                </>
            ))
            || <Div>Loading</Div>
            }
        </PostContent>
    )
}

GlobalSearchResults.propTypes = {
    post: PropTypes.object.isRequired
}

export default GlobalSearchResults