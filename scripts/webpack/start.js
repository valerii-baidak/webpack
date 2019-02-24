/**
 * 1. webpack
 * 2. webpack dev server
 * 3. webpack hot middleware
 * 4. webpack config
 * 5. compiler
 * 6. init
 */

// Core
import webpack from 'webpack';
import getConfig from './config/webpack.dev';
import chalk from 'chalk';
import DevServer from 'webpack-dev-server';
import hot from 'webpack-hot-middleware';
import openBrowser from 'react-dev-utils/openBrowser';

const compiler = webpack(getConfig());

// Constants
const { HOST, PORT } = require('./constants');

const server = new DevServer(compiler, {
    host:               HOST,
    port:               PORT,
    historyApiFallback: true,
    overlay:            true,
    quiet:              true,
    clientLogLevel:     'none',
    noInfo:             true,
    after:              (app) => {
        app.use(
            hot(compiler, {
                log: false,
            }),
        );
    },
});

server.listen(0, HOST, () => {
    const port = server.listeningApp.address().port;
    const url = `http://${HOST}:${port}`;
    console.log(
        `${chalk.greenBright('→ Server listening on')} ${chalk.blueBright(
            url,
        )}`,
    );

    openBrowser(url);
});
