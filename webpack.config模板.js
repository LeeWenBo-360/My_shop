// 手动去根目录下面创建一个 webpack.config.js 文件
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
  // 遵循  commonjs 模式 
  //  ES6模块: export default  import 
  //  CommonJS模块: module.exports /exports /require 

//   
module.exports = {
    // 模式: 生产环境
    mode: 'production',
    // mode: 'development',

    // 入口
    entry: {           //这里是你入口文件的路径和名字
        app: path.resolve(__dirname, 'src/index.js')
    },
    // 出口(输出)(打包生成js)
    output: {   //这里是生成文件名叫什么,生成的文件的路径是
        filename: 'static/js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // 模块加载器  ,本身只打包js
    module: {
        rules: [

        ]
    },
    // 插件   ,   插件来打包其他文件 html等
                  //目的就是打包引入的js
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html'
        })
    ]
}