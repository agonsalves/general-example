import PropTypes                       from 'prop-types'
import React, {
    memo,
    useContext
}                                      from 'react'
import {TransitionAnimations}          from 'Controllers/TransitionController'
import MicrositeSection                from './MicrositeSectionContainer'
import MicrositeSectionHeading         from './MicrositeSectionHeading'
import MicrositeSectionPeopleListings  from './MicrositeSectionPeopleListings'
import {micrositeSectionOverviewStyle} from './MicrositeSectionOverview/styles'


const MicrositeSectionPeople = memo(({section, micrositeId, micrositeType}) => {
        const {post} = useContext(TransitionAnimations)
        const sectionWithFeaturedPeople = Object.assign({featured_people: post?.featured_people}, section)

        return (
            <MicrositeSection url={section.slug} theme={micrositeSectionOverviewStyle}>
                <MicrositeSectionHeading>{section.post_title}</MicrositeSectionHeading>
                <MicrositeSectionPeopleListings
                    section={sectionWithFeaturedPeople}
                    postType="person"
                    micrositeId={micrositeId}
                    micrositeType={micrositeType}
                />
            </MicrositeSection>
        )
    }
)

MicrositeSectionPeople.displayName = 'MicrositeSectionPeople'

MicrositeSectionPeople.propTypes = {
    section: PropTypes.object.isRequired
}

export default MicrositeSectionPeople