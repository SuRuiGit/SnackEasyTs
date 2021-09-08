const path = require('path');
const { merge } = require('webpack-merge');
const config = require('./webpack.common.js');

module.exports = merge(config,{
    mode:'development',
    devtool:'inline-source-map',
    module: {
        rules:[
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins:[
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers: 'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },
    devServer:{
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        open: true
    }
});