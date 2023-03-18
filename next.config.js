const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    distDir: '.next',
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/styles')],
        prependData: `@import "src/styles/_variables.scss"; @import "src/styles/_mixins.scss";`,
    },
    webpack: (config, { dev, isServer }) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            ...require('./config/webpack.aliases'),
        };
        config.plugins.push(...require('./config/webpack.plugins'));
        config.module.rules.push(...require('./config/webpack.rules'));
        if (!dev) {
            config.optimization.minimizer = [
                new TerserPlugin({
                    terserOptions: {
                        compress: {
                            drop_console: true,
                        },
                    },
                }),
                new CssMinimizerPlugin(),
            ];
            config.optimization.splitChunks = {
                chunks: 'all',
            };
        }

        return config;
    },
};

module.exports = { ...nextConfig };
