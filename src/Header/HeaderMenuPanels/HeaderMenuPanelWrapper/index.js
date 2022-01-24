import {AnimatePresence}         from 'framer-motion'
import {headerMenuPanelStyle}    from 'Header/HeaderMenuPanels/HeaderMenuPanelWrapper/styles'
import PropTypes                 from 'prop-types'
import React, {useContext}       from 'react'
import {headerMenuPanelVariants} from 'Header/HeaderMenuPanels/animations'
import Icon                      from 'Shared/Icon'
import MotionDiv                 from 'Shared/MotionDiv'
import Span                      from 'Shared/Span'
import {headerMenuPanelContext}  from 'Controllers/HeaderMenuPanelController'
import {timesLight}              from 'variables/iconLibrary'
import {globals}                 from 'variables/styles'

const HeaderMenuPanelWrapper = ({children, name}) => {
    const {setPanel} = useContext(headerMenuPanelContext)

    return (
        <AnimatePresence exitBeforeEnter>
            {name && (
                <MotionDiv
                    theme={headerMenuPanelStyle}
                    key={name}
                    variants={headerMenuPanelVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                >
                    <Span
                        theme={headerMenuPanelStyle.closeButton}
                        onClick={() => {
                            setPanel('')
                            globals.resetBody()
                        }}>
                        <Icon icon={timesLight} theme={headerMenuPanelStyle.closeButtonIcon}/>
                    </Span>
                    {children}
                </MotionDiv>
            )}
        </AnimatePresence>
    )
}

HeaderMenuPanelWrapper.propTypes = {
    children: PropTypes.object,
    name: PropTypes.string,
}

export default HeaderMenuPanelWrapper