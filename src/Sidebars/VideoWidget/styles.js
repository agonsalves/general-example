import {overlayStyle}     from 'Shared/Overlay/styles'
import {
    absolute,
    black,
    center,
    fixed,
    flex,
    inherit,
    none,
    pointer,
    relative,
    white
}                         from 'utils/themer'
import {globals}          from 'variables/styles'
import {imageWidgetStyle} from '../ImageWidget/styles'

export const videoWidgetStyle = {
    ...imageWidgetStyle,
    imageWrapper: {
        position: relative,
        cursor: pointer,
        hover: {
            child: [
                {
                    selector: 'img',
                    opacity: .7
                },
                {
                    selector: '> div',
                    cursor: pointer
                }
            ]
        }
    },
    image: {
        transition: 'opacity 500ms ease'
    },
    playButton: {
        position: absolute,
        left: 0,
        bottom: 0,
        height: [80, .7, 80],
        width: [80, .7, 80],
        backgroundColor: globals.colors.linkActiveColor,
        display: flex,
        alignItems: center,
        justifyContent: center,
        transition: 'background-color 300ms ease',
        print: {
            display: none
        },
        child: {
            selector: '> svg',
            transform: 'rotate(90deg)',
            color: white,
            size: [13, .7, 13],
            pointerEvents: none
        }
    },
    videoWrapper: {
        display: flex,
        justifyContent: center,
        alignItems: center,
        position: fixed,
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 22
    },
    video: {
        position: relative,
        child: [
            {
                selector: '> div',
                mobile: {
                    width: '320px!important',
                    height: '200px!important'
                }
            }
        ]
    },
    closeButtonWrapper: {
        opacity: 0,
        mobile: {
            display: none
        }
    },
    closeButton: {
        position: absolute,
        top: -25,
        right: -25,
        size: 34,
        color: white,
        background: black,
        display: flex,
        width: '50px !important',
        height: '50px !important',
        borderRadius: 50,
        zIndex: 10,
        pointerEvents: none,
        opacity: inherit,
        child: [
            {
                selector: 'path',
                pointerEvents: none
            },
            {
                selector: 'svg',
                pointerEvents: none
            }
        ]
    },
    overlay: {
        ...overlayStyle,
        backgroundColor: 'rgba(255,255,255,0)'
    },
}