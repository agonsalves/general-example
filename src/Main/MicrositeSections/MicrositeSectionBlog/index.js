import MicrositeSection         from 'Main/MicrositeSections/MicrositeSectionContainer'
import PropTypes                from 'prop-types'
import React, {memo}            from 'react'
import ButtonLarge              from 'Shared/ButtonLarge'
import Div                      from 'Shared/Div'
import RichText                 from 'Shared/RichText'
import {longArrowAltRight}      from 'variables/iconLibrary'
import MicrositeSectionHeading  from '../MicrositeSectionHeading'
import MicrositeSectionListings from '../MicrositeSectionListings'
import {
    micrositeSectionBlogButtonStyle,
    micrositeSectionBlogDescriptionStyle,
    micrositeSectionBlogDescriptionWrapperStyle,
    micrositeSectionBlogHeadingStyle
} from './styles'

const MicrositeSectionBlog = memo(({section, micrositeId, micrositeType}) => {
    return (
        <MicrositeSection url={section.slug}>
            <Div theme={micrositeSectionBlogDescriptionWrapperStyle}>
                <Div>
                    <MicrositeSectionHeading theme={micrositeSectionBlogHeadingStyle}>
                        {section.post_title}
                    </MicrositeSectionHeading>
                    <RichText
                        children={section.override_microsite_blog_description}
                        theme={micrositeSectionBlogDescriptionStyle}
                    />
                </Div>
                <ButtonLarge
                    url={`/${section?.parent_blog?.post_name}`}
                    label="Go to full blog"
                    icon={longArrowAltRight}
                    theme={micrositeSectionBlogButtonStyle}
                />
            </Div>
            <MicrositeSectionListings
                section={section}
                postType="blog-post"
                micrositeId={micrositeId}
                micrositeType={micrositeType}
            />
        </MicrositeSection>
    )
})

MicrositeSectionBlog.displayName = 'MicrositeSectionBlog'

MicrositeSectionBlog.propTypes = {
    section: PropTypes.object.isRequired
}

export default MicrositeSectionBlog