import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Welcome from './components/welcome.jsx';
import Home from './pages/home.jsx';
import RequestConfirm from './components/requestConfirm.jsx';
import RequestSent from './components/RequestSent.jsx';
import Yourservices from './components/yourservices.jsx';
import LoginPage from './pages/Auth/loginPage.jsx';
import FindService from './components/findService.jsx'; 
import RegisterPage from './pages/Auth/registerPage.jsx';
import Profile from './pages/Auth/profile.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');


  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedIn === 'true');
  }, []);

  console.log('isLoggedIn:', isLoggedIn);

  return (
    <>
      <Navbar isLoggedIn = {isLoggedIn} setIsLoggedIn={setIsLoggedIn} userName={userName} setUserName={setUserName}  />
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home/> : <Welcome />}/>
        <Route path="/home" element={isLoggedIn ? <Home/> : <Welcome />}/>
        <Route path="/login" element={<LoginPage isLoggedIn = {isLoggedIn} setIsLoggedIn={setIsLoggedIn} userName={userName} setUserName={setUserName} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/find-service" element={<FindService />} />
        <Route path="/request-confirm/:serviceId" element={<RequestConfirm />} />
        <Route path="/request-sent" element={<RequestSent />} />

        <Route path="/your-services" element={<Yourservices />} />
        
      </Routes>
    </>
  );
}

export default App;