import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import {
  AuthRoutes,
  NotFound,
  Profile,
  Login,
  Home,
  Register,
  TakeQuiz,
  CheckResult,
  NoticeBoard,
  ContactTeacher,
  CheckPayment,
  StudentDashboard,
  PcheckResult,
  TcheckPayments,
  TcontactParent,
  TmanageClass,
  TnoticeBoard,
  AcheckPayments,
  AcreateClass,
  AcreateNotice,
  AcreatePayments,
  AcreateSubjects,
  Ahome,
  AnoticeBoard,
} from "./components";

import PnoticeBoard from "./components/ParentsDashBoard/NoticeBoard";
import PmakePayments from "./components/ParentsDashBoard/MakePayment";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AuthRoutes />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/student/dash" element={<StudentDashboard />} />
          <Route path="/student/noticeboard" element={<NoticeBoard />} />
          <Route path="/register" element={<Register />} />
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
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
