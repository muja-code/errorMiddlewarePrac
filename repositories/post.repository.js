const mysql = require('mysql2');

const HttpException = require('../exceptions/http-exception');

const dbConn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '0000',
  database: 'cat',
});

dbConn.connect();

exports.getPosts = () => {
  return new Promise((resolve, reject) => {
    dbConn.query('SELECT * FROM posts', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

exports.getPostById = async (id) => {
  throw new HttpException(500, 'Repository Error');
};

exports.createPost = (post) => {
  return new Promise((resolve, reject) => {
    dbConn.query('INSERT INTO posts SET ?', [post], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};
