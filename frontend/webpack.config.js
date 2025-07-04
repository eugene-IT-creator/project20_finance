const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/app.js',
    mode: 'development',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },

    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9001 ,
        historyApiFallback: true,
    },
    // SCSS
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new CopyPlugin({
            patterns: [
                { from: "./src/templates", to: "templates" },
                { from: "./src/static/images", to: "images" },
                { from: "./src/static/fonts", to: "fonts" },
                { from: "./node_modules/@fortawesome/fontawesome-free/webfonts", to: "webfonts" },
                { from: "./node_modules/@fortawesome/fontawesome-free/css/all.min.css", to: "css" },
                { from: "./node_modules/bootstrap/dist/css/bootstrap.min.css", to: "css" },
                { from: "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js", to: "js" },
                { from: "./node_modules/jquery/dist/jquery.min.js", to: "js" },
                { from: "./node_modules/icheck-bootstrap/icheck-bootstrap.min.css", to: "css" },
                { from: "./node_modules/chart.js/dist/chart.js", to: "js" },
            ],
        }),
    ],
};
