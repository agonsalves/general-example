import PropTypes        from 'prop-types'
import React            from 'react'
import Div              from 'Shared/Div'
import Img              from 'Shared/Img'
import RichText         from 'Shared/RichText'
import PostContent      from 'Main/PostContent'
import PageTitle        from 'Main/PageTitle'
import {accoladesStyle} from './styles'

const AccoladesTemplate = ({post}) =>
    <PostContent post={post}>
        <PageTitle>{post.post_title}</PageTitle>
        <Div>
            <RichText isFirstParagraphLarge={true}>
                {post.full_content}
            </RichText>
        </Div>
        {post.accolades_entries && (
            <Div theme={accoladesStyle.listing}>
                {post.accolades_entries.map(photo =>
                    <Div theme={accoladesStyle.listing.contentWrapper} key={photo.image.url}>
                        <Div theme={accoladesStyle.listing.item}>
                            <Img
                                theme={accoladesStyle.listing.image}
                                image={photo.image}
                            />
                            <Div theme={accoladesStyle.listing.heading} children={photo.heading}/>
                            <Div theme={accoladesStyle.listing.description} children={photo.description}/>
                        </Div>
                    </Div>
                )}
            </Div>
        )}
    </PostContent>

AccoladesTemplate.propTypes = {
    post: PropTypes.object.isRequired,
}

export default AccoladesTemplate