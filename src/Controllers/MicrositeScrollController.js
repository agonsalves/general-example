import React, {
    createContext,
    useState
}                    from 'react'
import {useSelector} from 'react-redux'
import smoothscroll  from 'smoothscroll-polyfill'
import {mobileFlag}  from '../redux/selectors'

smoothscroll.polyfill()

export const ScrollContext = createContext(null)

const MicrositeScrollController = ({children}) => {
    const isMobile = useSelector(mobileFlag)
    const [sectionRefs, setSectionRefs] = useState({})
    const [menuOffSet, setMenuOffSet] = useState(undefined)
    const [sectionOffset, setSectionOffset] = useState([])


    const addRef = (url, ref) => {
        if (!sectionRefs.hasOwnProperty(url) || sectionRefs[url].current === null)
            setSectionRefs(current => ({
                ...current,
                [url]: ref
            }))
    }

    const getOffsetTop = (elem) => {
        let offsetTop = 0
        do {
            if (!isNaN(elem?.offsetTop))
                offsetTop += elem?.offsetTop
            // eslint-disable-next-line
        } while (elem = elem?.offsetParent)
        return offsetTop

    }

    const resetActiveMap = () =>
        setSectionRefs({})

    const updateSectionOffset = () => {
        setSectionOffset(Object.entries(sectionRefs).map((section) => {
            let offset = getOffsetTop(section[1].current) - 90
            let siblingOffset = Math.max(getOffsetTop(section[1].current?.nextSibling) - 90, 0)
            let micrositeMenuOffset = !isMobile ? Math.abs(section[1].current?.offsetParent?.children[0]?.children[0]?.children[0]?.children[0]?.offsetTop) : 200

            return {
                slug: section[0],
                offset: offset,
                siblingOffset: siblingOffset,
                micrositeMenuOffset: micrositeMenuOffset
            }
        }))
    }

    const scrollToSection = (url) => {
        if (sectionRefs.hasOwnProperty(url)) {
            const sectionOffset = sectionRefs[url].current.offsetTop
            const mainOffset = sectionRefs[url].current.offsetParent.offsetTop
            const top = !isMobile ? Math.abs(sectionRefs[url].current.offsetParent.children[0].children[0].children[0].children[0].offsetTop) : 200

            if (top > 0) { ///this value becomes 0 in IE, prevent reset of this value in IE
                setMenuOffSet(top)
            }

            window.scroll({
                top: sectionOffset + mainOffset - (!menuOffSet ? top : menuOffSet),
                left: 0,
                behavior: 'smooth'
            })
        }
    }

    const scrollToTop = () => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        }, 500)
    }

    return (
        <ScrollContext.Provider value={{
            scrollToTop,
            addRef,
            sectionRefs,
            scrollToSection,
            sectionOffset,
            updateSectionOffset,
            resetActiveMap
        }}>
            {children}
        </ScrollContext.Provider>
    )
}

export default MicrositeScrollController