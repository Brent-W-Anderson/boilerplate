const path = require( 'path' )
const HtmlWebpackPlugin = require( 'html-webpack-plugin' )

module.exports = {
    entry: './src/client/index.js',
    output: {
        path: path.resolve( __dirname, 'public' ),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/preset-env', '@babel/preset-react' ]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin( {
            template: './public/index.html',
            filename: 'index.html',
            inject: 'body'
        } )
    ],
    devServer: {
        static: {
            directory: path.join( __dirname, 'public' ),
        },
        historyApiFallback: true,
        port: 3000,
        open: true,
        hot: true
    },
    mode: 'development'
}
