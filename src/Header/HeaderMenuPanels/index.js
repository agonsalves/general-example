import {headerMenuPanelContext}      from 'Controllers/HeaderMenuPanelController'
import Overlay                       from 'Shared/Overlay'
import React, {useContext}           from 'react'
import Div                           from 'Shared/Div'
import HeaderMenuPanelWrapper        from './HeaderMenuPanelWrapper'
import MenuPanelGeneric              from './MenuPanelGeneric'
import MenuPanelIndustries           from './MenuPanelIndustries'
import MenuPanelPeople               from './MenuPanelPeople'
import MenuPanelService              from './MenuPanelService'
import {headerMenuPanelWrapperStyle} from './styles'

const HeaderMenuPanels = ({post}) => {
    const {currentPanel} = useContext(headerMenuPanelContext)
    const setCurrentPanel = () => {
        switch (currentPanel.name) {
            case 'menu-panel-services':
                return <MenuPanelService post={post}/>
            case 'menu-panel-people':
                return <MenuPanelPeople post={post}/>
            case 'menu-panel-industries':
                return <MenuPanelIndustries post={post}/>
            case 'menu-panel-generic':
                return <MenuPanelGeneric post={post} id={currentPanel.id}/>
            default:
                return null
        }
    }
    const panelOpen = setCurrentPanel()

    return (
        <Div theme={headerMenuPanelWrapperStyle}>
            <HeaderMenuPanelWrapper
                children={setCurrentPanel()}
                name={currentPanel.name}
            />
            <Overlay isOpen={!!panelOpen}/>
        </Div>
    )
}

HeaderMenuPanels.displayName = 'HeaderMenuPanels'

export default HeaderMenuPanels
