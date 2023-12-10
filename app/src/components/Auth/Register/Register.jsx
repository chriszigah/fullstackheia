import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import classes from "./style.module.css";
import AuthService from "../../../services/authService.js";
import secureLocalStorage from "react-secure-storage";

const currentProfile = secureLocalStorage.getItem("profile");

function Register() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");

  const [role, setRole] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = { fname, lname, password, role };
    try {
      console.log(values);
      const res = await AuthService.register(values);
      console.log(res.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Form className={classes.mainForm}>
      <Form.Label>Add User</Form.Label>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            name="fname"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            name="lname"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          placeholder="Enter Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Role</Form.Label>
          <Form.Select
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option>Choose One..</option>
            <option value="student">student</option>
            <option value="teacher">Teacher</option>
            <option value="parent">Parent</option>
            <option defaultValue="admin" value="admin">
              Admin
            </option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Add User
      </Button>
    </Form>
  );
}

export default Register;
