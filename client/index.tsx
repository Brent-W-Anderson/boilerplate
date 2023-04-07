import React from 'react'
import ReactDOM from 'react-dom/client'
import loadable from '@loadable/component'

const Routes = loadable( () => import( './pages/routes' ) )

const container = document.getElementById( 'root' )

if ( container ) {
    ReactDOM.hydrateRoot( container, <Routes /> )
} else {
    console.error( 'Failed to find the root element to mount the application.' )
}
