import PropTypes             from 'prop-types'
import React                 from 'react'
import ArchiveListingWrapper from '../ArchiveListingWrapper'
import {
    CaseStudyReadMore,
    CaseStudyTextWrapper,
    CaseStudyThumbnail,
    CaseStudyTitle
}                            from './styles'

const CaseStudyListing = ({title, url, image}) =>
    <ArchiveListingWrapper url={url}>
        <CaseStudyTextWrapper>
            <CaseStudyTitle children={title}/>
            <CaseStudyReadMore/>
        </CaseStudyTextWrapper>
        {image && (
            <CaseStudyThumbnail image={image}/>
        )}
    </ArchiveListingWrapper>

CaseStudyListing.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.object
}

export default CaseStudyListing