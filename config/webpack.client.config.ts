import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
// webpackDevServer isn't directly being used, but it is needed for devServer
import webpackDevServer from 'webpack-dev-server'

const config: webpack.Configuration = {
    entry: './client/index.tsx',
    output: {
        path: path.resolve( __dirname, '../dist/client' ),
        filename: 'bundle.js',
        publicPath: '/',
    },
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    resolve: {
        extensions: [ '.ts', '.tsx', '.js' ],
    },
    devServer: {
        static: path.join( __dirname, '../assets' ),
        historyApiFallback: true,
        port: 8080,
        open: true,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin( {
            template: '!!handlebars-loader!' + path.resolve( __dirname, '../server/views/index.hbs' ),
            filename: 'index.html',
            inject: false
        } ),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.hbs$/,
                use: 'handlebars-loader',
            },
        ],
    },
}

export default config
