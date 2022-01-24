import React                        from 'react'
import Div                          from 'Shared/Div'
import RichText                     from 'Shared/RichText'
import PostContent                  from 'Main/PostContent'
import {subscribeFormTemplateStyle} from './styles'

const SubscribeFormTemplate = ({post}) => {
    const {
        subscribe_form_html,
    } = post

    return (
        <PostContent post={post}>
            {subscribe_form_html && (
                <Div theme={subscribeFormTemplateStyle.form}>
                    <RichText children={subscribe_form_html}/>
                </Div>
            )}
        </PostContent>
    )
}

export default SubscribeFormTemplate