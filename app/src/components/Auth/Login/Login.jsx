import { useState } from "react";
import { Navigate } from "react-router-dom";
import classes from "./style.module.css";
import FormInput from "./FormInput";
import AuthService from "../../../services/authService";
import { NavLink } from "react-router-dom";
import { userDash } from "../../helpers";
import secureLocalStorage from "react-secure-storage";
import swal from "sweetalert";

const Login = () => {
  const Suser = secureLocalStorage.getItem("user");

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username is required",
      label: "Username",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password is required",
      label: "Password",
      required: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await AuthService.login(values);

      if (res.data.isAuth === true) {
        const user = await AuthService.getSession();
        secureLocalStorage.setItem("user", user.data);
        const userId = user.data.id;
        const userProfileID = await AuthService.getProfile(userId);
        const userProfile = userProfileID.data;
        secureLocalStorage.setItem("profile", userProfile);
        swal({
          title: "Login Success",
          icon: "success",
          text: "You have login in successfully redirect to Dashbard.",
        });
        return window.location.assign(userDash(user.data));
      }
    } catch (error) {
      setValues.password = "";
      setValues.username = "";
      return swal({
        title: "Login Failed",
        icon: "error",
        text: "Username/Password Combination",
      });
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className={classes.formContainer}>
        <form onSubmit={handleSubmit}>
          <NavLink to="/" className={classes.home}>
            {" "}
            <span className="material-symbols-rounded"> house </span> Back To
            Home
          </NavLink>
          <h1> HEIA LOGIN</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button className={classes.submitButton}>LOGIN</button>
          <small className={classes.small}>
            Not having an account?{" "}
            <NavLink to="/register">Register Now</NavLink>
          </small>
        </form>
        {Suser && <Navigate to={userDash(Suser)} />}
      </div>
    </>
  );
};

export default Login;
