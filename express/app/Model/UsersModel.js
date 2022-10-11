module.exports.getUserList = async (pool) => {
  try {
    const query = "SELECT * FROM loginuser";
    const result = await _Promise(pool, query);
    return result;
  } catch (error) {
    return Promise.reject(error);
  }
};

module.exports.deleteUser = async (pool, data) => {
  try {
    const query = "DELETE FROM loginuser WHERE user_id=?";
    const result = await _Promise(pool, query, [data]);
    return result;
  } catch (error) {
    return Promise.reject(error);
  }
};
function _Promise(pool, query, data = []) {
  return new Promise((response, reject) => {
    pool.query(query, data, (error, result) => {
      if (error) {
        reject(error);
      } else {
        response(result);
      }
    });
  });
}
