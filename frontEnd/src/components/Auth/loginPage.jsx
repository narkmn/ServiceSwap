import React, { useState } from 'react';
import axios from 'axios';



const LoginPage = () => {

  const [username, setUsername] = useState('');
  const [pswd, setPswd] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', {
        username,
        password: pswd
      });

      console.log('Login success:', response.data);
    } catch (err) {
      console.error('Login failed:', err);
      setError('Incorrect username or password. Please try again.');
    }
  };

    return (
      <div className="container">
        <h1 className="text-center m-4">Log in to ServiceSwap</h1>
        <form className="mx-auto" style={{ maxWidth: '400px' }} onSubmit={handleLogin}>
          <div className="row mb-3 align-items-center">
            <label htmlFor="username" className="col-sm-3 col-form-label">Username</label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="row mb-3 align-items-center">
            <label htmlFor="pswd" className="col-sm-3 col-form-label">Password</label>
            <div className="col-sm-9">
              <input
                type="password"
                className="form-control"
                id="pswd"
                value={pswd}
                onChange={(e) => setPswd(e.target.value)}
                required
              />
            </div>
          </div>
          {error && <p className="text-danger d-block text-center mt-2">{error}</p>}
          <button type="submit" className="btn btn-primary w-100 mt-2">Log in</button>
          <a href="#" className="d-block text-center mt-2">Forget Password?</a>
        </form>
      </div>);
}
 
export default LoginPage;