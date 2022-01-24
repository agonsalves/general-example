import PropTypes        from 'prop-types'
import React            from 'react'
import Img              from 'Shared/Img'
import RichText         from 'Shared/RichText'
import PostContent      from 'Main/PostContent'
import PageTitle        from 'Main/PageTitle'
import {diversityStyle} from './styles'

const DiversityTemplate = ({post}) =>
    <PostContent post={post}>
        <PageTitle>{post.post_title}</PageTitle>
        <RichText isFirstParagraphLarge>
            {post.full_content}
        </RichText>
        <Img theme={diversityStyle.banner} image={post.diversity_banner}/>
        <RichText>
            {post.full_content_cont}
        </RichText>
    </PostContent>

DiversityTemplate.propTypes = {
    post: PropTypes.object.isRequired,
}

export default DiversityTemplate