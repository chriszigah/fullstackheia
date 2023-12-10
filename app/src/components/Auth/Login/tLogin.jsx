import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from "./style.module.css";
import FormInput from "./FormInput";
import AuthService from "../../../services/auth.service";
import { login, profile } from "../../../slices/auth";
import { NavLink } from "react-router-dom";

const Login = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    console.log("Login Ready");
  }, []);

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
        const userId = user.data.id;
        const userProfileID = await AuthService.getProfile(userId);
        const userProfile = userProfileID.data;
        dispatch(profile(userProfile));
        dispatch(login(user.data));
      }
      //dispatch(login(res.data.user));
    } catch (e) {
      console.error(e);
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className={classes.formContainerp}>
        <form onSubmit={handleSubmit}>
          <NavLink to="/" className={classes.home}>
            {" "}
            <span class="material-symbols-rounded"> house </span> Back To Home
          </NavLink>
          <h1> TEACHER LOGIN</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button className={classes.submitButtonp}>LOGIN</button>
          <small className={classes.small}>
            Not having an account?{" "}
            <NavLink to="/register">Register Now</NavLink>
          </small>
        </form>
        {user && <Navigate to="/profile" replace={true} />}
      </div>
    </>
  );
};

export default Login;
