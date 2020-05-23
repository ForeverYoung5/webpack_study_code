const webpack = require('webpack')
const merge = require('webpack-merge')
const CommonConfig = require('./webpack.common')

const devConfig = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    module:{
        rules:[
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
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
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                    "postcss-loader"
                ]
            },
        ]
    },
    devServer: {
        contentBase: './dist',
        open: true,
        hot: true,
        // hotOnly: true,
        historyApiFallback:true,
        proxy:{
            '/react/api':{
                target:'http://www.dell-lee.com',
                // secure:false,
                // pathRewrite:{
                //     'header.json':'demo.json',
                // },
                // changeOrigin:true,
                // headers:{
                //     host:'www.dell-lee.com',
                //     cookie:''
                // }
            }
        }
    },
    output: {
        filename: '[name].js',  //打包后输出文件名称
        chunkFilename:'[name].chunk.js',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
   
}

module.exports = merge(CommonConfig,devConfig);
// module.exports = devConfig;
