import React from 'react'
import ReactDOM from 'react-dom/client'
import loadable from '@loadable/component'

const App = loadable( () => import( './components/App' ) )

const container = document.getElementById( 'root' )

if ( container ) {
    ReactDOM.hydrateRoot( container, <App /> )
} else {
    console.error( 'Failed to find the root element to mount the application.' )
}
