const path = require('path');
module.exports = {
  assetsDir: 'static',
  productionSourceMap: false,
  configureWebpack: {
    devtool: 'source-map'
  },
  chainWebpack:(config)=>{
    const dir=path.resolve(__dirname,'存放.svg的文件夹路径');
    config.module.rule('svg-sprite').test(/\.svg$/).include.add(dir).end().use('svg-sprite-loader').loader('svg-sprite-loader').options({extract:false}).end()
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite: true}])
    config.module.rule('svg').exclude.add(dir) 
    }
  // devServer: {
  //   proxy: {
  //     '/api':{
  //       target:'http://jsonplaceholder.typicode.com',
  //       changeOrigin:true,
  //       pathRewrite:{
  //         '/api': ''
  //       }
  //     }
  //   }
  // }
}
