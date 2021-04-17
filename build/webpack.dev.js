const baseConfig = require('./webpack.base.js')
const { merge } = require('webpack-merge')

// 引入webpack插件
const webpack = require('webpack')

const devConfig = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    // devServer配置
    devServer: {
        // 指定服务器根目录
        contentBase: './dist',
        // 自动打开浏览器
        open: true,
        hot: true
    },
 
    // 插件
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = merge(baseConfig, devConfig)