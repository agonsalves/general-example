import {
    searchPortalCloseVariants,
    searchPortalVariants
}                           from 'animations/portal'
import idx                  from 'idx'
import ArchiveSearchToggle  from 'Main/ArchiveSearchToggle'
import BlogCategories       from 'Marquee/BlogSearch/BlogCategories'
import React, {useEffect}   from 'react'
import {connect}            from 'react-redux'
import Div                  from 'Shared/Div'
import H2                   from 'Shared/H2'
import Icon                 from 'Shared/Icon'
import MotionDiv            from 'Shared/MotionDiv'
import Overlay              from 'Shared/Overlay'
import Span                 from 'Shared/Span'
import usePortal            from 'utils/usePortal'
import {timesLight}         from 'variables/iconLibrary'
import {archiveSearchStyle} from '../ArchiveSearch/styles'
import BlogSearchForm       from './BlogSearchForm'
import {
    blogSearchCategoriesStyle,
    blogSearchToggleStyle
}                           from './styles'

const BlogSearch = ({post, query}) => {
    const {Portal, closePortal, openPortal, isOpen} = usePortal({
        bindTo: document && document.getElementById('modal')
    })

    useEffect(() => {
        closePortal()
    }, [query, closePortal])

    return (
        <>
            <ArchiveSearchToggle
                open={openPortal}
                theme={blogSearchToggleStyle}
                isOpen={isOpen}
                postType="blog-post"
                label="Categories / Search"
            />
            {isOpen && (
                <>
                    <Portal>
                        <MotionDiv
                            initial="closed"
                            animate={isOpen ? 'open' : 'closed'}
                            variants={searchPortalVariants}
                            transition={{ease: 'easeOut'}}
                            theme={archiveSearchStyle.panel}
                        >
                            <Div theme={archiveSearchStyle.panelInner}>
                                <MotionDiv
                                    animate={isOpen ? 'open' : 'closed'}
                                    variants={searchPortalCloseVariants}
                                    theme={{position: 'absolute', opacity: 0, right: 0}}
                                >
                                    <Span theme={archiveSearchStyle.panelClose} onClick={() => closePortal()}>
                                        <Icon icon={timesLight} theme={archiveSearchStyle.panelCloseIcon}/>
                                    </Span>
                                </MotionDiv>
                                <H2 theme={archiveSearchStyle.portalHeading}>
                                    Search Blog
                                </H2>
                                <BlogSearchForm post={post}/>
                                {post.parentPost.related_categories && (
                                    <BlogCategories
                                        categories={post.parentPost.related_categories}
                                        theme={blogSearchCategoriesStyle}
                                        post={post}
                                    />
                                )}
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
        </>
    )
}

const mapStateToProps = ({post}) => ({
    query: idx(post, _ => _.search.query) || {},
})

export default connect(mapStateToProps)(BlogSearch)