// const HtmlWebpackPlugin = require('html-webpack-plugin');
const {resolve} = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [
                    /node_modules/,
                    /backend/,
                    /conf/
                ],
                use: {
                    loader: "babel-loader"
                }
            }, {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    entry: './src/index.js',
    output: {
        filename: "main.js",
        path: resolve(__dirname, "./backend/public/js/")
    }
};