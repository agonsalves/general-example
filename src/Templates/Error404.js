import React       from 'react'
import H3          from '../Shared/H3'
import ButtonLarge from '../Shared/ButtonLarge'
import PostContent from '../Main/PostContent'

const Error404 = ({post}) =>
    <PostContent post={post}>
        <H3>The page that you are looking for was not found.</H3>
        <p>It's possible your entered the address incorrectly or are looking for a page that has moved.</p>
        <ButtonLarge url="/" label="Return to Homepage"/>
    </PostContent>

export default Error404