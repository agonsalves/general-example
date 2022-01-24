import {ScrollContext}     from 'Controllers/MicrositeScrollController'
import PropTypes           from 'prop-types'
import React, {
    memo,
    useContext,
    useEffect,
    useRef,
    useState
}                          from 'react'
import {
    connect,
    useSelector
}                          from 'react-redux'
import {mobileFlag}        from 'redux/selectors'
import Div                 from 'Shared/Div'
import Li                  from 'Shared/Li'
import Ul                  from 'Shared/Ul'
import smoothscroll        from 'smoothscroll-polyfill'
import {
    isBlog,
    isInternetExplorer,
    isPersonMicrosite,
    isPracticeMicrosite
}                          from 'utils/flags'
import {sv}                from 'utils/themer'
import {useScrollPosition} from 'utils/useScrollPosition'
import {globals}           from 'variables/styles'
import MicrositeNavLink    from './MicrositeNavLink'
import {
    micrositeMenuOverflowStyle,
    micrositeMenuStyle,
    micrositeMenuWrapperStyle
}                          from './styles'

smoothscroll.polyfill()

const MicrositeMenu = memo(({post, theme, setIsOpen, adminUrl, pathname}) => {
    const isMobile = useSelector(mobileFlag)
    const micrositeMenuWrapperRef = useRef()
    const micrositeMenuListRef = useRef()
    const [isScrolled, setIsScrolled] = useState(false)
    const {sectionOffset, updateSectionOffset} = useContext(ScrollContext)
    const [scrollPosition, setScrollPosition] = useState({})
    const [activeMap, setActiveMap] = useState([])
    const [showArrows, setShowArrows] = useState(false)

    useScrollPosition(({currPos}) => setScrollPosition(Math.abs(currPos.y)))

    useEffect(() => {
        updateSectionOffset()

        setActiveMap(sectionOffset?.map((s) => {
            let scrollPo = scrollPosition + s.micrositeMenuOffset
            let sibOff = !!s.siblingOffset ? s.siblingOffset : 100000000 // last item sibling value is NAN give alt
                                                                         // value larger than any page length
            let sOffset = s.offset

            if (!!adminUrl) {
                return {
                    slug: s.slug,
                    isActive: scrollPo >= (sOffset - 32) && scrollPo < (sibOff - 32) // 32 is the size of adminBar
                }
            } else {
                return {
                    slug: s.slug,
                    isActive: scrollPo >= (sOffset) && scrollPo < (sibOff)
                }
            }
        }))
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [scrollPosition])


    const isOverflow = () => {
        let total = 0
        const listItems = micrositeMenuListRef?.current?.childNodes
        listItems && listItems.forEach(item => total += item.clientHeight)

        setShowArrows(micrositeMenuListRef.current?.clientHeight < (total - 1))
    }

    useEffect(() => {
        isOverflow()
        window.addEventListener('resize', () =>
            isOverflow()
        )
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [])

    //position sticky hack for IE
    if (isInternetExplorer()) {
        useScrollPosition(({currPos}) => {
            let mainOffSetHeight = micrositeMenuWrapperRef.current.offsetParent.clientHeight
            let marqueeOffSetHeight = micrositeMenuWrapperRef.current.offsetParent.offsetParent.children[5].offsetHeight
            let scrolledToBottom = Math.abs(currPos.y - marqueeOffSetHeight) > mainOffSetHeight - marqueeOffSetHeight
            let scrolledFromTop = currPos.y <= 190

            if (scrolledToBottom) {
                setIsScrolled(false)
            } else {
                setIsScrolled(scrolledFromTop)
            }
        }, [], micrositeMenuWrapperRef)

        useEffect(() => {
            micrositeMenuWrapperRef.current.children[0].style.position = isScrolled ? 'fixed' : 'relative'
            micrositeMenuWrapperRef.current.children[0].style.marginTop = isScrolled ? 0 : sv(-205, globals.style.layoutScalingValue)
        }, [isScrolled])
    }

    const micrositeMenu = () =>
        <Div
            theme={
                showArrows && !isMobile
                    ? {
                        ...micrositeMenuStyle,
                        ...micrositeMenuOverflowStyle,
                        ...theme
                    }
                    : {
                        ...micrositeMenuStyle,
                        ...theme
                    }
            }
        >
            <Ul theme={{...micrositeMenuStyle.list, ...theme.list}} ref={micrositeMenuListRef}>
                {!isBlog(post) && (
                    <Li theme={{...micrositeMenuStyle.item, ...theme.item}}>
                        <MicrositeNavLink
                            url={isPracticeMicrosite(post) ? null : post.slug}
                            microsite={post.slug}
                            isActive={activeMap?.find(active => active.slug === post.slug)?.isActive}
                            setIsOpen={setIsOpen}
                            onClick={() => isPracticeMicrosite(post) ? window.scroll({
                                top: 0,
                                left: 0,
                                behavior: 'smooth'
                            }) : null}
                        >
                            {isPersonMicrosite(post) ? 'Biography' : 'Overview'}
                        </MicrositeNavLink>
                    </Li>
                )}

                {isBlog(post) && (
                    <Li theme={{...micrositeMenuStyle.item, ...theme.item}}>
                        <MicrositeNavLink
                            url={post.slug}
                            microsite={post.slug}
                            isActive={pathname === post.slug}
                            setIsOpen={setIsOpen}
                            post={post}
                        >
                            Blog Posts
                        </MicrositeNavLink>
                    </Li>
                )}
                {post.microsite_pages && post.microsite_pages.map(item =>
                    (!item.hasOwnProperty('page') || parseInt(item.page) === 1) && (
                        <Li key={item.id} theme={{...micrositeMenuStyle.item, ...theme.item}}>
                            {!isMobile ? (
                                <MicrositeNavLink
                                    url={item.slug}
                                    microsite={post.slug}
                                    isActive={activeMap?.find(active => active.slug === item.slug)?.isActive}
                                    setIsOpen={setIsOpen}
                                    post={post}
                                >
                                    {item.post_title}
                                </MicrositeNavLink>
                            ) : (
                                <MicrositeNavLink
                                    url={item.slug}
                                    microsite={post.slug}
                                    isActive={pathname.includes(item.post_name)}
                                    setIsOpen={setIsOpen}
                                    post={post}
                                >
                                    {item.post_title}
                                </MicrositeNavLink>
                            )}
                        </Li>
                    )
                )}
            </Ul>
        </Div>

    return (isInternetExplorer() && (
        <Div theme={micrositeMenuWrapperStyle} ref={micrositeMenuWrapperRef}>
            {micrositeMenu()}
        </Div>
    )) || (
        <> {micrositeMenu()}</>
    )
})

MicrositeMenu.displayName = 'MicrositeMenu'

MicrositeMenu.propTypes = {
    post: PropTypes.object.isRequired,
    theme: PropTypes.object,
}

MicrositeMenu.defaultProps = {
    theme: {},
}

const mapStateToProps = ({site, router}) => ({
    adminUrl: site.adminUrl,
    pathname: router.location.pathname,
})

export default connect(mapStateToProps)(MicrositeMenu)