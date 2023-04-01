import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
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
        static: path.join( __dirname, '../client' ),
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
        new MiniCssExtractPlugin( {
            filename: 'styles/[name].css',
            chunkFilename: 'styles/[id].css',
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
            {
                test: /\.scss$/,
                use: [
                    process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
}

export default config
