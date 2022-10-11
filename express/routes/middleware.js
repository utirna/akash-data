module.exports.poolConnection = (request, response, next) => {
  request.getConnection((err, connection) => {
    if (err) {
      response.status(500).send({
        status: false,
        message: "connection error",
      });
      return false;
    } else {
      response.pool = connection;
      next();
    }
  });
};
