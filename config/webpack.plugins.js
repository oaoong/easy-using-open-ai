const webpack = require('webpack');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin =
    require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = [
    new ForkTsCheckerWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: '[name].[chunkhash].css',
        chunkFilename: '[name].[chunkhash].chunk.css',
    }),
    new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
    }),
    new webpack.ProvidePlugin({
        React: 'react',
    }),
].filter(Boolean);
