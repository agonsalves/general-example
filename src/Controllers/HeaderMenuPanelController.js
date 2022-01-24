import React, {
    createContext,
    useState
} from 'react'

export const headerMenuPanelContext = createContext(null)

const HeaderMenuPanelController = ({children}) => {
    const [currentPanel, setCurrentPanel] = useState({})
    const [isGlobalSearchOpen, setIsGlobalSearchOpen] = useState(false)

    return (
        <headerMenuPanelContext.Provider value={{
            currentPanel,
            setPanel: (panelNameAndId) => setCurrentPanel(panelNameAndId),
            isGlobalSearchOpen,
            setGlobalSearchOpen: (flag) => setIsGlobalSearchOpen(flag)
        }}>
            {children}
        </headerMenuPanelContext.Provider>
    )
}

export default HeaderMenuPanelController