const AngularCssShrink = require('angular-css-shrink');
const  path = require('path');
const  HtmlWebpackPlugin = require('html-webpack-plugin');
const  webpack = require('webpack');

//Importamos la dependencia 👇
const  BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
    plugins: [
        new AngularCssShrink({
            debug: false
        }),
        new  HtmlWebpackPlugin({
            template:  path.resolve(__dirname, 'public/index.html'),
        }),
        new  webpack.HotModuleReplacementPlugin(),
        new  BundleAnalyzerPlugin({
            analyzerMode:  'static', //para que lo haga sólo al momento de hacer el build
            openAnalyzer:  true, //para que nos muestre el resultado inmediatamente
        }),
    ]
}
