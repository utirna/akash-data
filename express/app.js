var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var db_con = require("./bin/db.config");
const cors = require("cors");
var indexRouter = require("./routes/index");
const connection = db_con.myConnection(db_con.mysql, db_con.options, "single");
var app = express();
app.use(cors());
app.use(connection);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.send({ error: err.message, status: false });
});

module.exports = app;
