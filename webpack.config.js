'use strict'
var path = require('path');

// var FILE_SRC = 'src/';
var FILE_BUILD = 'build/';

module.exports = {
    entry: path.join( __dirname, 'index.js' ),
    module: {
        loaders: [
            { 
                test: /\.jsx?$/, 
                loaders: ['script-loader'], 
                include: /external/
            }
        ]
    },
    output: {
        path: path.join(__dirname, FILE_BUILD),
        filename: 'js/index.js'
    },
    resolve: {
        extensions: ['', '.js'],
        alias: {
            'JsonExtend': path.join(__dirname, 'node_modules/json-extend/index.js'),
            'DeepExtend': path.join(__dirname, 'node_modules/deep-extend/index.js')
        }
    }
};
