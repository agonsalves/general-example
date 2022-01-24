import PropTypes                from 'prop-types'
import React, {memo}            from 'react'
import MicrositeSection         from './MicrositeSectionContainer'
import MicrositeSectionHeading  from './MicrositeSectionHeading'
import MicrositeSectionListings from './MicrositeSectionListings'

const MicrositeSectionCaseStudies = memo(({section, micrositeId, micrositeType}) => {
    return (
        <MicrositeSection url={section.slug}>
            <MicrositeSectionHeading>{section.post_title}</MicrositeSectionHeading>
            <MicrositeSectionListings
                section={section}
                postType="case-study"
                micrositeId={micrositeId}
                micrositeType={micrositeType}
            />
        </MicrositeSection>
    )
})

MicrositeSectionCaseStudies.displayName = 'MicrositeSectionCaseStudies'

MicrositeSectionCaseStudies.propTypes = {
    section: PropTypes.object.isRequired
}

export default MicrositeSectionCaseStudies