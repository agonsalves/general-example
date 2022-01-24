import {AnimatePresence}       from 'framer-motion'
import MicrositeSection        from 'Main/MicrositeSections/MicrositeSectionContainer'
import Carousel                from 'nuka-carousel'
import PropTypes               from 'prop-types'
import React, {
    memo,
    useState
}                              from 'react'
import {useSelector}           from 'react-redux'
import {mobileFlag}            from 'redux/selectors'
import Div                     from 'Shared/Div'
import Icon                    from 'Shared/Icon'
import Img                     from 'Shared/Img'
import MotionDiv               from 'Shared/MotionDiv'
import Overlay                 from 'Shared/Overlay'
import RichText                from 'Shared/RichText'
import WidgetSwitch            from 'Sidebars/WidgetSwitch'
import usePortal               from 'utils/usePortal'
import {
    longArrowAltLeft,
    longArrowAltRight
}                              from 'variables/iconLibrary'
import MicrositeSectionHeading from '../MicrositeSectionHeading'
import MicrositeSectionInner   from '../MicrositeSectionInner'
import MicrositeSectionSidebar from '../MicrositeSectionSidebar'
import {
    micrositeGalleryDescriptionStyle,
    micrositeGalleryDescriptionWrapperStyle,
    micrositeGalleryHeadingStyle,
    micrositeGalleryImageStyle,
    micrositeGalleryPortalCarouselContainerStyle,
    micrositeGalleryPortalContainerInnerStyle,
    micrositeGalleryPortalControlLeftStyle,
    micrositeGalleryPortalControlRightStyle,
    micrositeGalleryPortalControlsWrapperStyle,
    micrositeGalleryPortalImageStyle,
    micrositeGalleryPortalImageWrapperStyle,
    micrositeGalleryWrapperStyle
}                              from './styles'

const MicrositeSectionGallery = memo(({section}) => {
    const isMobile = useSelector(mobileFlag)
    const maxSlides = isMobile ? 1 : 3
    const galleryImages = section.gallery_images
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)

    const {Portal, closePortal, openPortal, isOpen} = usePortal({
        bindTo: document && document.getElementById('modal')
    })

    const galleryPortalCarouselVariants = {
        initial: {
            left: '-100%'
        },
        enter: {
            left: 0,
            transition: {
                duration: .5
            }
        },
        exit: {
            left: '100%',
            transition: {
                duration: .5
            }
        }
    }

    return (
        <MicrositeSection url={section.slug}>
            <MicrositeSectionHeading>{section.post_title}</MicrositeSectionHeading>
            <MicrositeSectionInner theme={micrositeGalleryDescriptionWrapperStyle}>
                <RichText
                    theme={micrositeGalleryDescriptionStyle}
                    isFirstParagraphLarge
                    children={section.full_content}
                />
                {section.widgets && (
                    <MicrositeSectionSidebar>
                        {section.widgets.map((widget, index) =>
                            <WidgetSwitch key={index} widget={widget}/>
                        )}
                    </MicrositeSectionSidebar>
                )}
            </MicrositeSectionInner>
            <RichText theme={micrositeGalleryHeadingStyle}>{section.gallery_heading}</RichText>
            <Div theme={micrositeGalleryWrapperStyle}>
                {!!section.gallery_images && (
                    <Carousel
                        slidesToShow={maxSlides}
                        wrapAround={true}
                        renderTopLeftControls={({previousSlide}) => section.gallery_images.length > maxSlides && (
                            <Div onClick={previousSlide} theme={micrositeGalleryWrapperStyle.previousButtonWrapper}>
                                <Icon
                                    onClick={previousSlide}
                                    theme={micrositeGalleryWrapperStyle.prevButton}
                                    icon={longArrowAltLeft}
                                />
                            </Div>
                        )}
                        renderTopRightControls={({nextSlide}) => section.gallery_images.length > maxSlides && (
                            <Div onClick={nextSlide} theme={micrositeGalleryWrapperStyle.nextButtonWrapper}>
                                <Icon
                                    onClick={nextSlide}
                                    theme={micrositeGalleryWrapperStyle.nextButton}
                                    icon={longArrowAltRight}
                                />
                            </Div>
                        )}
                        renderBottomCenterControls={null}
                    >
                        {section.gallery_images.map((item, index) =>
                            <Img
                                image={item.image}
                                key={index}
                                theme={micrositeGalleryImageStyle}
                                onClick={(e) => {
                                    if (!isMobile) {
                                        openPortal(e)
                                        setSelectedImageIndex(index)
                                    }
                                }}
                            />
                        )}
                    </Carousel>
                )}
            </Div>
            {isOpen && (
                <Portal>
                    <Overlay isOpen={true} closePortal={closePortal} theme={{zIndex: 6}}/>
                    <Div theme={micrositeGalleryPortalCarouselContainerStyle}>
                        <Div theme={micrositeGalleryPortalContainerInnerStyle}>
                            <AnimatePresence initial={false}>
                                <MotionDiv
                                    variants={galleryPortalCarouselVariants}
                                    initial="initial"
                                    exit="exit"
                                    animate="enter"
                                    key={galleryImages[selectedImageIndex].image.url}
                                    theme={micrositeGalleryPortalImageWrapperStyle}
                                >
                                    <Img
                                        image={galleryImages[selectedImageIndex].image}
                                        theme={micrositeGalleryPortalImageStyle}
                                    />
                                </MotionDiv>
                            </AnimatePresence>
                        </Div>
                        <Div theme={micrositeGalleryPortalControlsWrapperStyle}>
                            <Div
                                theme={micrositeGalleryPortalControlLeftStyle}
                                onClick={() => {
                                    setSelectedImageIndex(
                                        selectedImageIndex < 1
                                            ? galleryImages.length - 1
                                            : selectedImageIndex - 1
                                    )
                                }}>
                                <Icon
                                    icon={longArrowAltLeft}
                                    theme={micrositeGalleryPortalControlRightStyle.icon}
                                />
                            </Div>
                            <Div
                                theme={micrositeGalleryPortalControlRightStyle}
                                onClick={() => {
                                    setSelectedImageIndex(
                                        selectedImageIndex < galleryImages.length - 1
                                            ? selectedImageIndex + 1
                                            : 0
                                    )
                                }}>
                                <Icon
                                    icon={longArrowAltRight}
                                    theme={micrositeGalleryPortalControlRightStyle.icon}
                                />
                            </Div>
                        </Div>
                    </Div>
                </Portal>
            )}
        </MicrositeSection>
    )
})

MicrositeSectionGallery.displayName = 'MicrositeSectionGallery'

MicrositeSectionGallery.propTypes = {
    section: PropTypes.object.isRequired
}

export default MicrositeSectionGallery