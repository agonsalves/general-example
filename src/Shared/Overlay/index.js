import {AnimatePresence}        from 'framer-motion'
import PropTypes                from 'prop-types'
import React, {useContext}      from 'react'
import MotionDiv                from 'Shared/MotionDiv'
import {headerMenuPanelContext} from 'Controllers/HeaderMenuPanelController'
import {globals}                from 'variables/styles'
import LinkSwitch               from 'Shared/LinkSwitch'
import {overlayStyle}           from 'Shared/Overlay/styles'

const Overlay = ({isOpen, theme, closePortal, url, ...props}) => {
    const {setPanel} = useContext(headerMenuPanelContext)
    const {setGlobalSearchOpen} = useContext(headerMenuPanelContext)
    const overlay = () => {
        return (
            <MotionDiv
                theme={{...overlayStyle, ...theme}}
                {...props}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                onClick={() => {
                    closePortal && closePortal()
                    setPanel('')
                    setGlobalSearchOpen(false)
                    globals.resetBody()
                }}
            />
        )
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {(url && (
                        <LinkSwitch url={url}>
                            {overlay()}
                        </LinkSwitch>
                    )) || (
                        <>{overlay()}</>
                    )}
                </>
            )}
        </AnimatePresence>
    )
}

Overlay.propTypes = {
    isOpen: PropTypes.bool
}

export default Overlay