import React, {memo}      from 'react'
import VimeoPlayer        from 'react-player/vimeo'
import YouTubePlayer      from 'react-player/youtube'
import Div                from '../../Shared/Div'
import Icon               from '../../Shared/Icon'
import MotionDiv          from '../../Shared/MotionDiv'
import {videoWidgetStyle} from './styles'
import {closeOut}         from '../../variables/iconLibrary'

const VideoOverlay = memo(({url, close}) => {
    const closeButtonVariants = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                delay: .5,
                duration: 1
            }
        }
    }

    const Player = url?.includes('vimeo')
        ? VimeoPlayer
        : YouTubePlayer

    return (
        <Div theme={videoWidgetStyle.videoWrapper} onClick={close}>
            <Div theme={videoWidgetStyle.video}>
                <Player
                    url={url}
                    className="video"
                    playing={true}
                    controls={true}
                />
                <MotionDiv
                    variants={closeButtonVariants}
                    initial="initial"
                    animate="animate"
                    theme={videoWidgetStyle.closeButtonWrapper}
                >
                    <Icon
                        icon={closeOut}
                        theme={videoWidgetStyle.closeButton}
                        className="close-panels"
                    />
                </MotionDiv>
            </Div>
        </Div>
    )
})

VideoOverlay.displayName = 'VideoOverlay'

export default VideoOverlay