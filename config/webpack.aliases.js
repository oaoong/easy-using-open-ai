const { createWebpackAliases } = require('./webpack.helpers');

module.exports = createWebpackAliases({
    '@assets': 'assets',
    '@src': 'src',
    '@': '/',
    '@components': 'src/components',
    '@pages': 'pages',
    '@styles': 'src/styles',
    '@utils': 'src/utils',
    '@hooks': 'src/hooks',
});
