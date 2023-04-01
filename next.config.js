const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    distDir: '.next',
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/styles')],
        prependData: `@import "src/styles/_variables.scss"; @import "src/styles/_mixins.scss";`,
    },
    images: {
        unoptimized: true,
    },
    webpack: (config, { dev, isServer }) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            ...require('./config/webpack.aliases'),
        };
        config.plugins.push(...require('./config/webpack.plugins'));
        config.module.rules.push(...require('./config/webpack.rules'));

        return config;
    },
};

module.exports = { ...nextConfig };
