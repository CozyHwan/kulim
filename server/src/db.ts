import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test',
});

connection.query(
  'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
  (err, results, fields) => {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  },
);

connection.query(
  'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
  ['Page', 45],
  (err, results) => {
    console.log(results);
  },
);
