const express = require('express')
const cors = require('cors')
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'mydb',
  password:'',
});

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', function (req, res, next) {
    res.send('Hello World! from server')
})

app.get('/users', function (req, res, next) {
    connection.query(
      'SELECT * FROM `users`',
      function(err, results, fields) {
        res.json(results);
      }
    );
  })


  app.post('/register', function (req, res, next) {
    connection.query(
      'INSERT INTO `users`(`fname`, `lname`, `email`, `password`, `avatar`) VALUES (?, ?, ?, ?, ?)',
      [req.body.fname, req.body.lname, req.body.emailb, req.body.password, req.body.avatar],
      function(err, results) {
        if(err){
            return res.status(400).send("email already exists")
        }
        res.json(results);
      }
    );
  })

  
app.listen(4000, function () {
    console.log('CORS-enabled web server listening on port 4000')
})