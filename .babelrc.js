module.exports = api => {
    const env = api.env(); // process.env.BABEL_ENV || process.env.NODE_ENV || 'production'
    api.cache.never();

    const plugins = ['@babel/proposal-class-properties'];

    if (env === 'development') {
        plugins.push('react-hot-loader/babel');
    }

    // api.cache.using(() => env)

    // @babel/plugin-dynamic-import

    return {
        presets: [
            '@babel/react',
            [
                '@babel/env',
                {
                    debug: true,
                    loose: false, // более быстрый код, меньше надёжности
                    spec: true, // менее быстрый код, больше надёжности
                    modules: false, // false || 'auto' = 'esm'
                },
            ],
        ],
        plugins,
    };
};