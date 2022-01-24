import {routerMiddleware}     from 'connected-react-router'
import {createBrowserHistory, createMemoryHistory} from 'history'
import {
    applyMiddleware,
    compose,
    createStore
}                             from 'redux'
import {createLogger}         from 'redux-logger'
import createSagaMiddleware   from 'redux-saga'
import site                   from './reducers'

export const
    history = process.env.NODE_ENV === 'test' ? createMemoryHistory() : createBrowserHistory(),
    sagaMiddleware = createSagaMiddleware()

let middleware = [
    routerMiddleware(history),
    sagaMiddleware
]

if (!['production', 'test'].includes(process.env.NODE_ENV)) {
    const loggerMiddleware = createLogger()
    middleware = [
        ...middleware,
        loggerMiddleware
    ]
}

export const configureStore = createStore(
    site(history),
    compose(
        applyMiddleware(...middleware)
    )
)