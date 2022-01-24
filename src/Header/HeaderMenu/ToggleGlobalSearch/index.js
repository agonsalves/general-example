import {headerMenuPanelContext} from 'Controllers/HeaderMenuPanelController'
import React, {useContext}      from 'react'
import Icon                     from 'Shared/Icon'
import MotionDiv                from 'Shared/MotionDiv'
import {search}                 from 'variables/iconLibrary'
import {
    globalSearchIconVariants,
    globalSearchToggleVariants,
    globalSearchVariants
}                               from './animations'
import GlobalSearchField        from './GlobalSearchField'
import {
    globalSearchIconStyle,
    globalSearchToggleStyle
}                               from './styles'

const ToggleGlobalSearch = ({post}) => {
    const {setGlobalSearchOpen, isGlobalSearchOpen} = useContext(headerMenuPanelContext)

    return (
        <MotionDiv
            theme={globalSearchToggleStyle}
            variants={globalSearchToggleVariants}
            initial="initial"
            animate={isGlobalSearchOpen ? 'expanded' : 'initial'}
            onClick={() => {
                setGlobalSearchOpen(true)
            }}
        >
            <MotionDiv
                theme={globalSearchIconStyle}
                variants={globalSearchIconVariants}
                initial="initial"
                animate={isGlobalSearchOpen ? 'expanded' : 'initial'}
                className="toggle-menu-panel"
            >
                <Icon icon={search}/>
            </MotionDiv>
            <MotionDiv
                variants={globalSearchVariants}
                initial="initial"
                animate={isGlobalSearchOpen ? 'expanded' : 'initial'}
            >
                <GlobalSearchField isOpen={isGlobalSearchOpen} post={post}/>
            </MotionDiv>
        </MotionDiv>
    )
}


export default ToggleGlobalSearch