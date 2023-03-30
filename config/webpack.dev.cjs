const path = require( 'path' )
const { merge } = require( 'webpack-merge' )
const common = require( './webpack.common.cjs' )

module.exports = merge( common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: './public',
        },
        hot: true,
        open: true,
        historyApiFallback: true,
    },
    output: {
        path: path.resolve( __dirname, '../public' ),
        filename: 'bundle.js',
        publicPath: '/'
    }
} )
