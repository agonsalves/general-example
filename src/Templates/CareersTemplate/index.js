import PropTypes      from 'prop-types'
import React          from 'react'
import RichText       from 'Shared/RichText'
import PostContent    from 'Main/PostContent'
import {careersStyle} from './styles'

const CareersTemplate = ({post}) =>
    <PostContent post={post}>
        <RichText children={post.full_content} theme={careersStyle.desc}/>
    </PostContent>

CareersTemplate.propTypes = {
    post: PropTypes.object.isRequired,
}

export default CareersTemplate