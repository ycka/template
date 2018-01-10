const utils = require('./utils')
const path = require('path')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
//var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;//webpack3.0支持再开启

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

function resolveApp(relativePath) {
    return path.resolve(relativePath);
}

module.exports = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({sourceMap: config.dev.cssSourceMap})
    },
    // cheap-source-map is faster for development
    // devtool: '#cheap-source-map',
    cache: true,
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            'jQuery': 'jquery'
        }),
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            favicon: resolveApp('favicon.ico'),
            inject: true,
            path:config.dev.staticPath
        }),
        new FriendlyErrorsPlugin(),
        // copy custom static assets
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../static'),
                to: config.dev.assetsSubDirectory,
                ignore: ['.*']
            }
        ]),
        // new BundleAnalyzerPlugin({//查看webpack依赖结构
        //     // Can be `server`, `static` or `disabled`. 
        //     // In `server` mode analyzer will start HTTP server to show bundle report. 
        //     // In `static` mode single HTML file with bundle report will be generated. 
        //     // In `disabled` mode you can use this plugin to just generate Webpack Stats JSON file by setting `generateStatsFile` to `true`. 
        //     analyzerMode: 'server',
        //     // Host that will be used in `server` mode to start HTTP server. 
        //     analyzerHost: '127.0.0.1',
        //     // Port that will be used in `server` mode to start HTTP server. 
        //     analyzerPort: 8888,
        //     // Path to bundle report file that will be generated in `static` mode. 
        //     // Relative to bundles output directory. 
        //     reportFilename: 'report.html',
        //     // Module sizes to show in report by default. 
        //     // Should be one of `stat`, `parsed` or `gzip`. 
        //     // See "Definitions" section for more information. 
        //     defaultSizes: 'parsed',
        //     // Automatically open report in default browser 
        //     openAnalyzer: true,
        //     // If `true`, Webpack Stats JSON file will be generated in bundles output directory 
        //     generateStatsFile: false,
        //     // Name of Webpack Stats JSON file that will be generated if `generateStatsFile` is `true`. 
        //     // Relative to bundles output directory. 
        //     statsFilename: 'stats.json',
        //     // Options for `stats.toJson()` method. 
        //     // For example you can exclude sources of your modules from stats file with `source: false` option. 
        //     // See more options here: https://github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21 
        //     statsOptions: null,
        //     // Log level. Can be 'info', 'warn', 'error' or 'silent'. 
        //     logLevel: 'info'
        //   })
    ]
})
