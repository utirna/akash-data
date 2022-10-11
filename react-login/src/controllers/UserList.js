import axios from "axios";
import { useEffect, useState } from "react";

function UserList() {
  let [userList, setUserList] = useState([]);
  let getUserList = async () => {
    const url = "http://localhost:5000/api/get-user-list";
    try {
      let { data } = await axios.get(url);
      let { result, status } = data;
      setUserList([...result]);
    } catch (error) {}
  };

  let removeUser = async (index) => {
    let user_id = userList[index].user_id;

    const url = "http://localhost:5000/api/remove-user/" + user_id;
    try {
      let { data } = await axios.delete(url);
      let { result, status } = data;
      if (status == true) {
        let _userList = [...userList];
        _userList.splice(index, 1);
        setUserList([..._userList]);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getUserList();
  }, []); // [] ===> Run Only Once When Mounting is there

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">UserName</th>
            <th scope="col">Password</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.user_name}</td>
                <td>{user.user_pass}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeUser(index)}
                  >
                    Del
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default UserList;
