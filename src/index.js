// index.js 是入口文件,必须创建在src文件夹下面,console.log('Hello Webpack!')
  //我需要在入口文件引入它
    // import  {sum} from './js/math.js' 

    import logo from './assets/imgs/logo.png'
    import  './assets/css/my.css'

    const image = new Image()
    image.src = logo
    document.body.appendChild(image)
    document.getElementById('root').innerHTML = '<h1>Hello222</h1>'
