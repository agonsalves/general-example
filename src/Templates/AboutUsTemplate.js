import RichText    from 'Shared/RichText'
import PostContent from 'Main/PostContent'
import PropTypes   from 'prop-types'
import React       from 'react'
import PageTitle   from '../Main/PageTitle'

const AboutUsTemplate = ({post}) =>
    <PostContent post={post}>
        <PageTitle>Overview</PageTitle>
        <RichText isFirstParagraphLarge={true}>
            {post.full_content}
        </RichText>
    </PostContent>

AboutUsTemplate.propTypes = {
    post: PropTypes.object.isRequired,
}

export default AboutUsTemplate