import MicrositeSection         from 'Main/MicrositeSections/MicrositeSectionContainer'
import PropTypes                from 'prop-types'
import React, {memo}            from 'react'
import Div                      from 'Shared/Div'
import RichText                 from 'Shared/RichText'
import WidgetSwitch             from 'Sidebars/WidgetSwitch'
import MicrositeSectionHeading  from '../MicrositeSectionHeading'
import MicrositeSectionInner    from '../MicrositeSectionInner'
import MicrositeSectionListings from '../MicrositeSectionListings'
import MicrositeSectionSidebar  from '../MicrositeSectionSidebar'
import {
    micrositeCustomExperienceHeadingStyle,
    micrositeSectionCustomInfoStyle
}                               from './styles'

const MicrositeSectionCustom = memo(({section, micrositeId, micrositeType}) => {
    return (
        <MicrositeSection url={section.slug}>
            <MicrositeSectionHeading>{section.post_title}</MicrositeSectionHeading>
            <MicrositeSectionInner>
                <RichText isFirstParagraphLarge theme={micrositeSectionCustomInfoStyle(!!section.widgets)}>
                    {section.full_content}
                </RichText>
                {section.widgets && (
                    <MicrositeSectionSidebar>
                        {section.widgets.map((widget, index) =>
                            <WidgetSwitch key={index} widget={widget}/>
                        )}
                    </MicrositeSectionSidebar>
                )}
            </MicrositeSectionInner>
            {section.append_case_studies && !!section.case_studies && (
                <Div>
                    <Div theme={micrositeCustomExperienceHeadingStyle}>Experience</Div>
                    <MicrositeSectionListings
                        section={section}
                        postType="case-study"
                        micrositeId={micrositeId}
                        micrositeType={micrositeType}
                    />
                </Div>
            )}
        </MicrositeSection>
    )
})

MicrositeSectionCustom.displayName = 'MicrositeSectionCustom'

MicrositeSectionCustom.propTypes = {
    section: PropTypes.object.isRequired,
    micrositeId: PropTypes.string.isRequired,
    micrositeType: PropTypes.string.isRequired
}

export default MicrositeSectionCustom