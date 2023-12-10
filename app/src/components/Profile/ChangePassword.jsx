import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import classes from "./style.module.css";
//import secureLocalStorage from "react-secure-storage";

//const currentProfile = secureLocalStorage.getItem("profile");

function ChangePassword() {
  const [cpwd, setCpwd] = useState("");
  const [npwd, setNpwd] = useState("");
  const [cnpwd, setCnpwd] = useState("");

  const handleSubmit = (e) => {
    const values = { cpwd, npwd, cnpwd };
    try {
      e.preventDefault();

      console.log(values);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Form className={classes.mainForm}>
      <Form.Label>Change Password</Form.Label>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Control
          placeholder="Current Password"
          name="cpwd"
          value={cpwd}
          onChange={(e) => setCpwd(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>New Password</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter new password"
          name="npwd"
          value={npwd}
          onChange={(e) => setNpwd(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Control
          type="text"
          placeholder="Confirm new password"
          name="cnpwd"
          value={cpwd}
          onChange={(e) => setCnpwd(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}

export default ChangePassword;
