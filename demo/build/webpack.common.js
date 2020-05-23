const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const webpack = require('webpack');

// const merge = require('webpack-merge')
// const devConfig = require('./webpack.dev')
// const prodConfig = require('./webpack.prod')


module.exports = {
    entry: {
        main: './src/one_page_router/index.js',
    },
    optimization:{
        usedExports:true,
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                },
            default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }     
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:["babel-loader","eslint-loader"]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        // placeholder 占位符
                        name: '[name].[ext]',
                        outputPath: 'images',
                        limit: 102400,
                    }
                },
            },
            
            {
                test: /\.(svg|ttf|woff|eot)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        // placeholder 占位符
                        name: '[name].[ext]',
                        outputPath: 'fonts',
                    }
                },
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/fonts/index.html'
        }),
        new CleanWebpackPlugin(),
        // new webpack.ProvidePlugin({
        //     $:'jquery',
        // })
    ],
    output: {
        path: path.resolve(__dirname, '../dist')
    }
}

// module.exports = (env)=>{
//     if(env && env.production){
//         // 线上环境
//         console.log(env.production)
//         return merge(commonConfig,prodConfig)
//     }else{
//         // 开发环境
//         return merge(commonConfig,devConfig)
//     }
// }