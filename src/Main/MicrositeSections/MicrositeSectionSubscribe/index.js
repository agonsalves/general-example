import MicrositeSection        from 'Main/MicrositeSections/MicrositeSectionContainer'
import PropTypes               from 'prop-types'
import React, {memo}           from 'react'
import ButtonLarge             from 'Shared/ButtonLarge'
import Div                     from 'Shared/Div'
import RichText                from 'Shared/RichText'
import {longArrowAltRight}     from 'variables/iconLibrary'
import MicrositeSectionHeading from '../MicrositeSectionHeading'
import {
    subscribeListingButtonStyle,
    subscribeListingButtonWrapperStyle,
    subscribeListingStyle
}                              from './styles'

const MicrositeSectionSubscribe = memo(({section}) =>
    <MicrositeSection url={section.slug}>
        <Div theme={subscribeListingStyle}>
            <Div theme={subscribeListingStyle.inner}>
                <MicrositeSectionHeading theme={subscribeListingStyle.title}>
                    {section.post_title}
                </MicrositeSectionHeading>
                <Div theme={subscribeListingButtonWrapperStyle}>
                    <RichText theme={{...subscribeListingStyle.description}}>
                        {section.full_content}
                    </RichText>
                    <ButtonLarge
                        url={section.subscribe_button_url}
                        label={section.subscribe_button_label}
                        icon={longArrowAltRight}
                        theme={subscribeListingButtonStyle}
                    />
                </Div>
            </Div>
        </Div>
    </MicrositeSection>
)

MicrositeSectionSubscribe.displayName = 'MicrositeSectionSubscribe'

MicrositeSectionSubscribe.propTypes = {
    section: PropTypes.object.isRequired
}

export default MicrositeSectionSubscribe