const { addAfterLoader, loaderByName } = require('@craco/craco');

module.exports = {
    webpack: {
        configure(webpackConfig) {
            addAfterLoader(webpackConfig, loaderByName('babel-loader'), {
                test: /\.mdx?$/,
                loader: require.resolve('@mdx-js/loader')
            })
            return webpackConfig;
        }
    }
};

// module.exports = {
//     webpack: {
//         configure(webpackConfig) {
//             addAfterLoader(webpackConfig, loaderByName('babel-loader'),
//                 {
//                     test: /\.mdx?$/,
//                     loader: require.resolve('@mdx-js/loader')
//                 },
//                 {
//                     test: /\.(png|jpg)$/,
//                     loader: require.resolve('url-loader?limit-8192')
//                 }
//             )
//             return webpackConfig;
//         }
//     }
// };