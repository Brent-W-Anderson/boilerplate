import React from 'react'
import ReactDOM from 'react-dom/client'
import loadable from '@loadable/component'

const Routes = loadable( () => import( './pages/routes' ) )

const container = document.getElementById( 'root' )

const App = () => {
    if ( process.env.NODE_ENV === 'development' ) {
        return (
            <React.StrictMode>
                <Routes />
            </React.StrictMode>
        )
    }

    return <Routes />
}

if ( container ) {
    ReactDOM.hydrateRoot( container, <App /> )
} else {
    console.error( 'Failed to find the root element to mount the application.' )
}
