const webpackMerge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.config")
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")

module.exports = webpackMerge(baseWebpackConfig, {
    // 指定构建环境  
    mode: "development",
    // 出口
    output: {
        path: path.resolve(__dirname, "../../dist/dev")
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                enforce: "pre", // 优先处理
                exclude: /node_modules/, // 不检测的文件
                loader: 'eslint-loader',
                options: {
                    fix: true,  //自动修复
                    emitWarning: true,  //热加载允许编译通过
                },
            }
        ]
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            favicon: 'favicon.ico',
            template: 'index.html',//html模板
            inject: true, // true：默认值，script标签位于html文件的 body 底部
            filename: path.resolve(__dirname, '../../dist/dev/index.html'), // html模板的生成路径
        }),
        new webpack.DefinePlugin({
            $ENVIRONMENT: JSON.stringify('development'),  //全局变量
        })
    ],
    /**
     * 开发环境本地启动的服务配置
     * https://www.webpackjs.com/configuration/dev-server/
     */
    devServer: {
        port: 18080, //默认端口8080
        host: '0.0.0.0',    //默认是 localhost。如果你希望服务器外部可访问，指定：0.0.0.0
        disableHostCheck: true, //默认只接受来自本地的请求，关闭后(true)可以接受来自任何 HOST 的请求
        publicPath: '/',    //此路径下的打包文件可在浏览器中访问
        allowedHosts: ['http://x.x.x.x:x/'],
        proxy: [
            {
                context: ['/api1', '/api2'],
                target: 'http://x.x.x.x:x/',    //api1/abc 现在会被代理到请求 http://x.x.x.x:x/api1/abc
                changeOrigin: true  //跨域
            },
            {
                '/api3': {
                    target: 'http://x.x.x.x:x/',
                    pathRewrite: { '^/api3': '' },  //api3/abc 现在会被代理到请求 http://x.x.x.x:x/abc
                    changeOrigin: true  //跨域
                }
            },
        ]

    }
});