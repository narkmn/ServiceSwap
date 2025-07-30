import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Welcome from './components/welcome.jsx';
import Home from './components/home.jsx';
import RequestConfirm from './components/requestConfirm.jsx';
import RequestSent from './components/RequestSent.jsx';
import Yourservices from './components/yourservices.jsx';
import LoginPage from './components/Auth/loginPage.jsx';
import FindService from './components/findService.jsx'; 
import RegisterPage from './components/Auth/registerPage.jsx';
import Profile from './components/Auth/profile.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedIn === 'true');
  }, []);

  return (
    <>
      <Navbar />
      <Routes>

        <Route
        path="/"
        element={isLoggedIn ? <Home/> : <Welcome />}
        />
        <Route path="/home" element={<Home />}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/request-confirm/:serviceId" element={<RequestConfirm />} />
        <Route path="/request-sent" element={<RequestSent />} />
        <Route path="/your-services" element={<Yourservices />} />
        <Route path="/find-service" element={<FindService />} />
      </Routes>
      {/* {isLoggedIn ? (
        <>
          <Home />
        </>
      ) : (
        <Welcome />
      )} */}
    </>
  );
}

export default App;