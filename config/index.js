// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
    build: {
        sitEnv: require('./sit.env'),
        prodEnv: require('./prod.env'),
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: '',
        assetsPublicPath: '/', //生产环境assetsPublicPath: '/'
        staticPath:'', //生产环境 staticPath:''
        productionSourceMap: false,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
        env: require('./dev.env'),
        port: 80,
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        staticPath:'/static/',
        proxyTable: {
            '/api/': {
                //target: 'http://60.205.209.210:3000',//上线
                target: 'http://127.0.0.1:3001', //开发
                pathRewrite: {
                  '^/api/': '/api/' 
                }
            }
        },
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false
    },
    mysql:{//本地
        host     : '127.0.0.1',
        user     : 'root',
        password : 'ghgbtafjhh',
        port: '3306', 
        database : 'capital_enterprise_dev',
        //waitForConnections : true,//超出最大链接队列
        //connectionLimit :100,//最大连接数
        //queueLimit : 0,//限制连接数
        connectTimeout:3000*5//超时时间
    },
    // mysql:{//服务器
    //     host     : '60.205.209.210',
    //     user     : 'admin',
    //     password : 'ghgbtafjhh',
    //     port: '3306', 
    //     database : 'develop',
    //     //waitForConnections : true,//超出最大链接队列
    //     //connectionLimit :100,//最大连接数
    //     //queueLimit : 0,//限制连接数
    //     connectTimeout:3000*5//超时时间
    // }
}
