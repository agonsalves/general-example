import {
    useCallback,
    useEffect
}                        from 'react'
import {useSelector}     from 'react-redux'
import {WINDOW_RESIZE}   from '../redux/reducers'
import {layoutSelector}  from '../redux/selectors'
import {configureStore}  from '../redux/store'
import {
    getLayout,
    LAYOUT_MOBILE
}                        from '../utils/getLayout'
import {getEvenFontSize} from '../utils/helpers'

const LayoutSwitch = ({children}) => {
    let {layout, fontSize} = useSelector(layoutSelector)

    const setLayout = useCallback(() => {
        if (getLayout() !== layout || (layout !== LAYOUT_MOBILE && fontSize !== getEvenFontSize()))
            configureStore.dispatch({
                type: WINDOW_RESIZE,
                layout: getLayout(),
                fontSize: getEvenFontSize()
            })
    }, [layout, fontSize])

    useEffect(() => {
        window.addEventListener('resize', setLayout)
        setLayout()

        return () => window.removeEventListener('resize', setLayout)
    }, [setLayout])

    return children
}

export default LayoutSwitch