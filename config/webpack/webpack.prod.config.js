const webpackMerge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.config")
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")

module.exports = webpackMerge(baseWebpackConfig, {
    devtool: 'cheap-module-source-map', //生产环境推荐
    // 指定构建环境  
    mode: "production",
    // 出口
    output: {
        path: path.resolve(__dirname, "../../dist/prod")
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            favicon: 'favicon.ico',
            template: 'index.html',//html模板
            inject: true, // true：默认值，script标签位于html文件的 body 底部
            filename: path.resolve(__dirname, '../../dist/prod/index.html'), // html模板的生成路径
            hash: true, // 在打包的资源插入html会加上hash
            //  html 文件进行压缩
            minify: {
                removeComments: true,               //去注释
                collapseWhitespace: true,           //压缩空格
                removeAttributeQuotes: true         //去除属性引用
            }
        }),
        new webpack.DefinePlugin({
            $ENVIRONMENT: JSON.stringify('production'),  //全局变量
        })
    ],
})