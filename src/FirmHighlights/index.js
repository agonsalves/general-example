import idx                       from 'idx'
import Carousel                  from 'nuka-carousel'
import PropTypes                 from 'prop-types'
import React, {
    useEffect,
    useMemo,
    useState
}                                from 'react'
import {
    connect,
    useSelector
}                                from 'react-redux'
import Div                       from '../Shared/Div'
import Icon                      from '../Shared/Icon'
import {REQUEST_HIGHLIGHTS}      from '../redux/reducers'
import {
    getPostType,
    mobileFlag
}                                from '../redux/selectors'
import {
    plural,
    shuffle,
    singular
}                                from '../utils/helpers'
import useWindowDimensions       from '../utils/useWindowDimensions'
import {
    longArrowAltLeft,
    longArrowAltRight
}                                from '../variables/iconLibrary'
import HighlightItem             from './HighlightItem'
import {firmHighlightsItemStyle} from './HighlightItem/styles'
import {firmHighlightsStyle}     from './styles'

const FirmHighlights = ({post, firmHighlightsMode, firmHighlights, dispatch, theme}) => {
    const isMobile = useSelector(mobileFlag)
    const [highlights, setHighlights] = useState([])
    const [init, setInit] = useState(true)
    const maxSlides = isMobile ? 1 : 4

    /// cell spacing must be an integer --- for dynamic cell spacing calculate based off window width
    const {windowWidth} = useWindowDimensions()
    const [cellSpacing, setCellSpacing] = useState((windowWidth * .08) / 4)
    useEffect(() => {
        setCellSpacing((windowWidth * .08) / 4)
    }, [setCellSpacing, windowWidth])


    const requestHighlights = useMemo(() => async () => {
        await dispatch({
            type: REQUEST_HIGHLIGHTS,
            slug: post.slug
        })
    }, [dispatch, post.slug])

    useEffect(() => {
        if (init) {
            setInit(false)
            const sourcePost = ['microsite-page', 'blog-post'].includes(post.post_type) ? post.parentPost : post
            if (sourcePost.highlights && firmHighlightsMode === 'auto')
                if (sourcePost.highlights.length)
                    setHighlights(sourcePost.highlights)
                else
                    setHighlights(firmHighlights)

            else if (getPostType('name', sourcePost.post_type).type === 'archive'
                && firmHighlightsMode === 'auto'
                && sourcePost.post_type !== 'office'
            )
                requestHighlights()

            else if (firmHighlights)
                setHighlights(firmHighlights)
        }
    }, [post, requestHighlights, firmHighlightsMode, firmHighlights, setHighlights, init])

    let randomizedHighlights = useMemo(
        () => highlights && shuffle(highlights),
        [highlights]
    )

    return idx(randomizedHighlights, _ => _.length) ? (
        <Div theme={{...firmHighlightsStyle, ...theme}} data-nosnippet>
            <Div theme={{...firmHighlightsStyle.inner, ...theme.inner}}>
                <Div theme={firmHighlightsStyle.heading}>Firm Highlights</Div>
                <Div theme={firmHighlightsStyle.wrapper}>
                    <Carousel
                        width="100%"
                        slideWidth={1}
                        cellSpacing={cellSpacing}
                        autoplay={false}
                        dragging={false}
                        slidesToShow={maxSlides}
                        framePadding="0"
                        wrapAround={true}
                        heightMode="max"
                        enableKeyboardControls={true}
                        easing="easePolyOut"
                        cellAlign="left"
                        frameOverflow={isMobile ? 'hidden' : 'visible'}
                        renderTopLeftControls={({previousSlide}) => highlights.length > maxSlides && (
                            <Div onClick={previousSlide} theme={firmHighlightsStyle.previousButtonWrapper}>
                                <Icon
                                    onClick={previousSlide}
                                    theme={firmHighlightsStyle.prevButton}
                                    icon={longArrowAltLeft}
                                />
                            </Div>
                        )}
                        renderTopRightControls={({nextSlide}) => highlights.length > maxSlides && (
                            <Div onClick={nextSlide} theme={firmHighlightsStyle.nextButtonWrapper}>
                                <Icon
                                    onClick={nextSlide}
                                    theme={firmHighlightsStyle.nextButton}
                                    icon={longArrowAltRight}
                                />
                            </Div>
                        )}
                        renderBottomCenterControls={null}
                    >
                        {randomizedHighlights.map((item) =>
                            <HighlightItem
                                key={item.id}
                                label={
                                    item.post_type === 'firm-highlights'
                                        ? item.highlight_label?.[0].term
                                        : item.post_type === 'publication'
                                        ? singular(item.post_type)
                                        : plural(item.post_type)
                                }
                                title={item.post_title}
                                description={item.full_content || item.highlight_text}
                                image={item.thumbnail_teaser}
                                url={item.slug}
                                theme={firmHighlightsItemStyle}
                            />
                        )}
                    </Carousel>
                </Div>
            </Div>
        </Div>
    ) : null
}

FirmHighlights.propTypes = {
    post: PropTypes.object.isRequired,
    firmHighlightsMode: PropTypes.string.isRequired,
    firmHighlights: PropTypes.array,
    dispatch: PropTypes.func.isRequired
}

const mapStateToProps = ({site}) => ({
    firmHighlightsMode: site.config.firmHighlightsMode,
    firmHighlights: site.config.firmHighlights
})

export default connect(mapStateToProps)(FirmHighlights)