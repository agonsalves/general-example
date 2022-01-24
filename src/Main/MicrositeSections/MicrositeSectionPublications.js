import PropTypes                from 'prop-types'
import React, {memo}            from 'react'
import MicrositeSection         from './MicrositeSectionContainer'
import MicrositeSectionHeading  from './MicrositeSectionHeading'
import MicrositeSectionListings from './MicrositeSectionListings'

const MicrositeSectionPublications = memo(({section, micrositeId, micrositeType}) =>
    <MicrositeSection url={section.slug}>
        <MicrositeSectionHeading>{section.post_title}</MicrositeSectionHeading>
        <MicrositeSectionListings
            section={section}
            postType="publication"
            micrositeId={micrositeId}
            micrositeType={micrositeType}
        />
    </MicrositeSection>
)

MicrositeSectionPublications.displayName = 'MicrositeSectionPublications'

MicrositeSectionPublications.propTypes = {
    section: PropTypes.object.isRequired,
    micrositeId: PropTypes.string.isRequired,
    micrositeType: PropTypes.string.isRequired,
}

export default MicrositeSectionPublications