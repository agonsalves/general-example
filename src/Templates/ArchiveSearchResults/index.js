import React                       from 'react'
import PostContent                 from 'Main/PostContent'
import SearchResults               from 'Main/SearchResults'
import {archiveSearchResultsStyle} from './styles'


const ArchiveSearchResults = ({post}) =>
    <PostContent post={post}>
        <SearchResults post={post} theme={archiveSearchResultsStyle(post)}/>
    </PostContent>

export default ArchiveSearchResults