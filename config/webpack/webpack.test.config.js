const webpackMerge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.config")
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = webpackMerge(baseWebpackConfig, {
    devtool: 'cheap-module-source-map', //生产环境推荐
    // 指定构建环境  
    mode: "production",
    // 出口
    output: {
        path: path.resolve(__dirname, "../../dist/test")
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            favicon: 'favicon.ico',
            template: 'index.html',//html模板
            inject: true, // true：默认值，script标签位于html文件的 body 底部
            filename: path.resolve(__dirname, '../../dist/test/index.html'), // html模板的生成路径
        }),
        new webpack.DefinePlugin({
            $ENVIRONMENT: JSON.stringify('test'),  //全局变量
        }),
        new ProgressBarPlugin(),
        new BundleAnalyzerPlugin({
            analyzerMode: 'server', //默认打开地址 127.0.0.1:8888
            openAnalyzer: true,    //Default: true 自动在浏览器打开报表
        })
    ],
})