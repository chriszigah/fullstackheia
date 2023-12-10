import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import { Navigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
const currentProfile = secureLocalStorage.getItem("profile");
const currentUser = secureLocalStorage.getItem("user");
import EditProfile from "./EditProfile";
import ChangePassword from "./ChangePassword";

const Profile = () => {
  const [key, setKey] = useState("Info");

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <Container>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="Info" title="Info">
          <div className="container">
            <header className="jumbotron">
              <h3>
                <strong>{`${currentProfile.fname}'s`}</strong> Profile
              </h3>
            </header>
            <p>
              <strong>Id:</strong> {currentProfile.id}
            </p>

            <p>
              <strong>Username:</strong> {currentProfile.username}
            </p>
            <p>
              <strong>First Name:</strong> {currentProfile.fname}
            </p>
            <p>
              <strong>Last Name:</strong> {currentProfile.lname}
            </p>
            <p>
              <strong>Other Names:</strong> {currentProfile.oname}
            </p>
            <p>
              <strong>Date of Birth:</strong> {currentProfile.dob}
            </p>
            <p>
              <strong>Gender:</strong> {currentProfile.gender}
            </p>
            <p>
              <strong>Class ID:</strong> {currentProfile.classid}
            </p>
            <p>
              <strong>Email:</strong> {currentProfile.email}
            </p>
            <strong>Role:</strong>
            {currentUser.role}
            <ul>
              {currentProfile.roles &&
                currentProfile.roles.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
            </ul>
          </div>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <EditProfile />
        </Tab>
        <Tab eventKey="Password" title="Password">
          <ChangePassword />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Profile;
