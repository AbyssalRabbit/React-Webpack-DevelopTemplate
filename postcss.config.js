const autoprefixer = require('autoprefixer')
module.exports = {
    plugins: [
        autoprefixer,   //根据browserslist配置解析CSS文件并且添加浏览器前缀到CSS内容
    ]
}