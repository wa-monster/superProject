const env = process.env.NODE_env   //环境参数


//配置
let MYSQL_CONF

if (env === 'dev') {
    // 创建数据库
    MYSQL_CONF={
        host: '127.0.0.1',
        user: 'root',
        password: 'li9426464',
        port: '3306',
        database: 'myblog'
    }
}
if (env === 'production') {
    // 创建数据库
    MYSQL_CONF={
        host: '127.0.0.1',
        user: 'root',
        password: 'li9426464',
        port: '3306',
        database: 'myblog'
    }
}
module.exports = {
    MYSQL_CONF
}