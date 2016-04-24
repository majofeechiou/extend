'use strict';
var webpack = require('webpack');
var baseConfig = require('./webpack.config');

var config = Object.create(baseConfig);

var addPlugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      screw_ie8: true,
      warnings: false,
    },
  }),  
];

config.plugins = addPlugins.reduce( (arr, instance) => { arr.push(instance); return arr; }, 
                                 ( config.plugins || [] ) 
                               );

module.exports = config;