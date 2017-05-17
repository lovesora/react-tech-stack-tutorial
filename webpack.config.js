'use strict';

const webpack = require('webpack');
const path = require('path');

const paths = {
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, 'public'),
    },
    server: {
        root: path.resolve(__dirname),
        publicPath: '/public'
    }
}

var config = {
    // performance: {
    //     hints: false
    // },
    devtool: 'source-map',
    context: paths.context,
    entry: {
        app: './index.js'
    },
    output: {
        path: paths.output.path,
        filename: '[name].bundle.js',
        publicPath: paths.server.publicPath
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: "commons.bundle.js",
            minChunks: 2
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            React: "react",
            ReactDOM: "react-dom"
        })
    ],
    resolve: {
        //当在css中@import css出错“can’t find ___”可以开启以下resolve
        // modules: [paths.context, "node_modules"],

        //为资源文件取别名，缩短引用的路径
        alias: {
            // react: path.resolve(paths.src, "vendor/react/react.min.js"),
            jquery: 'vendor/jquery-vendor.js'
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: "babel-loader",
                options: {
                    presets: ["es2015", "react"]
                }
            }]
        }, {
            test: /\.css$/,
            use: ["style-loader", {
                loader: "css-loader",
                options: {
                    modules: false,
                    url: true
                }
            }]
        }, {
            test: /\.(sass|scss)$/,
            use: [
                "style-loader", {
                    loader: "css-loader",
                    options: {
                        modules: false,
                        url: true
                    }
                },
                "sass-loader?sourceMap"
            ]
        }
        , {
            test: /\.(gif|jpg|png|woff|woff2|svg|eot|ttf)\??.*$/,
            use: [{
                loader: "url-loader",
                options: {
                    limit:  50000,
                    name: "[path][name].[ext]"
                }
            }]
        }
        ]
    },
    devServer: {
        contentBase: paths.root
    }
}

module.exports = config;
