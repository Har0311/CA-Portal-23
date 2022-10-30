import "./App.css";
// import Brownie from "./components/New_brownie/Brownie_point";
// import Nduty from "./components/New_Duty/Nduty"

// import Contact from './Contact/Contact';
import LoginMain from "./components/LoginMain/LoginMain";
import ForgotPass from "./components/ForgotPass/forgotPass";
// import Main from './components/main/main';
import Main from "./components/KY Main/main";

import "aos/dist/aos.css";

// import { useEffect, useState } from 'react';
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import LeaderBoard from "./components/leaderboard/LeaderBoard";
import Profile from "./Pages/Profile/Profile";
import AmbassadorApplyForm from "./Pages/Ambassodor/Application/ApplicationForm";
// import Login from './components/Login/Login';
import EventRegistration from "./components/EventsRegistration/EventRegistration";
// import { AuthProvider } from './context/AuthContext'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./utils/RequireAuth";
import GoogleMiddleware from "./Pages/GoogleLogin/GoogleMiddleware";
import CompleteProfile from "./Pages/CompleteProfile/CompleteProfile"
import TestPage from "./Pages/TestPage";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>

        <Route path="/" element={<Main />}></Route>
        <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
        <Route path="/login" element={<LoginMain />} />
        <Route path="/eventRegistration" element={<EventRegistration/>} />
        <Route path="/forgotpass" element={<ForgotPass />} />
        <Route path='/api/google/callback' element={<GoogleMiddleware />}/>
        {/* <Route path="/complete-profile" element={<CompleteProfile />} /> */}
        <Route path="/test" element={<TestPage />} />
        {/* CA Specific Pages */}
        <Route path="/ca" element={<Home />}></Route>
        <Route path="/ca/ambassador-apply" element={<AmbassadorApplyForm />} />
        <Route path="/ca/leaderboard" element={<RequireAuth><LeaderBoard /></RequireAuth>}></Route>

      </Routes>
    </>
  );
}

export default App;
