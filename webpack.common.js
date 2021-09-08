const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index:'./src/index.ts'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].bundle.js',
        environment: {
            // The environment supports arrow functions ('() => { ... }').
            arrowFunction: false,
            // The environment supports BigInt as literal (123n).
            bigIntLiteral: false,
            // The environment supports const and let for variable declarations.
            const: false,
            // The environment supports destructuring ('{ a, b } = obj').
            destructuring: true,
            // The environment supports an async import() function to import EcmaScript modules.
            dynamicImport: false,
            // The environment supports 'for of' iteration ('for (const x of array) { ... }').
            forOf: true,
            // The environment supports ECMAScript Module syntax to import ECMAScript modules (import ... from '...').
            module: false,
          },
    },
    module:{
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory:true,
                            cacheCompression:false,
                            presets: [
                                 [
                                    "@babel/preset-env",
                                    {
                                        "useBuiltIns": "entry"
                                    }
                                ],
                                "@babel/preset-react"
                            ]
                        }
                    },
                    'ts-loader'
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '贪吃蛇',
            filename:'index.html',
            template:'src/assets/template.ejs'
        })
    ],
    resolve: {
        modules: [
            path.resolve(__dirname, "src"),
            path.resolve(__dirname,'node_modules')
        ],
      
        extensions: [".js", ".json", ".jsx", ".ts"],
    }
}