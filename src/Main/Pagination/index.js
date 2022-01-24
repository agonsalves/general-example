import PropTypes         from 'prop-types'
import React             from 'react'
import {connect}         from 'react-redux'
import Div               from 'Shared/Div'
import Icon              from 'Shared/Icon'
import LinkSwitch        from 'Shared/LinkSwitch'
import Span              from 'Shared/Span'
import {
    longArrowAltLeft,
    longArrowAltRight
}                        from 'variables/iconLibrary'
import {paginationStyle} from './styles'

const Pagination = ({post, theme, postsPerPage}) => {
    const page = parseInt(post.page)

    const baseSlug = post.hasOwnProperty('base_slug') ? post.base_slug : post.slug
    const getNextUrl = () => `${baseSlug}/page/${page + 1}`
    const getPrevUrl = () => page === 2 ? baseSlug : `${baseSlug}/page/${page - 1}`
    const pageCount = () => Math.ceil(post.total / postsPerPage)
    const hasNext = () => page < pageCount()
    const hasPrev = () => page > 1

    return (
        <Div theme={{...paginationStyle, ...theme}}>
            <Div theme={{...paginationStyle.pageNumber, ...theme.pageNumber}}>
                Page {page}<span>/{pageCount()}</span>
            </Div>
            {(hasPrev() || hasNext()) && (
                <Span theme={{...paginationStyle.inner, ...theme.inner}}>
                    {hasPrev() && (
                        <LinkSwitch url={getPrevUrl()} theme={{...paginationStyle.prev, ...theme.prev}}>
                            <Icon icon={longArrowAltLeft} theme={{...paginationStyle.prev.icon, ...theme.icon}}/>
                        </LinkSwitch>
                    )}
                    {hasNext() && (
                        <LinkSwitch url={getNextUrl()} theme={{...paginationStyle.next, ...theme.next}}>
                            <Icon icon={longArrowAltRight} theme={{...paginationStyle.next.icon, ...theme.icon}}/>
                        </LinkSwitch>
                    )}
                </Span>
            )}
        </Div>
    )
}

Pagination.propTypes = {
    page: PropTypes.number.isRequired,
    theme: PropTypes.object,
    postsPerPage: PropTypes.number
}

Pagination.defaultProps = {
    theme: {},
    page: 1
}

const mapStateToProps = ({site}) => ({
    postsPerPage: site.config.postsPerPage
})

export default connect(mapStateToProps)(Pagination)