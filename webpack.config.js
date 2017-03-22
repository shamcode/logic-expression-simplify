var fs = require( 'fs' );
var webpack = require( 'webpack' );

var libraryName = 'logic-expression-simplify';

module.exports = {
    entry: __dirname + '/src/simplify.js',
    devtool: 'source-map',
    output: {
        path: __dirname + '/lib',
        filename: libraryName + '.js',
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    target: 'node',
    module: {
        loaders: [
            {
                test: /(\.js)$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    resolve: {
        extensions: [ '.js' ]
    },
    plugins: []
};
