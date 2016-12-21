const path = require('path')
const webpack = require('webpack')
const BundleTracker = require('webpack-bundle-tracker')

const config = require('./webpack.base.config.js')
const ip = '127.0.0.1'

config.devtool = '#eval-source-map'
config.ip = ip

// use webpack dev server
config.entry = {
    ExchangeApp: [
        'webpack-dev-server/client?http://' + ip + ':3000',
        'webpack/hot/only-dev-server',
        '../reactjs/ExchangeApp'
    ]
}

// override django STATIC_URL for webpack bundles
config.output.publicPath = 'http://' + ip + ':3000/assets/bundles/'

// add HotModuleReplacementPlugin and BundleTracker
config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new BundleTracker({filename: './webpack/webpack-stats.local.json'}),
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('development'),
            'BASE_API_URL': JSON.stringify('http://' + ip + ':8000/api/v1/'),
        }
    })
])

// add loader for JSX files with react-hot enabled
config.module.loaders.push(
    { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'] }
)

module.exports = config
