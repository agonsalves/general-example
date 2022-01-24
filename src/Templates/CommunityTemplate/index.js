import PropTypes        from 'prop-types'
import React            from 'react'
import Div              from 'Shared/Div'
import Img              from 'Shared/Img'
import RichText         from 'Shared/RichText'
import PostContent      from 'Main/PostContent'
import PageTitle        from 'Main/PageTitle'
import {communityStyle} from './styles'

const CommunityTemplate = ({post}) =>
    <PostContent post={post}>
        <PageTitle>{post.post_title}</PageTitle>
        <Div theme={communityStyle.topSection}>
            <RichText theme={communityStyle.paragraphStyle}>
                {post.full_content}
            </RichText>
        </Div>
        {post.community_entries && (
            <Div theme={communityStyle.gallery}>
                {post.community_entries.map((photo, index) =>
                    <Div key={index} theme={communityStyle.gallery.item}>
                        <Img
                            theme={communityStyle.gallery.image}
                            image={photo.image}
                        />

                        <Div theme={communityStyle.gallery.caption} children={photo.caption}/>
                    </Div>
                )}
            </Div>
        )}
    </PostContent>

CommunityTemplate.propTypes = {
    post: PropTypes.object.isRequired,
}

export default CommunityTemplate