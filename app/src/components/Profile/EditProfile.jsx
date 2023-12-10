import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import classes from "./style.module.css";
import secureLocalStorage from "react-secure-storage";
import ProfileService from "../../services/profile.service.js";
import AuthService from "../../services/authService.js";

const currentProfile = secureLocalStorage.getItem("profile");
const currentUser = secureLocalStorage.getItem("user");

function EditProfile() {
  //const [selectedFile, setSelectedFile] = useState(null);
  const [fname, setFname] = useState(
    currentProfile.fname ? currentProfile.fname : ""
  );
  const [lname, setLname] = useState(
    currentProfile.lname ? currentProfile.lname : ""
  );
  const [oname, setOname] = useState(
    currentProfile.oname ? currentProfile.oname : ""
  );
  const [dob, setDob] = useState(
    currentProfile.dob ? currentProfile.dobname : ""
  );
  const [email, setEmail] = useState(
    currentProfile.email ? currentProfile.email : ""
  );
  const [gender, setGender] = useState(
    currentProfile.gender ? currentProfile.gender : ""
  );
  const [phno, setPhno] = useState(
    currentProfile.phno ? currentProfile.phno : ""
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = { fname, lname, oname, gender, dob, email, phno };
    try {
      console.log(currentProfile.id);
      await ProfileService.updateProfile(currentProfile.id, values);
      const userProfileID = await AuthService.getProfile(currentUser.id);
      const userProfile = userProfileID.data;
      secureLocalStorage.setItem("profile", userProfile);
      console.log("Done");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Form className={classes.mainForm}>
      <Form.Label>Edit Profile</Form.Label>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            name="fname"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            name="lname"
            value={lname}
            onChange={(e) => setLname(e.target.vaule)}
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Other Names</Form.Label>
        <Form.Control
          placeholder="Enter Other Names"
          name="oname"
          value={oname}
          onChange={(e) => setOname(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter you email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your phone number"
          name="phno"
          value={phno}
          onChange={(e) => setPhno(e.target.value)}
        />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="date"
            name="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Gender</Form.Label>
          <Form.Select
            defaultValue="Choose One"
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option>Choose One..</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}

export default EditProfile;
