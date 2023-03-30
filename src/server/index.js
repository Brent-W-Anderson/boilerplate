import express from 'express'
import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from '../App'

const app = express()
const PORT = process.env.PORT || 3000

app.use( express.static( path.resolve( __dirname, '../../public' ) ) )

app.get( '*', ( req, res ) => {
    res.setHeader( 'Content-Type', 'text/html' )

    const indexFile = path.resolve( __dirname, '../../public/index.html' )
    const template = fs.readFileSync( indexFile, 'utf8' )
    const appHtml = ReactDOMServer.renderToString( <App /> )
    const finalHtml = template.replace( '<div id="root"></div>', `<div id="root">${ appHtml }</div>` )

    res.send( finalHtml )
} )

app.listen( PORT, () => {
    console.log( `Server is running on port ${ PORT }` )
} )
