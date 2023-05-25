var mysql=require('mysql')
var pool=mysql.createPool({
host:'sql.freedb.tech',
port:3306,
user:'freedb_OnboardData',
password:'nmfncnweP7&28Ub',
database:'freedb_ONboard',
connectionLimit:100


})

module.exports = pool;