import {ConnectedRouter}         from 'connected-react-router'
import React                     from 'react'
import {
    Helmet,
    HelmetProvider
}                                from 'react-helmet-async'
import {
    connect,
    Provider
}                                from 'react-redux'
import {Route}                   from 'react-router'
import Div                       from '../../src/Shared/Div'
import HeaderMenuPanelController from '../../src/Controllers/HeaderMenuPanelController'
import {
    configureStore,
    history
}                                from '../../src/redux/store'
import {globals}                 from '../../src/variables/styles'

const css = require('../../src/variables/defaults.css').toString()

export const Decorator = ({children}) =>
    <Provider store={configureStore}>
        <ConnectedRouter history={history}>
            <Route path="/">
                <HeaderMenuPanelController>
                    <HelmetProvider>
                        <Helmet>
                            <link
                                href="https://use.typekit.net/ewc7upu.css"
                                rel="stylesheet"
                            />
                            <style type="text/css">{css}</style>
                        </Helmet>
                        <Div theme={{
                            size: configureStore.getState().site.fontSize,
                            color: globals.colors.textColor,
                            font: globals.fonts.body,
                            padding: 20
                        }}>
                            <InitializeGate>
                                {children}
                            </InitializeGate>
                        </Div>
                    </HelmetProvider>
                </HeaderMenuPanelController>
            </Route>
        </ConnectedRouter>
    </Provider>

const mapStateToProps = ({site}) => ({
    isInitialized: site.isInitialized
})

const InitializeGate = connect(mapStateToProps)(({isInitialized, children}) => (isInitialized && children) || null)

export const SidebarDecorator = ({children}) =>
    <Div theme={{width: [290, .7, '100%']}} className="sidebar-decorator">{children}</Div>

export const MenuPanelDecorator = ({children}) =>
    <Div
        theme={{width: [940, .5], paddingLeft: 120, paddingRight: 60, paddingTop: 45}}
        className="MenuPanel-decorator"
    >
        {children}
    </Div>