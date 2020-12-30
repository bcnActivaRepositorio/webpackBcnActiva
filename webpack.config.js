// consts
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: __dirname + '/build',
        filename: 'main_bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname + '/build'),
        port: 9000
    },
    module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        'style-loader',  'css-loader', 'sass-loader'
                    ]
                }
            ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}