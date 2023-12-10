import { useEffect, useState } from "react";
import AdminDashNav from "./StudentDashNav";
import AuthService from "../../services/authService";
import secureLocalStorage from "react-secure-storage";
import Table from "react-bootstrap/Table";
import Register from "../Auth/Register/Register";

const Ahome = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    try {
      const res = await AuthService.getAllUsers();
      const users = res.data;
      secureLocalStorage.setItem("users", users);
      setUsers(users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(users);

  return (
    <div>
      <AdminDashNav />
      <h1>Admin Home</h1>
      <Register />
      <Table>
        <tr>
          <th>User Id</th>
          <th>Username</th>
          <th>role</th>
        </tr>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.role}</td>
          </tr>
        ))}
      </Table>
    </div>
  );
};

export default Ahome;
