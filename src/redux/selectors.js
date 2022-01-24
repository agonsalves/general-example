import idx                from 'idx'
import {
    createSelector,
    createSelectorCreator,
    defaultMemoize
}                         from 'reselect'
import {LAYOUT_MOBILE}    from '../utils/getLayout'
import {isEmpty}          from '../utils/helpers'
import {
    pathnameToArray,
    stripTrailingSlash
}                         from '../utils/url'
import {globalSearchPost} from '../variables/generalPosts'
import {postTypeConfig}   from '../variables/postTypes'

/**
 * This function compares the current and previous values of 'post'.
 * When it returns true, the getCurrentPost selector will NOT update.
 * This is to prevent a momentary flicker when the post object is empty.
 *
 * @param current
 * @param previous
 * @returns {boolean}
 */
const postCheck = (current, previous) => !previous

const createPostSelector = createSelectorCreator(
    defaultMemoize,
    postCheck
)

const isGlobalSearch = ({location}) => (window.location.origin === process.env.REACT_APP_SITE_URL) && location.pathname === '/' && !!location.search

const isPaginated = (posts, router) => idx(posts, _ => parseInt(_[router.location.pathname].page) > 1)

const getPaginatedParent = (posts, pathname) => {
    for (let i in posts) {
        if (posts.hasOwnProperty(i) && i.includes(pathnameToArray(pathname)[0] + '/page/'))
            return posts[i]
    }
}

/**
 * Retrieves the current post from the store
 *
 * @param {object} state
 * @returns {object}
 */
const getPostFromStore = ({posts, router, site}) => {
    let parentPost = null,
        pathname = encodeURI(router.location.pathname).toLowerCase()

    if ( site.config.blogs?.[window.location.hostname] && 1 )
        pathname = stripTrailingSlash( '/' + site.config.blogs[window.location.hostname].path + pathname )

    let post = posts[pathname + router.location.search]

    if (isGlobalSearch(router))
        parentPost = globalSearchPost
    else if (post && post.post_type !== 'microsite-page' && isPaginated(posts, router))
        parentPost = posts[pathname]
    else {
        const pathSegments = pathnameToArray(pathname)
        let parentSlugLookup = `/${pathSegments[0]}`
        if (pathSegments[0].substr(0, 9) === '@preview-'
            || pathSegments[0].substr(0, 10) === '@revision-'
            || pathSegments[0].substr(0, 9) === '@staging-'
        ) {
            if (pathSegments.length >= 4 && pathSegments[1] === 'hierarchy') {
                // Preview of MicrositePage within a Microsite, BlogPost within a Blog, or ChildPage within a page-tree.
                // Example: /@preview-ID/hierarchy/ANCESTOR_ID[/ANCESTOR_ID]/CHILD_ID
                parentSlugLookup = '/' + pathSegments.slice(0, -1).join('/')
            } else {
                // Preview of everything else which is generally non-hierarchical/top-level.
                // In this case, the "parent" is the self, as odd as this seems.
                // Example: /@preview-
                // Example: /@staging-XYZ/hierarchy/MICROSITE_ID
                parentSlugLookup = pathname
            }
        }
        parentPost = posts[parentSlugLookup] || getPaginatedParent(posts, pathname)
    }

    if (!parentPost) {
        if (post && post.post_type === 'page')
            parentPost = {}
        else if (post && site.config.listingPages[post.post_type]) {
            // if the post type has a defined listing page, grab it from the list of posts
            parentPost = posts[site.config.listingPages[post.post_type].slug]

            // if the list of posts does not contain the desired listing page, then construct it
            if (!parentPost) {
                parentPost = {
                    post_title: getPostTypeByKey('name', post.post_type).title,
                    template: 'page'
                }
            }
        } else
            parentPost = post
    }

    if (!isEmpty(parentPost) && !isEmpty(post)) {
        if ((post.template.includes('microsite-') && post.template.includes('-detail')) || post.template === 'microsite-people') {
            post = {
                ...parentPost,
                parentPost,
                detailPage: post
            }
        } else {
            post = {
                ...post,
                parentPost
            }
        }
    }

    return post
}

/**
 * Retrieves the postType object from the system config that contains the matching key/value pair.
 *
 * Usage: postTypeConfig('name','news-item').plural
 *
 * @param {string} key
 * @param {string} value
 * @returns {object}
 */
const getPostTypeByKey = (key, value = null) =>
    postTypeConfig.find(type => type[key] === value) || {}

/**
 *
 * MEMOIZED SELECTORS
 *
 * https://www.npmjs.com/package/reselect
 *
 */
export const getCurrentPost = createPostSelector(
    getPostFromStore,
    post => post
)

export const getPostType = createSelector(
    getPostTypeByKey,
    value => value
)

export const layoutSelector = createSelector(
    ({site}) => ({
        layout: site.layout,
        fontSize: site.fontSize
    }),
    layout => layout
)

export const mobileFlag = createSelector(
    ({site}) => site.layout,
    layout => layout === LAYOUT_MOBILE
)
