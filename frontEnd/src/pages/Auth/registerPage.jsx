import { useState , useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterPage = ({isLoggedIn, setIsLoggedIn, userName, setUserName, userId, setUserId }) => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userId');
    setIsLoggedIn(false);
    setUserName('');
    setUserId('');
  }, [setIsLoggedIn, setUserName, setUserId]);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agree: false
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return setError('Passwords do not match.');
    }

    if (!formData.agree) {
      return setError('You must accept the terms and conditions.');
    }

    let response;
    try {
      response = await axios.post('http://localhost:8080/api/auth/register', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        location: 'Vancouver, BC',
        role: 'user'
      });

      response = await axios.post('http://localhost:8080/api/auth/login', {
        email: formData.email,
        password: formData.password
      });

      const token = response.data.token; 

      //has to be changed to match the backend
      let users, name, userId;

      response = await axios.get('http://localhost:8080/api/users');

      users = Array.isArray(response.data) ? response.data : [];
      name = users.find(user => user.email.toLowerCase() === formData.email.toLowerCase()).username;
      userId = users.find(user => user.email.toLowerCase() === formData.email.toLowerCase()).id;

      // // Save user name in localStorage
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('token', token); 
      localStorage.setItem('name', name);
      localStorage.setItem('userId', userId);

      //change state
      setIsLoggedIn(true);
      setUserName(name);
      setUserId(userId);

      navigate('/profile');
    } catch (err) {
      console.error(err);
      setError('Registration failed. Please try again.');
    }
  };


return (
    <div className="container-fluid">
      <div className="container">
        <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '500px' }}>
          <div className="h2 text-center mt-5">Create Your Account</div>
          {error && <p className="text-danger mt-2">{error}</p>}

          <div>
            <label htmlFor="username" className="form-label mt-3">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="form-label mt-3">E-mail</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="form-label mt-3">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="form-label mt-3">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-check mt-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="agree">
              I accept Terms and Conditions and Privacy Policy
            </label>
          </div>

          <div className="d-flex justify-content-center mt-4">
            <button type="submit" className="btn btn-primary mx-2">Create Account</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;