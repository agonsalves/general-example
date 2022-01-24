import PropTypes                  from 'prop-types'
import React, {memo}              from 'react'
import Div                        from 'Shared/Div'
import Icon                       from 'Shared/Icon'
import Img                        from 'Shared/Img'
import NoCookiePlaceholder        from 'Shared/NoCookiePlaceholder'
import {noCookiePlaceholderStyle} from 'Shared/NoCookiePlaceholder/styles'
import RichText                   from 'Shared/RichText'
import usePortal                  from 'utils/usePortal'
import {triangleSolid}            from 'variables/iconLibrary'
import Widget                     from '../Widget'
import {videoWidgetStyle}         from './styles'
import VideoOverlay               from './VideoOverlay'

const VideoWidget = memo(({caption, videoUrl, image, hasPlayButton, theme}) => {

    const {Portal, closePortal, openPortal, isOpen} = usePortal({
        bindTo: document && document.getElementById('modal')
    })

    return (
        <Widget theme={{...videoWidgetStyle, ...theme}}>
            {(videoUrl && image) && (
                <NoCookiePlaceholder theme={noCookiePlaceholderStyle.videoWidget}>
                    <Div theme={videoWidgetStyle.imageWrapper} onClick={openPortal}>
                        <Img image={image} theme={{...videoWidgetStyle.image, ...theme.image}}/>
                        {hasPlayButton && (
                            <Div theme={videoWidgetStyle.playButton}>
                                <Icon icon={triangleSolid} className="icon"/>
                            </Div>
                        )}
                    </Div>
                </NoCookiePlaceholder>
            )}

            {caption && (
                <RichText
                    theme={{...videoWidgetStyle.caption, ...theme.caption}}
                    children={caption}
                    className="close-panels"
                />
            )}

            {isOpen && (
                <Portal><VideoOverlay url={videoUrl} close={closePortal}/></Portal>
            )}
        </Widget>
    )
})

VideoWidget.displayName = 'VideoWidget'

VideoWidget.propTypes = {
    theme: PropTypes.object,
    videoUrl: PropTypes.string,
    hasPlayButton: PropTypes.bool,
    caption: PropTypes.string,
    image: PropTypes.object
}

VideoWidget.defaultProps = {
    theme: {},
}

export default VideoWidget