import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Welcome from './components/welcome.jsx';
import Home from './components/home.jsx';
import RequestConfirm from './components/requestConfirm.jsx';
import RequestSent from './components/RequestSent.jsx';
import Yourservices from './components/yourservices.jsx';

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
        <Route path="/request-confirm" element={<RequestConfirm />} />
        <Route path="/request-sent" element={<RequestSent />} />
        <Route path="/your-services" element={<Yourservices />} />
      </Routes>
      {isLoggedIn ? (
        <>
          <Home />
        </>
      ) : (
        <Welcome />
      )}
    </>
  );
}

export default App;