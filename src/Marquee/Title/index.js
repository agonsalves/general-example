import MarqueeBioInfo     from 'Marquee/MarqueeBioInfo'
import PracticeSearchBar  from 'Marquee/PracticeSearchBar'
import PropTypes          from 'prop-types'
import React, {useMemo}   from 'react'
import {getPostType}      from 'redux/selectors'
import ButtonIconText     from 'Shared/ButtonIconText'
import Div                from 'Shared/Div'
import H1                 from 'Shared/H1'
import LinkSwitch         from 'Shared/LinkSwitch'
import MotionDiv          from 'Shared/MotionDiv'
import Span               from 'Shared/Span'
import {
    isArchiveDetail,
    isArchiveListing,
    isArchiveListingSearch,
    isHomepage,
    isPersonMicrosite,
    isPracticeListingPage
}                         from 'utils/flags'
import {longArrowAltDown} from 'variables/iconLibrary'
import {
    homePageStyle,
    pageTitleInnerStyle,
    pageTitleLinkStyle,
    pageTitleStyleSwitch,
    pageTitleWrapperStyle
}                         from './styles'


const Title = ({post}) => {
    const title = useMemo(() => {
        if (isArchiveListing(post))
            return getPostType('name', post.archive_post_type).title
        else if (isArchiveDetail(post))
            return getPostType('name', post.post_type).title
        else if (isHomepage(post))
            return post.home_headline

        return post.breadcrumb_text ? post.breadcrumb_text : post.parentPost.post_title
    }, [post])

    const homeTitleVariants = {
        initial: {
            opacity: 0,
            y: 50
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .5
            }
        }
    }

    const PageTitle = () => (
        <H1
            className="page-title"
            id="page-title"
            theme={{...pageTitleStyleSwitch(post)}}
        >
            <LinkSwitch
                url={isArchiveListingSearch(post)
                    ? `${post.slug}`
                    : (isArchiveListing(post) || post.slug !== post.parentPost.slug)
                        ? post.parentPost.slug
                        : ''
                }
                theme={pageTitleLinkStyle(post)}
            >
                {title}
            </LinkSwitch>
        </H1>
    )

    return (
        <Span theme={pageTitleWrapperStyle(post)}>
            {(isPersonMicrosite(post) && (
                <PageTitle/>
            )) || (
                <MotionDiv
                    variants={homeTitleVariants}
                    initial="initial"
                    animate="animate"
                    theme={pageTitleInnerStyle}
                >
                    <PageTitle/>
                </MotionDiv>
            )}
            {isPersonMicrosite(post) && (
                <MarqueeBioInfo post={post}/>
            )}
            {isPracticeListingPage(post) && (
                <PracticeSearchBar/>
            )}
            {isHomepage(post) && post.home_description && (
                <>
                    <Div theme={homePageStyle.description}>{post.home_description}</Div>
                    <ButtonIconText
                        theme={homePageStyle.button}
                        children={'View Case Studies'}
                        icon={longArrowAltDown}
                        onClick={() => window.scroll({
                            top: window.innerHeight * .7,
                            left: 0,
                            behavior: 'smooth'
                        })}
                    />
                </>
            )}
        </Span>
    )
}

Title.propTypes = {
    post: PropTypes.object.isRequired
}

export default Title