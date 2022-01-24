import PropTypes          from 'prop-types'
import React              from 'react'
import RichText           from '../Shared/RichText'
import PostContent        from '../Main/PostContent'
import PageTitle          from '../Main/PageTitle'
import {isCareersSubPage} from '../utils/flags'

const GenericPageTemplate = ({post}) =>
    <PostContent post={post}>
        {isCareersSubPage(post) && (
            <PageTitle post={post}>{post.post_title}</PageTitle>
        )}
        <RichText isFirstParagraphLarge>
            {post.full_content}
        </RichText>
    </PostContent>

GenericPageTemplate.propTypes = {
    post: PropTypes.object.isRequired,
}

export default GenericPageTemplate