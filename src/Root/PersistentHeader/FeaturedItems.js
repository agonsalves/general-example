import {firmHighlightsStyle} from 'FirmHighlights/styles'
import Carousel              from 'nuka-carousel'
import PropTypes             from 'prop-types'
import React                 from 'react'
import Div                   from 'Shared/Div'
import Icon                  from 'Shared/Icon'
import Img                   from 'Shared/Img'
import LinkSwitch            from 'Shared/LinkSwitch'
import Span                  from 'Shared/Span'
import {singular}            from 'utils/helpers'
import {
    angleLeftLight,
    angleRightLight
}                            from 'variables/iconLibrary'

const FeaturedItems = ({items, theme}) =>
    <Div theme={theme}>
        <Carousel
            slidesToShow={1}
            wrapAround={true}
            renderTopLeftControls={({previousSlide}) =>
                <Div onClick={previousSlide} theme={{...theme.previousButtonWrapper}}>
                    <Icon
                        onClick={previousSlide}
                        theme={firmHighlightsStyle.prevButton}
                        icon={angleLeftLight}
                    />
                </Div>
            }
            renderTopRightControls={({nextSlide}) =>
                <Div onClick={nextSlide} theme={{...theme.nextButtonWrapper}}>
                    <Icon
                        onClick={nextSlide}
                        theme={firmHighlightsStyle.nextButton}
                        icon={angleRightLight}
                    />
                </Div>
            }
            renderBottomCenterControls={null}
        >
            {items.map((item, index) =>
                <LinkSwitch url={item.slug} key={index} theme={theme.inner}>
                    {(item.photo || item.thumbnail_teaser) && (
                        <Div theme={theme.imageWrapper}>
                            <Img image={item.photo || item.thumbnail_teaser} theme={theme.image}/>
                        </Div>
                    )}
                    <Div theme={theme.textWrapper}>
                        <Span theme={theme.type}>Featured {singular(item.post_type)}</Span>
                        <Span theme={theme.title}>{item.post_title}</Span>
                    </Div>
                </LinkSwitch>
            )}
        </Carousel>
    </Div>

FeaturedItems.propTypes = {
    items: PropTypes.array.isRequired
}

FeaturedItems.defaultProps = {
    theme: {}
}

export default FeaturedItems