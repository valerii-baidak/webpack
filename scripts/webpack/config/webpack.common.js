// Core
import HtmlWebpackPlugin from 'html-webpack-plugin';
import merge from 'webpack-merge';

// Constants
import { BUILD, STATIC } from '../constants';

// Modules
import * as modules from '../modules';

/**
 * object
 * function
 * promise
 */
export default () => {
    return merge(
        {
            output: {
                path:     BUILD,
                filename: 'bundle.js',
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: `${STATIC}/template.html`,
                    title:    'Учим вебпак! 💪🏼🌟🔫',
                }),
            ],
        },
        modules.loadJavaScript(),
        modules.loadCss(),
    );
};