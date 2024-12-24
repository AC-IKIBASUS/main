const mysql = require("mysql2");

const db_connection = mysql
  .createConnection({
    host: "127.0.0.1", // имя хоста
    user: "ac", // имя пользователя
    database: "mite41-sandu", // имя базы данных
    password: "", // пароль от базы данных
  })
  .on("error", (err) => {
    console.log("Failed to connect to Database - ", err);
  });

module.exports = db_connection;
