import path from 'path'
import webpack from 'webpack'
import nodeExternals from 'webpack-node-externals'
import CopyWebpackPlugin from 'copy-webpack-plugin'

const config: webpack.Configuration = {
    entry: './server/server.tsx',
    target: 'node',
    externals: [ nodeExternals() ],
    output: {
        path: path.resolve( __dirname, '../dist/server' ),
        filename: 'server.js'
    },
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.jsx' ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin( {
            patterns: [
                {
                    from: path.resolve( __dirname, '../server/views' ),
                    to: path.resolve( __dirname, '../dist/server/views' ),
                },
                {
                    from: path.resolve( __dirname, '../client/assets' ),
                    to: path.resolve( __dirname, '../dist/client/assets' ),
                },
            ],
        } ),
    ],
    module: {
        rules: [
            {
                test: /\.(tsx?|js)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
        ]
    }
}

export default config
