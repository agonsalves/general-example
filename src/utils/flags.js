import {getPostType}          from '../redux/selectors'
import {configureStore}       from '../redux/store'
import {postTypeConfig}       from '../variables/postTypes'
import {breakpointUpperLimit} from '../variables/styles'

/**
 * This file is only for pure functions that return boolean values which are used to determine whether a component
 * should render or not.
 */

export const isArchiveDetail = post => getPostType('name', post.post_type).type === 'archive' && !isMicrosite(post) && !isOfficeDetail(post)
export const isArchiveListing = post => getPostType('page', post.page_type).type === 'archive' && !isMicrosite(post)
export const isCaseStudyListing = post => isArchiveListing(post) && post.template === 'case-studies'
export const isEventListing = post => isArchiveListing(post) && post.template === 'events'
export const isBlog = post => post?.parentPost?.post_type === 'blogs' || post?.template === 'blogs'
export const isBlogMicrositeDetail = post => post?.post_type === 'blog-post' || post?.template === 'microsite-blog-post-detail'
export const isBlogSubPage = post => isBlog && (post.template === 'microsite-custom' || post.template === 'microsite-subscribe')
export const isBlogMainPage = post => post.post_type === 'blogs'
export const isBlogPost = post => post.template === 'blog-post'
export const isBlogSearch = post => post.template === 'blogs-search'
export const isNewsSearch = post => post.template === 'news-search'
export const isPublicationSearch = post => post.template === 'publications-search'
export const isEventSearch = post => post.template === 'events-search'
export const isCaseStudySearch = post => post.template === 'case-studies-search'
export const isArchiveListingSearch = post => isBlogSearch(post) || isPublicationSearch(post) || isNewsSearch(post) || isEventSearch(post) || isCaseStudySearch(post)
export const isHomepage = post => post.slug === '/'
export const isPaginated = post => !!post.page && post.total > configureStore.getState().site.config.postsPerPage
export const isPersonMicrosite = post => post?.parentPost?.post_type === 'person' || post?.post_type === 'person'
export const isPeopleSearch = post => post?.template === 'people-search'
export const isPracticeSearch = post => post.template === 'practice-search'
export const isPersonMicrositeMainPage = post => isPersonMicrosite(post) && post.slug === post.parentPost.slug
export const isPersonMicrositeHasPhoto = post => isPersonMicrosite(post) && !!post.parentPost.photo
export const isPracticeMicrosite = post => post?.parentPost?.template === 'practice-area'
export const isPracticeListingPage = post => post.template === 'practice'
export const isIndustryMicrosite = post => post.parentPost.template === 'industry'
export const isIndustryListingPage = post => post.template === 'client-industries'
export const isPeoplePage = post => post.template === 'people' && !post.search
export const isContactPage = post => post.template === 'contact'
export const isCareersPage = post => (post.template === 'client-careers-overview' && !isCareersSubPage(post)) || post.rm_custom_body_class === 'careers-main'
export const isCareersSubPage = post => post.rm_custom_body_class === 'careers-subpage' || ['current_job_openings', 'client-careers-summer-program'].includes(post.template)
export const isCareersSection = post => isCareersPage(post) || isCareersSubPage(post)
export const isOfficeDetail = post => post.template === 'office'
export const isGlobalSearch = post => post.template === 'global-search'
export const isAboutUsPage = post => post.template === 'client-about'
export const isAboutUsSubPage = post => post.rm_custom_body_class === 'about-subpage' || ['client-diversity', 'client-accolades', 'client-community', 'client-leadership'].includes(post.template)
export const isAboutUsSection = post => isAboutUsPage(post) || isAboutUsSubPage(post)
export const isMicrosite = post =>
    !!postTypeConfig.find(postType => postType.name === post.parentPost.post_type && postType.type === 'microsite')
export const isMicrositeSubpage = post => isMicrosite(post) && post.slug !== post.parentPost.slug
export const isMicrositeDetail = post => !!post.detailPage
export const hasArchiveSearch = post =>
    getPostType('page', post.page_type).type === 'archive' &&
    !!post.parentPost.page_type
export const hasDynamicWidgets = post =>
    !post.hasOwnProperty('disable_sidebar_management') &&
    post.hasOwnProperty('widgets')
    && post.template !== 'microsite-people'
export const hasMicrositeMenu = post => !!post.parentPost.microsite_pages
export const hasAboveMenu = post => isAboutUsSection(post) || isCareersSection(post)
export const hasTopMenu = post => !!post?.menu_above_content?.items
export const isTablet = () =>
    (window.innerWidth >= breakpointUpperLimit.mobile &&
        window.innerWidth <= breakpointUpperLimit.tablet) || isPrint()
export const isSmallDesktop = () => window.innerWidth <= breakpointUpperLimit.small && !isTablet()
export const isLargeDesktop = () => window.innerWidth > breakpointUpperLimit.small
export const isXLargeDesktop = () => window.innerWidth > breakpointUpperLimit.large
export const isPrint = () => window.matchMedia('print').matches
export const isLandscape = () => window.matchMedia('(orientation: landscape)').matches
export const isInternetExplorer = () => window.matchMedia('all and (-ms-high-contrast: none), (-ms-high-contrast: active)').matches
export const isFireFox = () => window.matchMedia('@-moz-document url-prefix()').matches
export const isEdge = () => window.matchMedia('@supports (-ms-ime-align:auto)').matches
export const isIos = () => window.matchMedia('@supports (-webkit-overflow-scrolling: touch)').matches
export const isSafari = () => window.matchMedia('@supports (-webkit-marquee-repetition:infinite and (object-fit:fill)').matches
export const isDefinitelyNotSectioned = post =>
    isPeoplePage(post) ||
    isPracticeListingPage(post) ||
    isIndustryListingPage(post) ||
    isHomepage(post)
export const isSameSection = (a, b) =>
    !isDefinitelyNotSectioned(a) &&
    !isDefinitelyNotSectioned(b) &&
    parseInt(a.parentPost.id) === parseInt(b.parentPost.id)