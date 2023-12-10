import AdminDashNav from "./StudentDashNav";
import { useState } from "react";
//import FormInput from "../Auth/Login/FormInput";
//import noticeService from "../../services/noticeService";
//import { NavLink } from "react-router-dom";
//import swal from "sweetalert";
import classes from "./createnotice.module.css";

const AcreateNotice = () => {
  const [notice, setNotices] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(notice);
    /* try {
      //const res = await noticeService.addNotice(values);

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
    }*/
  };

  return (
    <>
      <AdminDashNav />
      <div className={"formContainer"}>
        <form onSubmit={handleSubmit}>
          <h1> Add Notice</h1>
          <textarea
            name="notice"
            value={notice}
            placeholder="Enter Notice"
            required={true}
            onChange={(e) => setNotices(e.target.value)}
            className={classes.notice}
            rows={100}
          ></textarea>
          <button className={classes.submitButton}>SUBMIT NOTICE</button>
        </form>
      </div>
    </>
  );
};

export default AcreateNotice;
