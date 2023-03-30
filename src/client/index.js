import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate
renderMethod(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById( 'root' )
)