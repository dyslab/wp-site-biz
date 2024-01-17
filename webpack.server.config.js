/* eslint-disable no-undef */
const path = require('path');

/*
    Check out the link: https://webpack.js.org/configuration/dev-server/
    for more settings.
*/
module.exports = {
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
            // publicPath: '/dist'
        },
        host: 'localhost',
        port: 8081,
        compress: true,
        hot: true
    }
};
