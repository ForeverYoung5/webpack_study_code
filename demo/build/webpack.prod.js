const CommonConfig = require('./webpack.common');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const WorkBoxPlugin = require('workbox-webpack-plugin')

const prodConfig = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFileame: '[name].chunk.css'
        }),
        new WorkBoxPlugin.GenerateSW ({
            clientsClaim:true,
            skipWaiting:true
        }) 
    ],
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})],
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2,
                            // modules:true
                        }
                    },
                    "sass-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                    "postcss-loader"
                ]
            },
        ]
    },
    output: {
        filename: '[name].[contenthash].js',  //打包后输出文件名称
        chunkFilename:'[name].[contenthash].chunk.js',
    }
}

module.exports = merge(CommonConfig, prodConfig);
// module.exports = prodConfig;
