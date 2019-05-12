/* eslint-disable */

const path = require('path');

module.exports = async ({ config, mode }) => {
    config.resolve.extensions.push('.es6', '.js', '.jsx', '.styl', '.less', '.sass', '.css');
    config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src')
    };
    config.module.rules = [
        ...config.module.rules,
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    compact: false
                }
            }
        },
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: ['css-loader']
        },
        {
            test: /\.styl(us)?$/,
            exclude: /node_modules/,
            use: ['css-loader', 'stylus-loader']
        },
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }
            ]
        }
    ];
    return config;
};
