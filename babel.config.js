const presets = [
    [
        "@babel/preset-env",
        {
            "modules": false,
        }
    ],
    "@babel/preset-react"
];

const plugins = [
    ["@babel/plugin-transform-runtime",
        {
            "corejs": {
                "version": 3,
                "proposals": true
            },
            "useESModules": true
        }
    ]
]

module.exports = { presets, plugins };