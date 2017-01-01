
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./helpers');

module.exports = function (options) {
    isProd = options.env === 'production';
    return {
        entry: {
            'polyfills': './src/polyfills.ts',
            'vendor': './src/vendor.ts',
            'main': './src/main.ts'
        },

        resolve: {
            extensions: ['.ts', '.js', '.css', '.html', '.json']
        },

        module: {
            loaders: [
                {
                    test: /\.ts$/,
                    exclude: [/\.(spec|e2e)\.ts$/],
                    use: ['awesome-typescript-loader', 'angular2-template-loader']
                },
                {
                    test: /\.html$/,
                    use: 'html-loader'
                },
                {
                    test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                    use: 'file-loader?name=assets/[name].[hash].[ext]'
                },
                {
                    test: /\.css$/,
                    exclude: helpers.root('src', 'app'),
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.css$/,
                    include: helpers.root('src', 'app'),
                    use: 'raw-loader'
                },
                {
                    test: /\.json$/,
                    use: 'json-loader'
                },
            ]
        },

        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: ['main', 'vendor', 'polyfills']
            }),

            new HtmlWebpackPlugin({
                template: 'index.html'
            })
        ]
  };
}