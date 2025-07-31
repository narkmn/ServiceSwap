import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isLoggedIn, setIsLoggedIn, userName, setUserName }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    setUserName('');
    navigate('/');
  };

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg bg-light px-4">
        <Link className="navbar-brand" to="/">
          <img src="/images/logo.png" alt="Logo" width="150" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/how-it-works">How it works</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faq">FAQ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>

            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">{userName}</Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-danger ms-2" onClick={handleLogout}>
                    Sign out
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">Log in</Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
