import Div                    from 'Shared/Div'
import MotionDiv              from 'Shared/MotionDiv'
import {TransitionAnimations} from 'Controllers/TransitionController'
import {AnimatePresence}      from 'framer-motion'
import PersonListing          from 'Shared/PersonListing'
import React, {
    createContext,
    useContext,
    useEffect,
    useState
}                             from 'react'
import LinkSwitch             from 'Shared/LinkSwitch'
import {isMicrositeDetail}    from 'utils/flags'
import {getUnique}            from 'utils/splitArray'
import {pageFrameStyle}       from '../Root/PageFrame/styles'
import DetailFrameInner       from './DetailFrameInner'
import DetailFrameNavigation  from './DetailFrameNavigation'
import {
    detailFrameOverlayLinkStyle,
    detailFrameOverlayStyle,
    detailFramePeopleWrapperStyle,
    detailFrameStyle,
    detailFrameWrapperStyle
}                             from './styles'

export const DetailFrameContext = createContext(null)

const DetailFrame = () => {
    const {post, detailFrameAnimation, detailFrameOverlayAnimation} = useContext(TransitionAnimations)
    let next = ''
    let prev = ''
    const [direction, setDirection] = useState('')
    const [featuredAndRelatedPeople, setFeaturedAndRelatedPeople] = useState([])
    const [detailFrameInnerRef, setDetailFrameInnerRef] = useState()
    const addRef = (ref) => setDetailFrameInnerRef(ref)
    const micrositePage = post.microsite_pages?.find(page => page.order?.includes(post.detailPage?.id))

    if (!!micrositePage) {
        const siblings = micrositePage.order.length - 1
        const currentIndex = micrositePage.order.indexOf(post.detailPage.id)
        if (!!siblings) {
            if (currentIndex < siblings)
                next = micrositePage.related_posts[currentIndex + 1].slug

            if (currentIndex > 0)
                prev = micrositePage.related_posts[currentIndex - 1].slug
        }
    }

    useEffect(() => {
        if (!!post?.featured_people && !!post?.detailPage?.related_people)
            setFeaturedAndRelatedPeople(getUnique(post?.featured_people?.concat(post?.detailPage?.related_people), 'slug'))

    }, [post])

    return (
        <DetailFrameContext.Provider value={{
            detailFrameInnerRef,
            addRef
        }}>
            <MotionDiv
                theme={detailFrameWrapperStyle}
                animate={detailFrameAnimation}
                className="microsite-detail-frame"
            >
                {isMicrositeDetail(post) && (
                    <Div theme={detailFrameStyle}>
                        <DetailFrameNavigation
                            post={post}
                            next={next}
                            prev={prev}
                            setDirection={setDirection}
                        />
                        <Div theme={{...pageFrameStyle.main(post), ...detailFrameStyle.main}}>
                            {(!(post.detailPage.template === 'microsite-people') && (
                                <AnimatePresence initial={false}>
                                    <DetailFrameInner
                                        post={post}
                                        key={prev || next}
                                        direction={direction}
                                    />
                                </AnimatePresence>
                            )) || (
                                <Div theme={detailFramePeopleWrapperStyle}>
                                    {(featuredAndRelatedPeople.length > 0
                                            ? featuredAndRelatedPeople
                                            : post?.detailPage?.related_people
                                    ).map((item, index) => (
                                        <PersonListing
                                            key={index}
                                            url={item.slug}
                                            headshot={item.thumbnail_teaser}
                                            name={item.post_title}
                                            position={item.alternate_title}
                                            phone={item.phone}
                                            email={item.email}
                                        />
                                    ))}
                                </Div>
                            )}
                        </Div>
                    </Div>
                )}
                <MotionDiv
                    animate={detailFrameOverlayAnimation}
                    theme={detailFrameOverlayStyle}
                >
                    <LinkSwitch
                        url={post.slug}
                        theme={detailFrameOverlayLinkStyle}
                        children={''}
                    />
                </MotionDiv>
            </MotionDiv>
        </DetailFrameContext.Provider>
    )
}

export default DetailFrame