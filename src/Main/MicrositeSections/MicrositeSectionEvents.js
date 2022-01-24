import PropTypes                from 'prop-types'
import React, {memo}            from 'react'
import MicrositeSection         from './MicrositeSectionContainer'
import MicrositeSectionHeading  from './MicrositeSectionHeading'
import MicrositeSectionListings from './MicrositeSectionListings'

const MicrositeSectionEvents = memo(({section, micrositeId, micrositeType}) => {
    return (
        <MicrositeSection url={section.slug}>
            <MicrositeSectionHeading>{section.post_title}</MicrositeSectionHeading>
            <MicrositeSectionListings
                section={section}
                postType="event"
                micrositeId={micrositeId}
                micrositeType={micrositeType}
                perRow={2}
            />
        </MicrositeSection>
    )
})

MicrositeSectionEvents.displayName = 'MicrositeSectionEvents'

MicrositeSectionEvents.propTypes = {
    section: PropTypes.object.isRequired,
    micrositeId: PropTypes.string.isRequired,
    micrositeType: PropTypes.string.isRequired,
}

export default MicrositeSectionEvents