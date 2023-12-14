import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components

import PnoticeBoard from "./components/ParentsDashBoard/NoticeBoard";
import PmakePayments from "./components/ParentsDashBoard/MakePayment";
import AuthRoutes from "./components/Auth/ProtectedRoutes/AuthRoutes";
import NotFound from "./components/404/404";
import Profile from "./components/Profile/Profile";
import Login from "./components/Auth/Login/Login";
import Home from "./components/Home/Home";
import Register from "./components/Auth/Register/Register";
import TakeQuiz from "./components/StudentDashboard/TakeQuiz";
import CheckResult from "./components/StudentDashboard/CheckResult";
import ContactTeacher from "./components/StudentDashboard/ContactTeacher";
import CheckPayment from "./components/StudentDashboard/CheckPayment";
import StudentDashboard from "./components/StudentDashboard/StudentDashboard";
import PcheckResult from "./components/ParentsDashBoard/CheckResult";
import TcheckPayments from "./components/TeachersDashBoard/CheckPayments";
import TcontactParent from "./components/TeachersDashBoard/ContactParent";
import TmanageClass from "./components/TeachersDashBoard/ManageClass";
import TnoticeBoard from "./components/TeachersDashBoard/NoticeBoard";
import AcheckPayments from "./components/AdminDashboard/CheckPayments";
import AcreateClass from "./components/AdminDashboard/CreateClass";
import AcreateNotice from "./components/AdminDashboard/CreateNotice";
import AcreatePayments from "./components/AdminDashboard/CreatePayment";
import AcreateSubjects from "./components/AdminDashboard/CreateSubjects";
import Ahome from "./components/AdminDashboard/Home";
import AnoticeBoard from "./components/AdminDashboard/NoticeBoard";
import NoticeBoard from "./components/StudentDashboard/NoticeBoard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AuthRoutes />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/student/dash" element={<StudentDashboard />} />
          <Route path="/student/noticeboard" element={<NoticeBoard />} />
          <Route path="/student/takequiz" element={<TakeQuiz />} />
          <Route path="/student/checkresults" element={<CheckResult />} />
          <Route path="/student/contactteacher" element={<ContactTeacher />} />
          <Route path="/student/checkpayments" element={<CheckPayment />} />
          <Route path="/parent/makepayments" element={<PmakePayments />} />
          <Route path="/parent/checkresults" element={<PcheckResult />} />
          <Route path="/parent/noticeboard" element={<PnoticeBoard />} />
          <Route path="/teacher/noticeboard" element={<TnoticeBoard />} />
          <Route path="/teacher/manageclass" element={<TmanageClass />} />
          <Route path="/teacher/checkpayments" element={<TcheckPayments />} />
          <Route path="/teacher/contactparents" element={<TcontactParent />} />
          <Route path="/teacher/contactparent" element={<TcontactParent />} />
          <Route path="/admin/home" element={<Ahome />} />
          <Route path="/admin/createpayments" element={<AcreatePayments />} />
          <Route path="/admin/createsubject" element={<AcreateSubjects />} />
          <Route path="/admin/createnotice" element={<AcreateNotice />} />
          <Route path="/admin/checkpayments" element={<AcheckPayments />} />
          <Route path="/admin/createclass" element={<AcreateClass />} />
          <Route path="/admin/noticeboard" element={<AnoticeBoard />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
