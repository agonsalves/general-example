import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'


/**
 * PLEASE ENSURE core-js and regenerator-runtime are always imported first
 */

import {ConnectedRouter} from 'connected-react-router'
import React             from 'react'
import ReactDOM          from 'react-dom'
import {Provider}        from 'react-redux'
import Root              from 'Root'
import {
    configureStore,
    history
}                        from './redux/store'
import './variables/defaults.css'

/**
 * Disable browser's scroll history so that page does not jump to the previous scroll position when using the browser's
 * back/forward buttons.
 */
if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'
}

ReactDOM.render((
    <Provider store={configureStore}>
        <ConnectedRouter history={history}>
            <Root/>
        </ConnectedRouter>
    </Provider>
), document.getElementById('root'))