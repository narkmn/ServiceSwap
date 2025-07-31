import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Welcome from './pages/home/welcome.jsx';
import Home from './pages/home.jsx';
import RequestConfirm from './components/requestConfirm.jsx';
import RequestSent from './components/RequestSent.jsx';
import Yourservices from './pages/services/yourservices.jsx';
import LoginPage from './pages/Auth/loginPage.jsx';
import FindService from './pages/services/findService.jsx'; 
import RegisterPage from './pages/Auth/registerPage.jsx';
import Profile from './pages/profile/profile.jsx';
import CreateService from './pages/services/createService.jsx';
import UpdateService from './components/updateService.jsx'; 
import HowItWorks from './pages/home/howItWorks.jsx';
import ForgotPassword from './pages/Auth/forgotPassword.jsx'; 
import FaqPage from './pages/home/faqPage.jsx'; 
import ContactUs from './pages/home/contactUs.jsx'; 
import Whoops404 from './pages/home/whoops.jsx'; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');


  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    setUserName(localStorage.getItem('name') || '');
    setUserId(localStorage.getItem('userId') || '');
  }, []);

  return (
    <>
      <Navbar isLoggedIn = {isLoggedIn} setIsLoggedIn={setIsLoggedIn} userName={userName} setUserName={setUserName} userId={userId} setUserId ={setUserId} />
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home/> : <Welcome />}/>
        <Route path="/home" element={isLoggedIn ? <Home/> : <Welcome />}/>
        <Route path="/login" element={<LoginPage isLoggedIn = {isLoggedIn} setIsLoggedIn={setIsLoggedIn} userName={userName} setUserName={setUserName} userId={userId} setUserId ={setUserId}  />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/find-service" element={<FindService />} />
        <Route path="/request-confirm/:serviceId" element={<RequestConfirm />} />
        <Route path="/request-sent" element={<RequestSent />} />

        <Route path="/create-service" element={<CreateService />} />
        <Route path="/create-service/:serviceId?" element={<CreateService />} />
        <Route path="/update-service/" element={<UpdateService />} />
        
        {/* Static Routes */}
        <Route path="/about" element={<div>About us</div>} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/your-services" element={<Yourservices />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactUs />} />
        
        {/* 404 Route */}
        
        <Route path="*" element={<Whoops404/>}/>
        
      </Routes>
    </>
  );
}

export default App;