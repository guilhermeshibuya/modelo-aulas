const { userInfo } = require("os");
const path = require("path");

module.exports = {
    entry: {
        index: './src/index.js'
    },

    output: {
        fileName: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            }
        ]
    },

    watch: true,

    devServer: {
        static: path.join(__dirname, 'dist'),
        liveReload: true
    }
}