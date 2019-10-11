import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import VueLoaderPlugin from 'vue-loader/lib/plugin';
import ImageminPlugin from 'imagemin-webpack';

const config: webpack.Configuration = {

    entry: {
        "js/polyfills": './src/js/polyfills.ts',
        "js/global": './src/js/index.ts'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            presets: [
                                '@babel/preset-typescript'
                            ],
                            plugins: [
                                "@babel/proposal-class-properties",
                                "@babel/proposal-object-rest-spread"
                            ],
                        },
                    },
                    {
                        loader: 'ts-loader',
                        options: { appendTsSuffixTo: [/\.vue$/] }
                    },
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            presets: [
                                '@babel/preset-env'
                            ],
                        },
                    },
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'vue-style-loader',
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.pug$/,
                loader: 'pug-plain-loader',
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: "url-loader"
                    },
                ],
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Portfolio',
            template: 'src/index.html',
            filename: 'index.html',
        }),
        new ImageminPlugin({
            bail: false,
            cache: true,
            imageminOptions: {
                plugins: [
                    ["gifsicle", { interlaced: true }],
                    ["jpegtran", { progressive: true }],
                    ["optipng", { optimizationLevel: 5 }],
                    [
                        "svgo",
                        {
                            plugins: [
                                {
                                    removeViewBox: false
                                }
                            ]
                        }
                    ],
                ],
            },
        }),
    ],
    resolve: {
        extensions: [ '.ts', '.js', '.vue', '.scss', '.css', '.json' ],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/',
    }
};

export default config;
