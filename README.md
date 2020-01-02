# React-Webpack-DevelopTemplate

**React16.x+Webpack4.x 搭建的开发模板**

一套最基础的 React16.x + React-Router-DOM5.x + Webpack4.x 的开发模板，已集成开发环境和生产环境的基本配置。

## MdEditor的功能列表演示

### 安装依赖

`yarn` or `npm i`

### 开发环境运行

`yarn dev` or `npm run dev`

### 生产环境打包

`yarn build:prod` or `npm run build:prod`

### 项目结构
```
|-- react-webpack-developtemplate
    |-- .gitignore
    |-- babel.config.js //插件babel配置
    |-- favicon.ico
    |-- index.html  //模板文件
    |-- package.json
    |-- postcss.config.js   //插件postcss配置
    |-- README.md
    |-- config  //公共配置
    |   |-- webpack //webpack配置
    |       |-- webpack.base.config.js
    |       |-- webpack.dev.config.js
    |       |-- webpack.prod.config.js
    |       |-- webpack.test.config.js
    |-- src
        |-- index.jsx   //入口
        |-- assets  //资源文件
        |   |-- img
        |-- components
        |   |-- base    //公共组件
        |   |   |-- Router
        |   |       |-- index.jsx
        |   |-- home
        |       |-- ShowText
        |           |-- index.jsx
        |           |-- index.less
        |-- pages	//页面
            |-- home
            |   |-- index.jsx
            |   |-- index.less
            |-- navigation
                |-- index.jsx
```
