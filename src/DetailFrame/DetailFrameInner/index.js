import ArchiveDateAndSource from 'Main/ArchiveDateAndSource'
import EventDetailInfo      from 'Main/EventDetailInfo'
import Resources            from 'Main/Resources'
import SocialSharing        from 'Main/SocialSharing'
import { archiveDetailBlogPostBylineStyle } from 'Main/BlogPostByline/styles'
import React, {
    useContext,
    useEffect,
    useRef
}                           from 'react'
import {useSelector}        from 'react-redux'
import {mobileFlag}         from 'redux/selectors'
import Div                  from 'Shared/Div'
import Img                        from 'Shared/Img'
import Span                       from 'Shared/Span'
import MotionDiv                  from 'Shared/MotionDiv'
import RichText                   from 'Shared/RichText'
import AssociatedPeopleWidget     from 'Sidebars/AssociatedPeopleWidget'
import AssociatedPracticesWidget  from 'Sidebars/AssociatedPracticesWidget'
import AssociatedIndustriesWidget from 'Sidebars/AssociatedPracticesWidget/AssociatedIndustriesWidget'
import WidgetSwitch               from 'Sidebars/WidgetSwitch'
import {hasDynamicWidgets}        from 'utils/flags'
import {intersperse}              from 'utils/helpers'
import {DetailFrameContext}       from '../index'
import {
    detailFrameBlogCatWrapperStyle,
    detailFrameContentWrapperStyle
}                                 from '../styles'
import {
    archiveDetailBottomStyle,
    archiveDetailContentWrapperStyle,
    archiveDetailDateAndSourceStyle,
    archiveDetailSocialWrapperStyle,
    archiveDetailTitleStyle,
    archiveDetailTopStyle,
    archiveDetailTypeStyle,
    detailFrameBottomStyle,
    detailFrameInnerStyle,
    detailFrameTopStyle,
    detailMobileTopImageStyle,
    detailSidebarImagePlaceholderStyle,
    detailSidebarImageStyle,
    detailSideBarWrapperStyle,
    micrositeDetailContentWrapperStyle
}                                 from './styles'


const DetailFrameInner = ({post, direction}) => {
    const isMobile = useSelector(mobileFlag)
    const hasSidebar = !!post.detailPage.thumbnail_teaser || !!post.detailPage.people || !!post.detailPage.practice_area || !!post.detailPage.industry || !!hasDynamicWidgets(post.detailPage)
    const thisRef = useRef()
    const {addRef} = useContext(DetailFrameContext)

    const detailFrameContentVariants = {
        exit: {
            translateX: direction.exit,
            zIndex: 1,
            transition: {
                duration: .5,
                ease: 'easeOut'
            }
        },
        initial: {
            x: direction.init,
            y: 0,
            zIndex: 0,
            transition: {
                duration: .5,
                ease: 'easeOut'
            }
        },
        animate: {
            x: '0',
            transition: {
                duration: .5,
                ease: 'easeOut'
            }
        }
    }

    useEffect(() => {
        addRef(thisRef)
    }, [post, addRef])

    return (
        <MotionDiv
            intial={'initial'}
            animate={'animate'}
            exit={'exit'}
            variants={detailFrameContentVariants}
            theme={detailFrameInnerStyle(direction.init)}
            ref={thisRef}
        >
            <Div theme={detailFrameContentWrapperStyle}>
                <Div
                    theme={{...archiveDetailTopStyle(!!post.detailPage.thumbnail_teaser), ...detailFrameTopStyle}}>
                    {post.detailPage.publication_type && (
                        <Div theme={archiveDetailTypeStyle}>
                            {post.detailPage.publication_type[0].term}
                        </Div>
                    )}
                    {post.detailPage.news_item_type && (
                        <Div theme={archiveDetailTypeStyle}>
                            {post.detailPage.news_item_type[0].term}
                        </Div>
                    )}
                    {post.detailPage.bp_categories && (
                        <Div theme={detailFrameBlogCatWrapperStyle}>
                            {intersperse(post.detailPage.bp_categories.map((c, i) => (
                                <Div theme={archiveDetailTypeStyle} key={i}>
                                    {c.term}
                                </Div>
                            )), ', ')}
                        </Div>
                    )}
                    <Div theme={archiveDetailTitleStyle(post)}>
                        {post.detailPage.post_title}
                    </Div>
                    {(post.detailPage.post_type === 'event' && (
                        <EventDetailInfo post={post.detailPage}/>
                    )) || (
                        <ArchiveDateAndSource
                            date={post.detailPage.date}
                            source={post.detailPage.publication}
                            displayDate={post.detailPage.display_date}
                            useDisplayDate={!!post.detailPage.use_display_date}
                            theme={archiveDetailDateAndSourceStyle}
                        />
                    )}
                    {post.detailPage.byline && (
                        <Span theme={
                            archiveDetailBlogPostBylineStyle.name
                        }>
                            {post.detailPage.byline}
                        </Span>
                    )}
                    {((post.detailPage.thumbnail_teaser && isMobile) && (
                        <Img
                            theme={detailMobileTopImageStyle}
                            image={post.detailPage.thumbnail_teaser}
                        />
                    ))}
                </Div>
                <Div theme={{...archiveDetailBottomStyle, ...detailFrameBottomStyle}}>
                    <SocialSharing
                        post={post.detailPage}
                        theme={archiveDetailSocialWrapperStyle}
                    />
                    <Div theme={{...archiveDetailContentWrapperStyle, ...micrositeDetailContentWrapperStyle}}>
                        <RichText>{post.detailPage.full_content}</RichText>
                        {(post.detailPage.add_document || post.detailPage.add_link) && (
                            <Resources
                                documents={post.detailPage.add_document}
                                links={post.detailPage.add_link}
                            />
                        )}
                    </Div>
                </Div>
            </Div>
            {hasSidebar && (
                <Div className="microsite-detail-sidebar" theme={detailSideBarWrapperStyle}>
                    {(post.detailPage.photo && (
                        <Img
                            theme={detailSidebarImageStyle}
                            image={post.detailPage.photo}
                        />
                    )) || (
                        <Div theme={detailSidebarImagePlaceholderStyle}/>
                    )}
                    {post.detailPage.people && (
                        <AssociatedPeopleWidget people={post.detailPage.people}/>
                    )}
                    {post.detailPage.practice_area && (
                        <AssociatedPracticesWidget
                            practices={post.detailPage.practice_area}/>
                    )}
                    {post.detailPage.industry && (
                        <AssociatedIndustriesWidget industries={post.detailPage.industry}/>
                    )}
                    {hasDynamicWidgets(post.detailPage) && post.detailPage.widgets.map((widget, index) =>
                        <WidgetSwitch key={index} widget={widget}/>
                    )}
                </Div>
            )}
        </MotionDiv>
    )
}

export default DetailFrameInner
