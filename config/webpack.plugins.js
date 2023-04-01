const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin =
    require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = [
    new MiniCssExtractPlugin({
        filename: 'static/chunks/[name].[chunkhash].css',
        chunkFilename: 'static/chunks/[name].[chunkhash].chunk.css',
    }),
    new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
    }),
    new webpack.ProvidePlugin({
        React: 'react',
    }),
].filter(Boolean);
