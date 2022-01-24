import {TransitionAnimations}  from 'Controllers/TransitionController'
import React, {
    useContext,
    useRef
}                              from 'react'
import {useSelector}           from 'react-redux'
import {mobileFlag}            from 'redux/selectors'
import Div                     from 'Shared/Div'
import MobileMicrositeMenu     from 'Shared/MobileMicrositeMenu'
import {
    hasAboveMenu,
    hasArchiveSearch,
    hasMicrositeMenu,
    isArchiveDetail,
    isBlog,
    isBlogMainPage,
    isGlobalSearch
}                              from 'utils/flags'
import useMeasure              from 'utils/useMeasure'
import {useScrollPosition}     from 'utils/useScrollPosition'
import AboveContentMenu        from './AboveContentMenu'
import ArchiveDetailBreadcrumb from './ArchiveDetailBreadcrumb'
import ArchiveSearch           from './ArchiveSearch'
import BlogMenu                from './BlogMenu'
import BlogSearch              from './BlogSearch'
import GlobalSearchMode        from './GlobalSearchMode'
import MobileAboutMenu         from './MobileAboutMenu'
import MobileBlogMenu          from './MobileBlogMenu'
import {marqueeStyleSwitch}    from './styles'
import Title                   from './Title'

const Marquee = () => {
    const {post, setIsScrolled} = useContext(TransitionAnimations)
    const isMobile = useSelector(mobileFlag)
    const elementRef = useRef(null)
    const {height, top} = useMeasure(elementRef)
    const blogSlug = isBlogMainPage(post)
        ? post.parentPost.microsite_pages[0].microsite
        : post?.microsite || post?.parent_blog?.slug

    useScrollPosition(
        ({currPos}) => {
            setIsScrolled(currPos.y + height + top < 0)
        }, [height, top], elementRef
    )

    return (
        <Div
            className="marquee"
            theme={marqueeStyleSwitch(post)}
            ref={elementRef}
        >
            <Div theme={marqueeStyleSwitch(post).inner}>
                <Title post={post} key={post.parentPost && post.parentPost.id}/>
                {isArchiveDetail(post) && (
                    <ArchiveDetailBreadcrumb post={post}/>
                )}
                {hasArchiveSearch(post) && (
                    <ArchiveSearch post={post}/>
                )}
                {isGlobalSearch(post) && (
                    <GlobalSearchMode post={post}/>
                )}
                {isBlog(post) && (
                    <BlogSearch post={post}/>
                )}
                {hasMicrositeMenu(post) && !isBlog(post) && isMobile && (
                    <MobileMicrositeMenu post={post}/>
                )}
                {(hasAboveMenu(post)
                    && ((isMobile && (
                        <MobileAboutMenu post={post} panelName="mobile-about-menu"/>
                    )) || (
                        <AboveContentMenu post={post}/>
                    ))
                )}
            </Div>
            {(isBlog(post)
                && ((isMobile && (
                    <MobileBlogMenu
                        panelName="mobile-about-menu"
                        pages={post.parentPost.microsite_pages}
                        blogSlug={blogSlug}
                        postSlug={post.slug}
                    />
                )) || (
                    <BlogMenu
                        pages={post.parentPost.microsite_pages}
                        blogSlug={blogSlug}
                        postSlug={post.slug}
                    />
                ))
            )}
        </Div>
    )
}

export default Marquee