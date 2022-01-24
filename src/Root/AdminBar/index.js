import idx              from 'idx'
import Cookies          from 'js-cookie'
import PropTypes        from 'prop-types'
import React, {
    useEffect,
    useMemo
} from 'react'
import {connect}        from 'react-redux'
import Div              from '../../Shared/Div'
import LinkSwitch       from '../../Shared/LinkSwitch'
import {getCurrentPost} from '../../redux/selectors'
import {
    isBlog,
    isBlogMicrositeDetail,
    isBlogPost,
    isHomepage,
    isIndustryListingPage,
    isMicrosite,
    isMicrositeDetail,
    isMicrositeSubpage
}                       from '../../utils/flags'
import {
    plural,
    singular
}                       from '../../utils/helpers'
import AdminSubMenu     from './AdminSubMenu'
import {adminBarStyles} from './styles'

const AdminBar = ({adminUrl, post, listingPages}) => {
    const fullAdminUrl = adminUrl + '/cms/wp-admin/'
    const postTypes = ['blogs', 'event', 'industry', 'case-study',
        'news-item', 'office', 'person', 'publication', 'practice-area']

    const listingPagePostType = useMemo(() => (
        post.child_type
        || Object.keys(listingPages).find(postType => listingPages[postType].slug === post.slug)
    ), [listingPages, post])

    // Add Links
    const addLinks = postTypes.map((add) => {
        return {
            url: `${fullAdminUrl}post-new.php?post_type=${add}`,
            label: singular(add),
            type: 'add'
        }
    })

    // Edit Links
    const editLinks = useMemo(() => {
        let blogId = idx(post, _ => _.parent_blog.id) || post.parentPost.id
        let linkList = []

        // Edit Link
        if (post.post_type && !isBlog(post)) {
            let label = isMicrositeSubpage(post)
                ? `Configure Page / Sidebar`
                : `Edit this ${singular(post.post_type)}`

            linkList.push({
                url: `${fullAdminUrl}post.php?post=${post.id}&action=edit`,
                label,
            })
        } else if (post.post_type && isBlog(post) && !isBlogPost(post)) {
            linkList.push({
                url: `${fullAdminUrl}post.php?post=${post.id}&action=edit`,
                label: `Configure Page / Sidebar`,
            })
        } else if (post.post_type && isBlogPost(post)) {
            linkList.push({
                url: `${fullAdminUrl}post.php?post=${blogId}&blog-post=${post.id}&post_type=blog-post&action=edit&page=blog-posts`,
                label: `Edit this Blog Post`,
            })
        }

        // Edit in Module Link
        if (listingPagePostType && !post.parent_blog) {
            let editInModuleLink = `${fullAdminUrl}edit.php?post_type=${listingPagePostType}`
            if (isMicrositeSubpage(post))
                editInModuleLink += `&filter-${post.parentPost.post_type}=${post.parentPost.id}`

            linkList.push({
                url: editInModuleLink,
                label: `Edit ${plural(listingPagePostType)} in Module`,
            })
        } else if (post.parent_blog || post.post_type === 'blogs') {
            let editInModuleLink = `${fullAdminUrl}edit.php?post_type=blog-post&post=${blogId}&page=blog-posts&filter-${post.parentPost.post_type}=${post.parentPost.id}`

            linkList.push({
                url: editInModuleLink,
                label: `Edit ${plural('blog-post')} in Module`,
            })
        } else if (isIndustryListingPage(post)) {
            linkList.push({
                url: `${fullAdminUrl}edit.php?post_type=industry`,
                label: `Edit ${post.post_title} in Module`,
            })
        }

        // Microsite Editor Link
        if (isMicrosite(post)) {
            linkList.push({
                url: `${fullAdminUrl}edit.php?post=${post.parentPost.id}&post_type=${post.parentPost.post_type}&page=microsite`,
                label: 'Microsite Editor',
            })

        }

        // Main Microsite Edit Link
        if (isMicrositeDetail(post)) {
            linkList.push({
                url: !isBlogMicrositeDetail(post.detailPage)
                    ? `${fullAdminUrl}post.php?post=${post.detailPage.id}&action=edit`
                    : `${fullAdminUrl}post.php?post=${post.detailPage.parent_blog.id}&blog-post=${post.detailPage.id}&post_type=blog-post&action=edit&page=blog-posts`,
                label: `Edit ${singular(post.detailPage.post_type)} Item`,
            })
        }

        //Firm Highlights edit link
        if (isHomepage(post)) {
            linkList.push({
                url: `${fullAdminUrl}edit.php?post_type=firm-highlights`,
                label: `Edit Firm Highlights in Module`,
            })
        }

        return linkList
    }, [post, listingPagePostType, fullAdminUrl])

    useEffect(() => {
        document.body.style.marginTop = '32px'

        /* eslint-disable react-hooks/exhaustive-deps */
    }, [])

    if (post.is_preview || post.is_revision || post.is_staging)
        return null

    return (
        <>
            <Div theme={adminBarStyles}>
                <LinkSwitch
                    url={fullAdminUrl}
                    target="_self"
                    onClick={(() => null)}
                    children='Back to Admin'
                />
                <AdminSubMenu addLinks={addLinks} editLinks={editLinks}/>
                <LinkSwitch
                    url="#"
                    target="_self"
                    onClick={() => {
                        Cookies.remove('adminUrl')
                        window.location.href = `${adminUrl}/cms/wp-login.php?action=logout`
                    }}
                    children='Log Out'
                    theme={adminBarStyles.logOut}
                />
            </Div>
            {/*<Div theme={adminBarStyles.spacer}/>*/}
        </>
    )
}

AdminBar.propTypes = {
    listingPages: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
    adminUrl: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    listingPages: state.site.config.listingPages,
    post: getCurrentPost(state)
})

export default connect(mapStateToProps)(AdminBar)