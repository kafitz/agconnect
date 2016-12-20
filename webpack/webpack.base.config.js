var path = require('path')
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
    context: __dirname,

    entry: {
        // application entrypoints
        ExchangeApp: '../reactjs/ExchangeApp',
        vendors: ['react'],
    },

    output: {
        path: path.resolve('../agconnect/static/bundles/local/'),
        filename: "[name]-[hash].js"
    },

    externals: [
    ], // add all vendor libs

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    ], // add all common plugins here

    module: {
        loaders: [
            { test: /\.scss$/, loaders: ['sass'] },
        ]
    },

    resolve: {
        modulesDirectories: ['node_modules', 'bower_components'],
        extensions: ['', '.js', '.jsx']
    },
}
