import React, {
    useContext,
    useLayoutEffect,
}                           from 'react'
import {useSelector}        from 'react-redux'
import {mobileFlag}         from 'redux/selectors'
import {history}            from 'redux/store'
import Div                  from 'Shared/Div'
import Icon                 from 'Shared/Icon'
import LinkSwitch           from 'Shared/LinkSwitch'
import Span                 from 'Shared/Span'
import {stripLastSlug}      from 'utils/url'
import {
    longArrowAltLeft,
    longArrowAltRight,
    timesLight
}                           from 'variables/iconLibrary'
import {DetailFrameContext} from '../index'
import {
    micrositeDetailNavStyle,
    micrositeDetailTopBarStyle
}                           from './styles'

const DetailFrameNavigation = ({post, next, prev, setDirection}) => {
    const listingPage = post.detailPage && post.microsite_pages?.find(page => page.slug === stripLastSlug(post.detailPage.slug))
    const isMobile = useSelector(mobileFlag)
    const {detailFrameInnerRef} = useContext(DetailFrameContext)

    const navigationSequence = (direction) => {
        setTimeout(() => {
            setAnimationDirection(direction)
            loadNewUrl(direction)
        }, 700)
    }

    const setAnimationDirection = (action) => {
        setDirection(action)
    }

    const loadNewUrl = (direction) => {
        history.push(direction.url)
    }

    useLayoutEffect(() => {
        setTimeout(() => {
            if (!!detailFrameInnerRef && detailFrameInnerRef.current !== null)
                detailFrameInnerRef.current.scrollIntoView({behavior: 'smooth'})
        }, 500)
    }, [detailFrameInnerRef])

    return (
        <Div theme={micrositeDetailTopBarStyle}>
            <Div theme={micrositeDetailTopBarStyle.title}>
                <Span theme={micrositeDetailTopBarStyle.name}>
                    {`${post.post_title}`}
                </Span>
                {!isMobile && (
                    <>/</>
                )}
                <Span theme={micrositeDetailTopBarStyle.type}>
                    {(!!listingPage && listingPage.post_title) || 'People'}
                </Span>
            </Div>
            <Div theme={micrositeDetailNavStyle}>
                {(next || prev) && (
                    <>
                        <LinkSwitch
                            theme={micrositeDetailNavStyle.prev(prev)}
                            onClick={() =>
                                !!prev && navigationSequence({url: prev, init: '100%', exit: '-100%'})}
                        >
                            <Icon
                                icon={longArrowAltLeft}
                                theme={micrositeDetailNavStyle.prevIcon(prev)}
                            />
                            <span>Prev</span>
                        </LinkSwitch>
                        <LinkSwitch
                            theme={micrositeDetailNavStyle.next(next)}
                            onClick={() =>
                                !!next && navigationSequence({url: next, init: '-100%', exit: '100%'})}
                        >
                            <span>Next</span>
                            <Icon
                                icon={longArrowAltRight}
                                theme={micrositeDetailNavStyle.nextIcon(next)}
                            />
                        </LinkSwitch>
                    </>
                )}

            </Div>
            <LinkSwitch url={post.slug} theme={micrositeDetailTopBarStyle.close}>
                <Icon icon={timesLight} theme={micrositeDetailTopBarStyle.closeIcon}/>
            </LinkSwitch>
        </Div>
    )
}

export default DetailFrameNavigation