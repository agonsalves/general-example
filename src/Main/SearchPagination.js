import PropTypes         from 'prop-types'
import React             from 'react'
import Div               from 'Shared/Div'
import Icon              from 'Shared/Icon'
import LinkSwitch        from 'Shared/LinkSwitch'
import Span              from 'Shared/Span'
import {
    longArrowLeft,
    longArrowRight
}                        from 'variables/iconLibrary'
import {paginationStyle} from './Pagination/styles'

const SearchPagination = ({slug, query, theme}) => {
    const {from, total, size, search} = query

    const page = Math.ceil(from / size) + 1

    const buildQuery = () => {
        let queryString = []
        Object.keys(search).map(item => {
            if (search.hasOwnProperty(item))
                queryString.push(`search[${item}]=${search[item]}`)

            return null
        })
        return queryString.join('&')
    }

    const getNextUrl = () => `${slug}?${buildQuery()}&from=${from + size}`
    const getPrevUrl = () => `${slug}?${buildQuery()}&from=${(page - 2) * size}`
    const pageCount = () => Math.ceil(total / size)
    const hasNext = () => page < pageCount()
    const hasPrev = () => page > 1

    return (
        <Div theme={{...paginationStyle, ...theme}}>
            <Div
                theme={{...paginationStyle.pageNumber, ...theme.pageNumber}}>Page {page}<span>/{pageCount()}</span></Div>
            {(hasPrev() || hasNext()) && (
                <Span theme={{...paginationStyle.inner, ...theme.inner}}>
                    {hasPrev() && (
                        <LinkSwitch url={getPrevUrl()} theme={{...paginationStyle.prev, ...theme.prev}}>
                            <Icon icon={longArrowLeft} theme={{...paginationStyle.prev.icon, ...theme.icon}}/>
                        </LinkSwitch>
                    )}
                    {hasNext() && (
                        <LinkSwitch url={getNextUrl()} theme={{...paginationStyle.next, ...theme.next}}>
                            <Icon icon={longArrowRight} theme={{...paginationStyle.next.icon, ...theme.icon}}/>
                        </LinkSwitch>
                    )}
                </Span>
            )}
        </Div>
    )
}

SearchPagination.propTypes = {
    slug: PropTypes.string,
    query: PropTypes.object,
    theme: PropTypes.object,
}

SearchPagination.defaultProps = {
    theme: {}
}

export default SearchPagination