import {
    archiveDetailBottomStyle,
    archiveDetailContentWrapperStyle,
    archiveDetailDateAndSourceStyle,
    archiveDetailSocialWrapperStyle,
    archiveDetailTitleStyle,
    archiveDetailTopStyle,
    archiveDetailTypeStyle
}                                         from 'DetailFrame/DetailFrameInner/styles'
import ArchiveDateAndSource               from 'Main/ArchiveDateAndSource'
import BlogPostByline                     from 'Main/BlogPostByline'
import {archiveDetailBlogPostBylineStyle} from 'Main/BlogPostByline/styles'
import EventDetailInfo                    from 'Main/EventDetailInfo'
import {isUpcoming}                       from 'utils/upcomingEvents'
import PostContent                        from 'Main/PostContent'
import Resources                          from 'Main/Resources'
import SocialSharing                      from 'Main/SocialSharing'
import PropTypes                          from 'prop-types'
import React                              from 'react'
import Div                                from 'Shared/Div'
import Img                                from 'Shared/Img'
import RichText                           from 'Shared/RichText'
import Span                               from 'Shared/Span'
import {
    isBlogPost,
    isMicrositeDetail
}                                         from 'utils/flags'
import {intersperse}                      from 'utils/helpers'
import {eventRegisterButtonStyle}         from 'DetailFrame/DetailFrameInner/styles'
import ButtonLarge                        from '../../Shared/ButtonLarge'
import {longArrowAltRight}                from 'variables/iconLibrary'
import BlogPostCategories                 from './BlogPostCategories'
import {
    archiveDetailStyle,
    archiveDetailThumbnailStyle,
    archiveDetailTopTextWrapperStyle,
    blogDetailCategoryWrapperStyle,
    blogDetailTypeStyle
}                                         from './styles'

const ArchiveDetail = ({post}) =>
    <PostContent post={post} theme={archiveDetailStyle}>
        <Div theme={archiveDetailTopStyle(!!post.thumbnail_teaser)}>
            <Div theme={archiveDetailTopTextWrapperStyle}>
                {post.publication_type && (
                    <Div theme={archiveDetailTypeStyle}>
                        {post.publication_type[0].term}
                    </Div>
                )}
                {post.news_item_type && (
                    <Div theme={archiveDetailTypeStyle}>
                        {post.news_item_type[0].term}
                    </Div>
                )}
                {post.bp_categories && (
                    <Div theme={blogDetailCategoryWrapperStyle}>
                        {intersperse(post.bp_categories.map((c, i) => (
                            <Span theme={{...archiveDetailTypeStyle, ...blogDetailTypeStyle}} key={i}>
                                {c.term}
                            </Span>
                        )), ', ')}
                    </Div>
                )}
                <Div theme={archiveDetailTitleStyle(post)}>
                    {post.post_title}
                </Div>
                {(post.post_type === 'event' && (
                    <>
                        <EventDetailInfo post={post}/>
                        {post.er_third_party_registration_enabled === 'checked' && isUpcoming(post.date) && (
                            <ButtonLarge
                                url={post.er_third_party_registration_link}
                                children={post.er_third_party_registration_button_text}
                                icon={longArrowAltRight}
                                theme={eventRegisterButtonStyle}
                            />
                        )}
                    </>
                )) || (
                    <ArchiveDateAndSource
                        date={post.date}
                        source={post.source || post.publication}
                        displayDate={post.display_date}
                        useDisplayDate={!!post.use_display_date}
                        theme={archiveDetailDateAndSourceStyle}
                    />
                )}
                {isBlogPost(post) && (
                    <BlogPostByline
                        date={post.date}
                        authors={post.bp_authors}
                        guestAuthors={post.bp_guest_authors}
                        outsideAuthors={post.bp_outside_authors}
                        theme={archiveDetailBlogPostBylineStyle}
                    />
                )}
                {(isMicrositeDetail(post) || !isBlogPost(post)) && (
                    <Span theme={
                        archiveDetailBlogPostBylineStyle
                    }>
                        {post.byline}
                    </Span>
                )}
            </Div>
            {((post.thumbnail_teaser &&
                <Img
                    theme={archiveDetailThumbnailStyle}
                    image={post.thumbnail_teaser}
                />
            ))}
        </Div>
        <Div theme={archiveDetailBottomStyle}>
            <SocialSharing
                post={post}
                theme={archiveDetailSocialWrapperStyle}
            />
            <Div theme={archiveDetailContentWrapperStyle}>
                <RichText>{post.full_content}</RichText>
                {post.bp_categories && (
                    <BlogPostCategories post={post}/>
                )}
                {(post.add_document || post.add_link) && (
                    <Resources
                        documents={post.add_document}
                        links={post.add_link}
                    />
                )}
            </Div>
        </Div>
    </PostContent>


ArchiveDetail.propTypes = {
    post: PropTypes.object.isRequired,
}

export default ArchiveDetail