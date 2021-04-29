const mysql = require('mysql')
const { MYSQL_CONF } = require('../conf/db')

// 创建连接
const con = mysql.createConnection(MYSQL_CONF)

//start connection
con.connect()

//统一执行sql语句
function exec(sql) {

    const promise = new Promise((resolve, reject) => {
        con.query(sql, (err, result) => {
            if (err) {
                reject(err)
                return
            }
            resolve(result)
        })
    })
    return promise
}


module.exports = {
    exec
}
