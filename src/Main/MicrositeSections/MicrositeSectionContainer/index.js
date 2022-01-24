import {ScrollContext}         from 'Controllers/MicrositeScrollController'
import React, {
    memo,
    useContext,
    useEffect,
    useRef
}                              from 'react'
import Div                     from 'Shared/Div'
import {micrositeSectionStyle} from './styles'

const MicrositeSection = memo(({url, children, theme}) => {
    const {addRef} = useContext(ScrollContext)
    const thisRef = useRef(null)

    useEffect(() => {
        addRef(url, thisRef)

    }, [url, addRef])

    return (
        <Div theme={{...micrositeSectionStyle, ...theme}} ref={thisRef}>
            {children}
        </Div>
    )
})

MicrositeSection.defaultProps = {
    theme: {}
}

MicrositeSection.displayName = 'MicrositeSection'

export default MicrositeSection