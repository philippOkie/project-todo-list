const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { Template } = require('webpack')

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true
    },
    devServer: {
        port: 1234,
        open: true,
        hot: true,
        compress: true 
    },
    module: {
        rules: [
            {
                test:/\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /.\html$/,
                use: ['html-loader'],
            },
            {
                test:/\.(jpeg|jpg|svg|png|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]', 
                            esModule: false,
                            outputPath: 'img/',
                            publicPath: 'img/'
                        }
                    }
                ]
            }
            
        ]
    },
    plugins: [
        new HtmlWebpackPlugin ({
            filename: 'index.html',
            template: 'src/template.html',
            inject: 'body',
        }),
    ],
}