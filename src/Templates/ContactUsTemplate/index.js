import PostContent      from 'Main/PostContent'
import PropTypes        from 'prop-types'
import React            from 'react'
import Div              from 'Shared/Div'
import RichText         from 'Shared/RichText'
import OfficeListing    from './OfficeListing'
import {contactUsStyle} from './styles'

const ContactUsTemplate = ({post}) =>
    <PostContent post={post}>
        <RichText theme={contactUsStyle.description}>{post.full_content}</RichText>
        {post.office_locations && (
            <Div theme={contactUsStyle.wrapper}>
                {post.office_locations.map((office, key) =>
                    <OfficeListing
                        key={key}
                        image={office.image_upload}
                        city={office.address_locality}
                        state={office.address_region}
                        slug={office.slug}
                        address_locality={office.address_locality}
                        address_region={office.address_region}
                    />
                )}
            </Div>
        )}
    </PostContent>

ContactUsTemplate.propTypes = {
    post: PropTypes.object.isRequired,
}

export default ContactUsTemplate