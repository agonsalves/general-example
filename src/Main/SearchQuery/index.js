import PropTypes        from 'prop-types'
import React            from 'react'
import Div              from 'Shared/Div'
import Span             from 'Shared/Span'
import {isPeopleSearch} from 'utils/flags'
import LinkSwitch       from '../../Shared/LinkSwitch'
import {
    clearSearchQueryStyle,
    searchQueryStyle
}                       from './styles'

const SearchQuery = ({post, query, total, theme}) =>
    <Div theme={{...searchQueryStyle, ...theme}}>
        <Div>
            <em>
                {!isNaN(total) ? `${total} ` : ''}
                {(!isPeopleSearch(post) && (
                    <>
                        {!!query && 'Search'} Result{total !== 1 ? 's' : ''}
                    </>
                )) || (
                    <> profiles found </>
                )}
                {' '}
                {!!query && 'for:'}
            </em>
            {' '}
            <Span as="strong" theme={{...searchQueryStyle.query, ...theme.query}}>
                {query}
            </Span>
        </Div>
        {query && (
            <LinkSwitch
                theme={clearSearchQueryStyle}
                url={`?search[post_type]=${post?.search?.query?.search?.post_type}`}
            >
                Clear Results
            </LinkSwitch>
        )}
    </Div>

SearchQuery.propTypes = {
    query: PropTypes.string.isRequired,
    total: PropTypes.number,
    theme: PropTypes.object
}

SearchQuery.defaultProps = {
    theme: {},
    post: {}
}

export default SearchQuery