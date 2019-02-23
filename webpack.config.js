const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); //installed via npm
const { resolve } = require('path');


module.exports = () => {
    return {
        mode:    'none',
        devtool: false,
        output:  {
            path:     resolve(__dirname, './build'),
            filename: 'bundle.js',
        },
        plugins: [
            new CleanWebpackPlugin([
                'build',
            ]),
            new HtmlWebpackPlugin({
                template: './static/template.html',
                title:    'Learn Webpack',
            }),
        ],
    };
};