import PropTypes                 from 'prop-types'
import React                     from 'react'
import Div                       from 'Shared/Div'
import H2                        from 'Shared/H2'
import H3                        from 'Shared/H3'
import Img                       from 'Shared/Img'
import RichText                  from 'Shared/RichText'
import PostContent               from 'Main/PostContent'
import {
    historyTemplateStyle,
    micrositePageTitleStyle
}                                from './styles'

const HistoryTemplate = ({post}) => {
    const {p_history_description, p_history_entries} = post
    return (
        <PostContent post={post}>
            <H2 theme={micrositePageTitleStyle}>{post.post_title}</H2>
            <RichText children={p_history_description} isFirstParagraphLarge/>
            <Div theme={historyTemplateStyle.itemWrapper}>
                {p_history_entries && p_history_entries.map((e, k) => (
                    <Div key={k} theme={historyTemplateStyle.item}>
                        <Div theme={historyTemplateStyle.imageWrapper}>
                            {e.image && (
                                <Img image={e.image} theme={historyTemplateStyle.image}/>
                            )}
                        </Div>
                        <Div theme={historyTemplateStyle.textWrapper}>
                            <H3 theme={
                                !e.image
                                    ? historyTemplateStyle.year
                                    : historyTemplateStyle.yearWithImage
                            }>
                                {e.year}
                            </H3>
                            <RichText children={e.description} theme={historyTemplateStyle.description}/>
                        </Div>
                    </Div>
                ))}
            </Div>
        </PostContent>
    )
}


HistoryTemplate.propTypes = {
    post: PropTypes.object.isRequired,
}

export default HistoryTemplate