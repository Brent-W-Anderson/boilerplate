const HtmlWebpackPlugin = require( 'html-webpack-plugin' )
const TerserPlugin = require( 'terser-webpack-plugin' )

module.exports = {
    entry: './src/client/index.tsx',
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        configFile: './config/.babelrc'
                    }
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin( {
            template: './public/index.html',
            filename: 'index.html',
            inject: 'body',
        } ),
    ],
    resolve: {
        extensions: [ '.js', '.jsx', '.ts', '.tsx' ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin( {
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
            } ),
        ],
    }
}
