import React, {useContext}    from 'react'
import {useSelector}          from 'react-redux'
import MotionDiv              from '../Shared/MotionDiv'
import {TransitionAnimations} from '../Controllers/TransitionController'
import {mobileFlag}           from '../redux/selectors'

const TransitionOverlay = () => {
    const {overlayAnimation} = useContext(TransitionAnimations)
    const isMobile = useSelector(mobileFlag)

    return (
        <MotionDiv
            theme={{
                backgroundColor: 'white',
                width: '100%',
                position: 'fixed',
                bottom: 0,
                height: 0,
                zIndex: 12,
                display: isMobile ? 'none' : 'static'
            }}
            initial={{height: '100vh', opacity: 1}}
            animate={overlayAnimation}
        />
    )
}

export default TransitionOverlay