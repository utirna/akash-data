const UserModel = require("../Model/UsersModel");
const UserController = {
  getUserList: async (request, response) => {
    try {
      let result = await UserModel.getUserList(response.pool);
      console.log(result);
      response.status(200).send({
        status: true,
        result,
      });
    } catch (error) {
      response.status(500).send({
        status: false,
        message: "Server Error",
        error,
      });
    }
  },
  removeUser: async (request, response) => {
    let { id } = request.params;
    try {
      let result = await UserModel.deleteUser(response.pool, id);
      response.status(200).send({
        status: true,
        result,
      });
    } catch (error) {
      response.status(500).send({
        status: false,
        message: "Server Error",
        error,
      });
    }
  },
};

module.exports = UserController;
