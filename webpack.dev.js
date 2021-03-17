const merge = require('webpack-merge').merge;
const common = require('./webpack.common');

module.exports = merge(common,{
  mode:'development',
  devtool: 'inline-source-map',
  devServer:{
    contentBase:`${__dirname}/dist`,
    open:true
  }
})