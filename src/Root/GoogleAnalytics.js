import PropTypes        from 'prop-types'
import {
    memo,
    useEffect,
    useState
}                       from 'react'
import ReactGA          from 'react-ga'
import {connect}        from 'react-redux'
import {getCurrentPost} from '../redux/selectors'
import {isMicrosite}    from '../utils/flags'

const GoogleAnalytics = memo(({pathname, post, search, gaWebPropertyId, appMode}) => {
    if (post.is_preview || post.is_revision || post.is_staging)
        return null
    
    const [prev, setPrev] = useState({})

    useEffect(() => {
        if (gaWebPropertyId) {
            ReactGA.initialize(gaWebPropertyId, {
                debug: false,
                testMode: false,
                titleCase: false,
            })
        } else if (appMode === 'production') {
            console.warn('Analytics tracking was not initialized. Check REACT_APP_GA_WEB_PROPERTY_ID.');
        }
    }, [gaWebPropertyId, appMode])

    useEffect(() => {
        if (gaWebPropertyId) {
            if (pathname + search === post.key && (prev.pathname !== pathname || prev.search !== search)) {
                ReactGA.set({
                    dimension1: post.slug === '/',
                    dimension2: isMicrosite(post) ? post.parentPost.post_type : '(not set)',
                    dimension3: isMicrosite(post) ? post.parentPost.id : '(not set)',
                    dimension4: post.post_type,
                    dimension5: post.id
                })
                ReactGA.pageview(post.key, [], post.post_title)
                setPrev({pathname, search})
            }
        }
    }, [post, pathname, search, prev, setPrev, gaWebPropertyId])

    return null
})

GoogleAnalytics.displayName = 'GoogleAnalytics'

GoogleAnalytics.propTypes = {
    pathname: PropTypes.string.isRequired,
    post: PropTypes.object.isRequired,
    search: PropTypes.string,
    gaWebPropertyId: PropTypes.string,
    appMode: PropTypes.string,
}

const mapStateToProps = state => ({
    pathname: state.router.location.pathname,
    search: state.router.location.search,
    post: getCurrentPost(state),
    gaWebPropertyId: process.env.REACT_APP_GA_WEB_PROPERTY_ID,
    appMode: state.site.config.appMode,
})

export default connect(mapStateToProps)(GoogleAnalytics)