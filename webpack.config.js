var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var webpackConfig = {
    context: path.resolve(__dirname),
    entry: {
        'app': './src/init.js',
        'vendor': [
            'angular',
            'angular-ui-router'
        ]
    },
    output: {
        path: path.join(__dirname, 'public', 'js'),
        filename: '[name].bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [
                    path.resolve('./node_modules'),
                    path.resolve('./spec')
                ],
                loader: 'babel',
                query: {
                    presets: [
                        'es2015',
                        'stage-0'
                    ]
                }
            },
            {
                include: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!sass')
            },
            {
                test: /\.(ico|png)$/,
                loader: 'file?name=../img/[name].[ext]'
            },
            {
                test: /\.html$/,
                loader: 'html'
            }
        ]
    }
};

var commonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor.bundle.js'
});

var extractTextPlugin = new ExtractTextPlugin('../css/style.css');

var cleanWebpackPlugin = new CleanWebpackPlugin(['public'], {
    root: path.resolve(__dirname),
    verbose: true,
    dry: false
});


var plugins = [
    //new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en-gb/), // moment
];

if (process.env.NODE_ENV === 'test') {
    webpackConfig['plugins'] = [extractTextPlugin, cleanWebpackPlugin];
    if (process.env.TEST_COVERAGE) {
        webpackConfig['isparta'] = {
            embedSource: true,
            noAutoWrap: true,
            // these babel options will be passed only to isparta and not to babel-loader
            babel: {
                presets: ['es2015', 'stage-0']
            }
        };
        webpackConfig['module']['loaders'].push({
            test: /\.js$/,
            exclude: [
                path.resolve('./src/templates')
            ],
            include: path.resolve('./src/'),
            loader: 'isparta'
        });
    }
}

if (process.env.NODE_ENV === 'development') {
    // --display-error-details
    webpackConfig['watch'] = true;
    webpackConfig['watchOptions'] = {aggregateTimeout: 100};
    webpackConfig['devtool'] = 'source-map';
    webpackConfig['plugins'] = [commonsChunkPlugin, extractTextPlugin, cleanWebpackPlugin];
}

if (process.env.NODE_ENV === 'production') {
    webpackConfig['plugins'] = [commonsChunkPlugin, extractTextPlugin, cleanWebpackPlugin];
}

module.exports = webpackConfig;