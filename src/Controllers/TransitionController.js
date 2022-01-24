import {useAnimation}           from 'framer-motion'
import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState
}                               from 'react'
import {useSelector}            from 'react-redux'
import {
    getCurrentPost,
    mobileFlag
}                               from '../redux/selectors'
import {
    isMicrositeDetail,
    isSameSection
}                               from '../utils/flags'
import {getScrollbarWidth}      from '../utils/getScrollBarWidth'
import {scrollToTop}            from '../utils/scrollToTop'
import {white}                  from '../utils/themer'
import {globals}                from '../variables/styles'
import {headerMenuPanelContext} from './HeaderMenuPanelController'
import {ScrollContext}          from './MicrositeScrollController'

export const TransitionAnimations = createContext({})

const overlayFadeout = {
    opacity: 0,
    transition: {
        ease: 'easeOut',
        duration: .7,
        delay: .3
    },
    transitionEnd: {
        height: 0,
        opacity: 1
    }
}

const TransitionController = props => {
    const isMobile = useSelector(mobileFlag)
    const post = useSelector(getCurrentPost)
    const {resetActiveMap} = useContext(ScrollContext)
    const [currPost, setCurrPost] = useState(post)
    const [isScrolled, setIsScrolled] = useState(false)
    const contentAnimation = useAnimation()
    const overlayAnimation = useAnimation()
    const mobileMenuAnimation = useAnimation()
    const detailFrameAnimation = useAnimation()
    const detailFrameOverlayAnimation = useAnimation()
    const {setPanel} = useContext(headerMenuPanelContext)
    const {setGlobalSearchOpen} = useContext(headerMenuPanelContext)
    const emptyPromise = new Promise((resolve, reject) => {
        resolve()
    })


    const pageInit = useMemo(() => async () => {
        await detailFrameOverlayAnimation.set({opacity: 0})
        await detailFrameAnimation.set({x: '-100%'})
        window.scrollTo(0, 0)
        setCurrPost(post)

        if (!isMobile)
            await overlayAnimation.start(overlayFadeout)

        /* eslint-disable react-hooks/exhaustive-deps */
    }, [overlayAnimation, post, isMobile])

    const pageOut = useMemo(() => async () => {
        if (!isMobile) {
            await setPanel('')
            await resetActiveMap()
            await setGlobalSearchOpen(false)
            await globals.resetBody()
            await overlayAnimation.set({height: 0, opacity: 0})
            await overlayAnimation.start({
                opacity: 1,
                height: '100vh',
                transition: {
                    duration: .3,
                    ease: 'easeOut',
                }
            })
            pageInit()
        } else {
            pageInit()
            await mobileMenuAnimation.start({height: '0', transition: {duration: .5}})
        }

    }, [overlayAnimation, mobileMenuAnimation, pageInit, isMobile])

    const intraSection = useCallback(async () => {
        if (!isMobile) {
            await setPanel('')
            await globals.resetBody()
            await contentAnimation.start({opacity: 0})
            if (isScrolled) {
                await overlayAnimation.set({
                    backgroundColor: '#ffffff',
                    height: '100vh',
                    opacity: 1
                })
                await setTimeout(() => scrollToTop(), 0)
                await setCurrPost(post)
                await overlayAnimation.start({
                    opacity: 0,
                    transition: {
                        duration: .8
                    }
                })
                await overlayAnimation.set({
                    backgroundColor: white,
                    height: 0,
                    opacity: 1
                })
            } else {
                await setCurrPost(post)
            }
            await contentAnimation.start({opacity: 1})
        } else {
            await setCurrPost(post)
            await contentAnimation.set({opacity: 1})
        }

        await setCurrPost(post)

    }, [contentAnimation, setCurrPost, post, isScrolled, overlayAnimation, isMobile])


    const initFrame = useCallback(async () => {
        detailFrameOverlayAnimation.set({opacity: 0})
        detailFrameAnimation.set({x: '-100%'})
        await setCurrPost(post)
        await emptyPromise.then(() => {
            document.body.style.paddingRight = getScrollbarWidth() + 'px'
            document.body.style.overflowY = 'hidden'
        })
        await detailFrameAnimation.start({
            x: '0%',
            transition: {
                ease: 'easeOut'
            }
        })
        await detailFrameOverlayAnimation.start({opacity: .5, transition: {duration: .5}})
    }, [detailFrameAnimation, setCurrPost, post])

    const closeFrame = useCallback(async () => {
        await emptyPromise.then(() => {
            document.body.style.overflowY = 'scroll'
            document.body.style.paddingRight = '0'
        })
        await detailFrameOverlayAnimation.start({opacity: 0, transition: {duration: .25}})
        await detailFrameAnimation.start({
            x: '-100%',
            overflowY: 'hidden',
            transition: {
                ease: 'easeOut'
            }
        })

        await setCurrPost(post)
    }, [detailFrameAnimation, setCurrPost, post])

    const intraDetail = useCallback(async () => {
        await setCurrPost(post)
    }, [setCurrPost, post])

    useEffect(() => {
        pageInit()
        if (isMicrositeDetail(post)) {
            initFrame()
        }
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [])


    useEffect(() => {
        if (post.key !== currPost.key) {
            const isMatchToggle = post.key.includes('/?s') && currPost.key.includes('/?s')

            if (!isSameSection(post, currPost) && !isMatchToggle) {
                pageOut()
            } else {
                intraSection()
            }
        } else if (isMicrositeDetail(post)) {
            if (isMicrositeDetail(currPost)) {
                intraDetail()
            } else {
                initFrame()
            }
        } else if (isMicrositeDetail(currPost)) {
            closeFrame()
        }

    }, [post, currPost, isMobile, pageOut, intraSection, initFrame, closeFrame, intraDetail])

    return (
        <TransitionAnimations.Provider value={{
            overlayAnimation,
            contentAnimation,
            mobileMenuAnimation,
            detailFrameAnimation,
            detailFrameOverlayAnimation,
            post: currPost,
            setIsScrolled,
            isScrolled
        }} {...props}/>
    )
}

export default TransitionController