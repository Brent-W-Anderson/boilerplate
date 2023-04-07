import express from 'express'
import path from 'path'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackClientConfig from '../config/webpack.client.config'
import ReactDOMServer from 'react-dom/server'

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

app.use( express.static( path.resolve( __dirname, '../client' ) ) )

app.set( 'view engine', 'hbs' )
app.set( 'views', path.resolve( __dirname, 'views' ) )

// we don't need to about paths because react-router-dom takes care of this.
app.get( '*', ( _, res ) => {
    const appMarkup = ReactDOMServer.renderToString( null )
    const styles = 'styles.css'

    res.render( 'index', { appMarkup, styles } )
} )

const port = process.env.PORT || 3000
app.listen( port, () => {
    console.log( `Server listening on port ${ port }` )
} )
