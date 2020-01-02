const presets = [
    [
        "@babel/env",
        {
            useBuiltIns: "usage",   //按需引入
        },
    ],
    "@babel/preset-react"
];

const plugins = [
    ["@babel/plugin-transform-runtime", {
        "corejs": 2, // polyfill 需要使用@babel/runtime-corejs2
        "useBuildIns": "usage", //按需引入,即使用什么新特性打包什么新特性, 可以减小打包的体积
    }]
]

module.exports = { presets, plugins };