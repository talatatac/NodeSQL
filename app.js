const sql = require('mssql/msnodesqlv8')
//msnodesqlv8 module is requiered for Windows Authentication without using Username and Password

const pool = new sql.ConnectionPool({
  database: '<Database>',
  server: '<Server>',
  driver: 'msnodesqlv8',
  options: {
    trustedConnection: true
  }
})

console.log(pool)

pool.connect().then(() => {
  //simple query
  var queryString = 'select * from <table>';
  pool.request().query(queryString, (err, result) => {
    if(err)
    console.log(err)
    else 
        console.dir(result)
    })
})