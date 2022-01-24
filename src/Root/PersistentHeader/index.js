import {TransitionAnimations} from 'Controllers/TransitionController'
import {AnimatePresence}      from 'framer-motion'
import PropTypes              from 'prop-types'
import React, {
    useContext,
    useRef,
    useState
}                             from 'react'
import {
    connect,
    useSelector
}                             from 'react-redux'
import {mobileFlag}           from 'redux/selectors'
import Div                    from 'Shared/Div'
import EmailLink              from 'Shared/EmailLink'
import Icon                   from 'Shared/Icon'
import Img                    from 'Shared/Img'
import MobileMicrositeMenu    from 'Shared/MobileMicrositeMenu'
import MotionDiv              from 'Shared/MotionDiv'
import SquareHeadshot         from 'Shared/SquareHeadshot'
import {
    hasMicrositeMenu,
    isBlog,
    isMicrosite,
    isMicrositeDetail,
    isPersonMicrosite,
    isPracticeMicrosite
}                             from 'utils/flags'
import {
    composePersonTitle,
    plural
}                             from 'utils/helpers'
import {personPhoneList}      from 'utils/personPhoneList'
import {scrollToTop}          from 'utils/scrollToTop'
import {useScrollPosition}    from 'utils/useScrollPosition'
import {
    envelopeOpen,
    phone
}                             from 'variables/iconLibrary'
import {globals}              from 'variables/styles'
import FeaturedItems          from './FeaturedItems'
import {
    adminPersistentHeaderStyle,
    persistentHeaderFeaturedStyle,
    persistentHeaderMicrositeMenuStyle,
    persistentHeaderStyle,
    practicePersistentHeaderBackgroundStyle,
    practicePersistentNameStyle
}                             from './styles'

const persistentHeaderVariants = {
    initial: {
        height: 0,
        transition: {
            ease: 'easeOut',
        }
    },
    enter: {
        height: '100%',
        transition: {
            ease: 'easeOut'
        },
        transitionEnd: {
            overflow: 'visible'
        }
    },
    exit: {
        overflow: 'hidden',
        height: 0,
        transition: {
            ease: 'easeOut',
        }
    }
}

const PersistentHeader = ({isAdmin, manualHighlights, firmHighlightsMode}) => {
    const isMobile = useSelector(mobileFlag)
    const {post} = useContext(TransitionAnimations)
    const elementRef = useRef(null)
    const persistentHeaderRef = useRef(null)
    const [isScrolled, setIsScrolled] = useState(false)
    const numbers = personPhoneList(post)
    const [isPhoneHover, setIsPhoneHover] = useState(false)
    const highlights = (firmHighlightsMode === 'manual' && manualHighlights) || post.highlights

    useScrollPosition(({currPos}) => {
        const threshold = isPracticeMicrosite(post) ? globals.style.practiceMarqueePersistentOffset : 0
        setIsScrolled(currPos.y <= threshold)
    }, [], elementRef)

    return (
        <>
            <Div
                theme={persistentHeaderStyle.placeholder}
                ref={elementRef}
                key="persistent-header-placeholder"
            />
            <Div
                theme={
                    isAdmin
                        ? {...persistentHeaderStyle, ...adminPersistentHeaderStyle}
                        : {...persistentHeaderStyle}
                }
                ref={persistentHeaderRef}
            >
                <AnimatePresence>
                    {isMicrosite(post) && !isMicrositeDetail(post) && !isBlog(post) && isScrolled && (
                        <MotionDiv
                            theme={
                                isPracticeMicrosite(post) && isMobile
                                    ? {
                                        ...persistentHeaderStyle.inner,
                                        ...practicePersistentHeaderBackgroundStyle(post)
                                    } : {
                                        ...persistentHeaderStyle.inner
                                    }
                            }
                            key="persistent-header"
                            variants={persistentHeaderVariants}
                            initial="initial"
                            animate="enter"
                            exit="exit"
                        >
                            {!isMobile && !!post.headshot_photo && (
                                <>
                                    {isPersonMicrosite(post) && (
                                        <Div theme={persistentHeaderStyle.imageWrapper}>
                                            <SquareHeadshot
                                                name={post.post_title}
                                                image={post.headshot_photo}
                                                theme={persistentHeaderStyle.image}
                                                onClick={() => scrollToTop()}
                                            />
                                        </Div>
                                    )}
                                    {isPracticeMicrosite(post) && (
                                        <Div theme={persistentHeaderStyle.imageWrapper}>
                                            <Img
                                                image={post.industry_thumbnail}
                                                theme={persistentHeaderStyle.image}
                                                onClick={() => scrollToTop()}
                                            />
                                        </Div>
                                    )}

                                </>
                            )}
                            <Div theme={persistentHeaderStyle.info}>
                                {(isPracticeMicrosite(post) && !isMobile) && (
                                    <Div theme={{...persistentHeaderStyle.title, ...persistentHeaderStyle.type}}>
                                        {plural(post.post_type)}
                                    </Div>
                                )}
                                <Div theme={persistentHeaderStyle.infoInner}>
                                    <Div
                                        theme={isPracticeMicrosite(post)
                                            ? {
                                                ...persistentHeaderStyle.name,
                                                ...practicePersistentNameStyle
                                            }
                                            : persistentHeaderStyle.name
                                        }
                                        onClick={() => scrollToTop()}
                                    >
                                        {post.post_title}
                                    </Div>
                                    {(isPersonMicrosite(post) && !isMobile) && (
                                        <Div theme={persistentHeaderStyle.contactWrapper}>
                                            {numbers && (
                                                <Div
                                                    theme={persistentHeaderStyle.iconWrapper}
                                                    onMouseOver={() => setIsPhoneHover(true)}
                                                    onMouseOut={() => setIsPhoneHover(false)}
                                                >
                                                    <Div
                                                        theme={{
                                                            ...persistentHeaderStyle.phoneNumber,
                                                            display: isPhoneHover ? 'block' : 'none'
                                                        }}
                                                        onMouseOver={() => setIsPhoneHover(true)}
                                                    >
                                                        {numbers[0].number}
                                                    </Div>
                                                    <Icon icon={phone} theme={persistentHeaderStyle.phone}/>
                                                </Div>
                                            )}
                                            {post.email && (
                                                <EmailLink email={post.email} theme={persistentHeaderStyle.iconWrapper}>
                                                    <Icon icon={envelopeOpen} theme={persistentHeaderStyle.email}/>
                                                </EmailLink>
                                            )}
                                        </Div>
                                    )}
                                </Div>
                                {(isPersonMicrosite(post) && !isMobile) && (
                                    <Div theme={persistentHeaderStyle.title}>
                                        {composePersonTitle(post)}
                                    </Div>
                                )}
                            </Div>
                            {!isMobile && !!highlights && (
                                <FeaturedItems
                                    items={highlights}
                                    theme={persistentHeaderFeaturedStyle}
                                />
                            )}
                            {hasMicrositeMenu(post) && isMobile && (
                                <MobileMicrositeMenu
                                    post={post}
                                    theme={persistentHeaderMicrositeMenuStyle}
                                    persistentHeaderRef={persistentHeaderRef}
                                />
                            )}
                        </MotionDiv>
                    )}
                </AnimatePresence>
            </Div>
        </>
    )
}

PersistentHeader.propTypes = {
    isAdmin: PropTypes.bool,
}

const mapStateToProps = ({site}) => ({
    isAdmin: !!site.adminUrl,
    manualHighlights: site.config.firmHighlights,
    firmHighlightsMode: site.config.firmHighlightsMode,
})

export default connect(mapStateToProps)(PersistentHeader)
