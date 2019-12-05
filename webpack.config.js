const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        main: "./src/index.js"
    },
    resolveLoader: {
        // 查找resolve loder目录
        modules: ['node_modules', './loaders']
    },
    module: {
        rules: [{
            test: /\.js/,
            use: [
                {
                    loader: 'replaceLoaderAsync',
                },
                {
                    loader: 'replaceLoader',
                    options: {name: 'lee'}
                }
            ]
        }]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    }
}