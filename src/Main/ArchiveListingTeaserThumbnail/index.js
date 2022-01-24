import PropTypes      from 'prop-types'
import React          from 'react'
import Div            from 'Shared/Div'
import Img            from 'Shared/Img'
import {
    archiveThumbnailStyle,
    archiveThumbnailWrapperStyle
}                     from './styles'

const ArchiveListingTeaserThumbnail = ({img, theme}) =>
    <Div theme={{...archiveThumbnailWrapperStyle, ...theme.wrapper}}>
        <Img image={img} theme={{...archiveThumbnailStyle, ...theme}}/>
    </Div>

ArchiveListingTeaserThumbnail.propTypes = {
    img: PropTypes.object.isRequired,
    theme: PropTypes.object,
}

ArchiveListingTeaserThumbnail.defaultProps = {
    theme: {},
}

export default ArchiveListingTeaserThumbnail