//最终的效果是 commonjs 模块的
//我的自定义webpack配置文件
const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
//用来解析相关的信息的模块
module.exports = { //配置对象
    //入口文件 
    //__dirname代表当前文件所在的目录的绝对路径
    //C:\Users\l\Desktop\lwb_code
    entry: {
        app: path.resolve(__dirname, 'src/index.js')

    },

    //出口文件
    output: {
        //输出生成的文件名    
        filename: 'static/js/[name].bundle.js', //可以带路径
        //输出生成的文件名的路径
        path: path.resolve(__dirname, 'dist')

    },

    //模块加载器
    module: {
        rules: [{
                // 用于处理ES6 ==> ES5 
                test: /\.js$/, //用于匹配文件
                // exclude: /(node_modules)/,
                include: [path.resolve(__dirname, 'src')],
                //只针对要处理哪些
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                        //预设包,包含各种插件包的一个大包
                    }
                },

            },
            // 处理css
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            //处理图片
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192,
                      name: 'static/img/[name].[hash:7].[ext]'
                       //针对于小图片要转成base64位,节约空间;
                      // 相对于output.path
                    }
                  }
                ]
              },

     // 



        ]

    },
    //插件 
    plugins: [
        new htmlWebpackPlugin({

            template: 'index.html', //  讲那个页面作为模板页面展示处理
            filename: 'index.html' // 生成页面(实在output中指定的path下),

        })


    ],

    // 开发服务器

    devServer: {
        //  是否自动打开浏览器
        open: true, // 自动打开浏览器
        // 安静 . 是否输出日志
        // quiet: true, // 不做太多日志输出
    },

    // 4). 配置开启source-map调试

    //    devtool : 此选项控制是否生成，以及如何生成 source map。  
    devtool: 'cheap-module-eval-source-map',
    //    设置之后, 就可以详细的知道哪里出错了  
}