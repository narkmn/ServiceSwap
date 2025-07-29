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
import SearchService from './components/searchService.jsx';

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
        <Route path="/request-confirm" element={<RequestConfirm />} />
        <Route path="/request-sent" element={<RequestSent />} />
        <Route path="/your-services" element={<Yourservices />} />
        <Route path="/search-service" element={<SearchService />} />
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