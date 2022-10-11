const mysql = require("mysql2");
const myConnection = require("express-myconnection");
const options = {
  host: "localhost",
  user: "root",
  password: "Omsairam",
  port: 3306,
  database: "nodejs",
};
module.exports.myConnection = myConnection;
module.exports.options = options;
module.exports.mysql = mysql;
