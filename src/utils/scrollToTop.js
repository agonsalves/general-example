import {isInternetExplorer} from './flags'

export const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop
    const smoothness = 8
    let val = c - c / smoothness
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop)
        window.scrollTo(0, c - c / 8)
    }

    if (isInternetExplorer()) {
        if (val < smoothness) {
            val = 0
            window.scrollTo(0, val)
        }
    }
}