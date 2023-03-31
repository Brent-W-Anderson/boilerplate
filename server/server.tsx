import express from 'express'
import path from 'path'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackClientConfig from '../config/webpack.client.config'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
// import { StaticRouter } from 'react-router-dom/server'
import App from '../client/components/App'

const app = express()
const isDevelopment = process.env.NODE_ENV !== 'production'

if ( isDevelopment ) {
    const compiler = webpack( webpackClientConfig )
    app.use(
        webpackDevMiddleware( compiler, {
            publicPath: webpackClientConfig.output?.publicPath,
        } )
    )
    app.use( webpackHotMiddleware( compiler ) )
}

app.use( express.static( path.resolve( __dirname, '../dist/client' ) ) )

app.set( 'view engine', 'hbs' )
app.set( 'views', path.resolve( __dirname, 'views' ) )

app.get( '/', ( req, res ) => {
    const appMarkup = ReactDOMServer.renderToString( <App /> )

    console.log( appMarkup )

    res.render( 'index', { appMarkup } )
} )

const port = process.env.PORT || 3000
app.listen( port, () => {
    console.log( `Server listening on port ${ port }` )
} )
