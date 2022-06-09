module.exports = {
    lintOnSave:false,//关闭语法检查
    productionSourceMap:false,//关闭正式打包时产生map文件
    //代理跨域
    devServer: { 
        proxy:{
            '/api':{//如果请求路径包含 /api 会代理跨域
                // target:'http://39.98.123.211',
                target:'http://gmall-h5-api.atguigu.cn',
                // pathRewrite:{'^/api':''}, //重写路径
                ws:true, //用于支持websocket
                changeOrigin:true //用于控制请求头中的host值
            }
        }
    }
}