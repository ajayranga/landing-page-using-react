const { DefinePlugin } = require('webpack');

module.exports = {
    mode: 'production',
    devtool: 'eval-source-map',
    plugins: [
        new DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
            }
        }),
    ],
};