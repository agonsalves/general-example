import PropTypes          from 'prop-types'
import React              from 'react'
import Img                from 'Shared/Img'
import RichText           from 'Shared/RichText'
import Widget             from '../Widget'
import {imageWidgetStyle} from './styles'

const ImageWidget = ({image, caption, theme}) =>
    <Widget theme={theme}>
        {image && (
            <Img theme={theme.image} image={image}/>
        )}
        {caption && (
            <RichText theme={{...imageWidgetStyle.caption, ...theme.caption}} children={caption}/>
        )}
    </Widget>

ImageWidget.propTypes = {
    image: PropTypes.object,
    caption: PropTypes.string,
    theme: PropTypes.object,
}

ImageWidget.defaultProps = {
    theme: {},
}

export default ImageWidget