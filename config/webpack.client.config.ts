import path from 'path'
import webpack from 'webpack'
import CopyWebpackPlugin from 'copy-webpack-plugin'

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
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [ 
        new CopyWebpackPlugin( {
            patterns: [
                {
                    from: path.resolve( __dirname, '../client/index.html' ),
                    to: path.resolve( __dirname, '../dist/client' ),
                },
            ],
        } ),
    ],
}

export default config
