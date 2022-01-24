import {peopleMenuPanelStyle}          from 'Header/HeaderMenuPanels/MenuPanelPeople/styles'
import idx                             from 'idx'
import ArchiveSearchQuery              from 'Main/ArchiveSearchQuery'
import PostContent                     from 'Main/PostContent'
import SearchResults                   from 'Main/SearchResults'
import {archiveSearchStyle}            from 'Marquee/ArchiveSearch/styles'
import React, {useEffect}              from 'react'
import {useSelector}                   from 'react-redux'
import connect                         from 'react-redux/es/connect/connect'
import {mobileFlag}                    from 'redux/selectors'
import Div                             from 'Shared/Div'
import H2                              from 'Shared/H2'
import Icon                            from 'Shared/Icon'
import MotionDiv                       from 'Shared/MotionDiv'
import Overlay                         from 'Shared/Overlay'
import PeopleSearchAlphabet            from 'Shared/PeopleSearchAlphabet'
import Span                            from 'Shared/Span'
import PeopleSearchWidget              from 'Sidebars/PeopleSearchWidget'
import {peopleSearchReviseWidgetStyle} from 'Sidebars/PeopleSearchWidget/styles'
import {isEmpty}                       from 'utils/helpers'
import usePortal                       from 'utils/usePortal'
import {
    chevronDownLight,
    timesLight
}                                      from 'variables/iconLibrary'
import {
    peopleSearchResultsStyle,
    peopleSearchReviseCloseIconStyle,
    peopleSearchReviseCloseStyle,
    peopleSearchRevisePanelStyle,
    peopleSearchReviseStyle,
    peopleSearchReviseStyleToggleStyle,
    peopleSearchReviseWrapperStyle
}                                      from './styles'

const PeopleSearchResults = ({post, query}) => {
    const isMobile = useSelector(mobileFlag)
    const {Portal, closePortal, openPortal, isOpen} = usePortal({
        bindTo: document && document.getElementById('modal')
    })

    const searchPortalVariants = {
        open: {
            opacity: 1,
            height: 'auto',
            transition: {
                duration: .8,
                ease: [0.17, 0.67, 0.83, 0.67]
            },
            transitionEnd: {overflow: 'visible'}
        },
        closed: {
            opacity: 0,
            height: 0,
            overflow: 'hidden',
            transition: {duration: .8}
        }
    }

    const searchPortalCloseVariants = {
        open: {
            opacity: 1,
            transition: {
                duration: .8,
                delay: .8,
            }
        },
        closed: {
            opacity: 0
        }
    }

    useEffect(() => {
        closePortal()
    }, [query, closePortal])


    return (
        <PostContent post={post}>
            <H2 theme={peopleSearchResultsStyle.heading}>Search Results</H2>
            {!isEmpty(query.search) && (
                <Div theme={peopleSearchReviseWrapperStyle}>
                    <ArchiveSearchQuery
                        query={query}
                        theme={peopleSearchResultsStyle.query}
                        post={post}
                    />
                    <Span theme={peopleSearchReviseStyleToggleStyle} onClick={(e) => openPortal(e)}>
                        Revise Search
                        <Icon icon={chevronDownLight} theme={peopleSearchReviseStyleToggleStyle.icon}/>
                    </Span>
                </Div>
            )}
            <SearchResults
                hasClearResults={isMobile}
                post={post}
                theme={peopleSearchResultsStyle}
            />
            {isOpen && (
                <>
                    <Portal>
                        <MotionDiv
                            initial="closed"
                            animate={isOpen ? 'open' : 'closed'}
                            variants={searchPortalVariants}
                            transition={{ease: 'easeOut'}}
                            theme={{...peopleSearchRevisePanelStyle}}
                        >
                            <MotionDiv
                                animate={isOpen ? 'open' : 'closed'}
                                variants={searchPortalCloseVariants}
                                theme={{position: 'absolute', opacity: 0, right: 0}}
                            >
                                <Span theme={peopleSearchReviseCloseStyle} onClick={() => closePortal()}>
                                    <Icon icon={timesLight} theme={peopleSearchReviseCloseIconStyle}/>
                                </Span>
                            </MotionDiv>
                            <H2 theme={archiveSearchStyle.portalHeading}>Revise Search</H2>
                            <Div theme={{display: 'flex', flexDirection: 'column'}}>
                                <PeopleSearchWidget post={post} theme={peopleSearchReviseWidgetStyle}/>
                                <PeopleSearchAlphabet
                                    theme={{...peopleMenuPanelStyle.alphabet, ...peopleSearchReviseStyle.alphabet}}/>
                            </Div>
                        </MotionDiv>
                    </Portal>
                    <Overlay
                        isOpen={isOpen}
                        closePortal={closePortal}
                        theme={{backgroundColor: 'rgba(0,0,0,.5)}}'}}
                    />
                </>
            )}
        </PostContent>
    )
}

const mapStateToProps = ({router}, {post}) => ({
    query: idx(post, _ => _.search.query) || {}
})

export default connect(mapStateToProps)(PeopleSearchResults)