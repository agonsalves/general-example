import PropTypes          from 'prop-types'
import React              from 'react'
import Div                from 'Shared/Div'
import {postContentStyle} from './styles'

const PostContent = ({post, theme, ...props}) =>
    <Div theme={{...postContentStyle(post), ...theme}} {...props}/>

PostContent.defaultProps = {
    post: {}
}

PostContent.propTypes = {
    post: PropTypes.object.isRequired,
    theme: PropTypes.object
}

export default PostContent