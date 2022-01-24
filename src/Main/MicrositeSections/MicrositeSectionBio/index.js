import PropTypes               from 'prop-types'
import React, {memo}           from 'react'
import Div                     from 'Shared/Div'
import RichText                from 'Shared/RichText'
import PersonServicesWidget    from 'Sidebars/PersonServicesWidget'
import WidgetSwitch            from 'Sidebars/WidgetSwitch'
import MicrositeSection        from '../MicrositeSectionContainer'
import MicrositeSectionInner   from '../MicrositeSectionInner'
import MicrositeSectionSidebar from '../MicrositeSectionSidebar'
import BioInfoSubheads         from './BioInfoSubheads'
import {
    bioDescriptionStyle,
    micrositeSectionBioInfoStyle,
    micrositeSectionBioWrapperStyle
}                              from './styles'

const MicrositeSectionBio = memo(({section}) =>
    <MicrositeSection url={section.slug} theme={micrositeSectionBioWrapperStyle}>
        <MicrositeSectionInner>
            <Div theme={micrositeSectionBioInfoStyle(section.microsite_pages)}>
                <RichText theme={bioDescriptionStyle} isFirstParagraphLarge>{section.full_content}</RichText>
                <BioInfoSubheads post={section}/>
            </Div>
            <MicrositeSectionSidebar>
                <PersonServicesWidget post={section}/>
                {section.widgets && section.widgets.map((widget, index) =>
                    <WidgetSwitch key={index} widget={widget}/>
                )}
            </MicrositeSectionSidebar>
        </MicrositeSectionInner>
    </MicrositeSection>
)

MicrositeSectionBio.displayName = 'MicrositeSectionBio'

MicrositeSectionBio.propTypes = {
    section: PropTypes.object.isRequired
}

export default MicrositeSectionBio