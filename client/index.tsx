import React from 'react'
import ReactDOM from 'react-dom/client'
import loadable from '@loadable/component'

const App = loadable( () => import( './components/App' ) )

const container = document.getElementById( 'root' )

if ( container ) {
    if ( module.hot ) {
        console.warn( 'createRoot' )

        const root = ReactDOM.createRoot( container )
        root.render( <App /> )
    } else {
        console.warn( 'hydrateRoot' )

        ReactDOM.hydrateRoot( container, <App /> )
    }
} else {
    console.error( 'Failed to find the root element to mount the application.' )
}
