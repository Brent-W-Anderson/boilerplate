import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'

declare global {
    interface ImportMeta {
        webpackHot?: {
            accept: () => void
        }
    }
}

const renderMethod = import.meta.webpackHot ? ReactDOM.render : ReactDOM.hydrate
renderMethod(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById( 'root' )
)
