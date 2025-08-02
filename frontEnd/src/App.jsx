import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Welcome from "./pages/home/welcome.jsx";
import Home from "./pages/home/home.jsx";
import RequestConfirm from "./components/requestConfirm.jsx";

import Yourservices from "./pages/services/yourservices.jsx";
import LoginPage from "./pages/Auth/loginPage.jsx";
import FindService from "./pages/services/findService.jsx";
import FindServiceRequest from "./components/findServiceRequest.jsx";
import RegisterPage from "./pages/Auth/registerPage.jsx";
import Profile from "./pages/profile/profile.jsx";
import CreateService from "./pages/services/createService.jsx";
import UpdateService from "./components/updateService.jsx";
import HowItWorks from "./pages/home/howItWorks.jsx";
import ForgotPassword from "./pages/Auth/forgotPassword.jsx";
import FaqPage from "./pages/home/faqPage.jsx";
import ContactUs from "./pages/home/contactUs.jsx";
import Whoops404 from "./pages/home/whoops.jsx";
import AboutUs from "./pages/home/aboutUs.jsx";
import Myrequests from "./pages/requests/myrequests.jsx";
import RecievedRequests from "./pages/requests/recievedRequests.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    setUserName(localStorage.getItem("name") || "");
    setUserId(localStorage.getItem("userId") || "");
  }, []);

  function handleStateChange(newIsLoggedIn, newUserName, newUserId) {
    console.log(
      "handleStateChange called with:",
      newIsLoggedIn,
      newUserName,
      newUserId
    );
    setIsLoggedIn(newIsLoggedIn);
    setUserName(newUserName);
    setUserId(newUserId);
  }

  return (
    <>
      <Navbar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        userName={userName}
        setUserName={setUserName}
        userId={userId}
        setUserId={setUserId}
      />
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <Welcome />} />
        <Route path="/home" element={isLoggedIn ? <Home /> : <Welcome />} />

        {/* Login and Registration Routes */}
        <Route
          path="/login"
          element={<LoginPage handleStateChange={handleStateChange} />}
        />
        <Route
          path="/register"
          element={
            <RegisterPage
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              userName={userName}
              setUserName={setUserName}
              userId={userId}
              setUserId={setUserId}
            />
          }
        />
        <Route
          path="/forgot-password"
          element={
            <ForgotPassword
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              userName={userName}
              setUserName={setUserName}
              userId={userId}
              setUserId={setUserId}
            />
          }
        />

        {/* Profile editing and viewing routes */}
        <Route path="/profile" element={isLoggedIn ? <Profile />:<Welcome />} />

        {/* Find service related routes and send request */}
        <Route path="/find-service" element={isLoggedIn ? <FindService />:<Welcome />} />
        <Route
          path="/send-request/:serviceId"
          element={isLoggedIn ? <FindServiceRequest />:<Welcome />}
        />

        {/* Your service list and offer it */}
        <Route path="/your-services" element={isLoggedIn ? <Yourservices />:<Welcome />} />
        <Route path="/create-service" element={isLoggedIn ? <CreateService />:<Welcome />} />

        {/* Your Request */}
        <Route path="/myrequest" element={isLoggedIn ? <Myrequests />:<Welcome />} />

        {/* Recieved Requests */}
        <Route path="/recievedrequests" element={isLoggedIn ? <RecievedRequests />:<Welcome />} />

        {/* Static Routes */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* 404 Route */}
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </>
  );
}

export default App;
