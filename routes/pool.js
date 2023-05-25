

var mysql=require('mysql')
var pool=mysql.createPool({
host:'sql.freedb.tech',
port:3306,
user:'freedb_Pravesh',
password:'v$mQg@Yf9WwnBK4',
database:'freedb_NewData',
connectionLimit:100


})

module.exports = pool; 



/*var mysql=require('mysql')
var pool=mysql.createPool({
host:'localhost',
port:3306,
user:'root',
password:'1234',
database:'sfr',
connectionLimit:100


})

module.exports = pool; */