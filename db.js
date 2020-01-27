const mysql = require('mysql')
const connection = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cinema-tix'
})
connection.connect()
module.exports = connection
