import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ handleStateChange=f=>f}) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [pswd, setPswd] = useState('');
  const [error, setError] = useState('');

  // Clear localStorage and reset state every time login page is rendered, because user might use login URL directly
  useEffect(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userId');
    handleStateChange(false, '', '');
  }, []);

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      let response = await axios.post('http://localhost:8080/api/auth/login', {
        email: email,
        password: pswd
      });

      console.log('Login request sent:', { email, password: pswd });
      console.log('Login response:', response.data);

      const token = response.data.token; 
      localStorage.setItem('token', token);
      
      response = await axios.get('http://localhost:8080/api/users');

      const users = Array.isArray(response.data) ? response.data : [response.data];
      const username = users.find(user => user.email.toLowerCase() === email.toLowerCase()).username;
      const userId = users.find(user => user.email.toLowerCase() === email.toLowerCase()).id;
      console.log(users);
      
      // Save user name in localStorage
      localStorage.setItem('name', username);
      localStorage.setItem('userId', userId);
      localStorage.setItem('isLoggedIn', true);

      console.log('Login successful:', username, userId);

      //change state
      handleStateChange(true, username, userId);

      navigate('/'); 

    } catch (err) {
      console.error('Login failed:', err);
      setError('Incorrect email or password. Please try again.');
    }
  };

    return (
      <div className="container">
        <h1 className="text-center m-4">Log in to ServiceSwap</h1>
        <form className="mx-auto" style={{ maxWidth: '400px' }} onSubmit={handleLogin}>
          <div className="row mb-3 align-items-center">
            <label htmlFor="email" className="col-sm-3 col-form-label">Email</label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
          <a href="forgot-password" className="d-block text-center mt-2">Forget Password?</a>
        </form>
      </div>);
}
 
export default LoginPage;