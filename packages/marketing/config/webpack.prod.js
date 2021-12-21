const { merge } = require('webpack-merge')
const PackageJson = require('../package.json');

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');

const prodConfig = {
    mode: 'production',
    output : {
        filename : '[name].[contenthash].js'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp': './src/bootstrap.js'
            },
            shared: PackageJson.dependencies,
        })
    ]
}
module.exports = merge(commonConfig, prodConfig)