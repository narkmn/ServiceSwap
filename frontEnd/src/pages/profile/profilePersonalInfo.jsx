import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProfilePersonalInfo = ({ isLoggedIn, setIsLoggedIn, userName, setUserName }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    dob: '',
    address: '',
    city: '',
    province: '',
    postalCode: ''
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const userId = localStorage.getItem('userId'|| '1');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.patch(`http://localhost:8080/api/users/${userId}`, formData);
      setError(null);
      alert('Profile updated successfully!');
      navigate('/profile', { state: { success: 'Profile updated successfully!' } });
    } catch (err) {
      console.error('Error updating user:', err);
      setError(err.response?.data?.message || 'Failed to update profile');
    }


    console.log('Form submitted:', formData);
    // Example: await axios.post('http://localhost:8080/api/users/update', formData);
  };

  return (
          <form className="mx-auto pt-3" style={{ maxWidth: '650px' }} onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <label htmlFor="firstName" className="form-label mt-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="form-control"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="phone" className="form-label mt-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="form-control"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="col">
                <label htmlFor="lastName" className="form-label mt-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="form-control"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="dob" className="form-label mt-1">
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  className="form-control"
                  value={formData.dob}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="address" className="form-label mt-1">
                Address
              </label>
              <input
                type="text"
                id="address"
                className="form-control"
                value={formData.address}
                onChange={handleChange}
              />
              <label htmlFor="city" className="form-label mt-1">
                City
              </label>
              <input
                type="text"
                id="city"
                className="form-control"
                value={formData.city}
                onChange={handleChange}
                required
              />
              <label htmlFor="province" className="form-label mt-1">
                Province
              </label>
              <input
                type="text"
                id="province"
                className="form-control"
                value={formData.province}
                onChange={handleChange}
                required
              />
              <label htmlFor="postalCode" className="form-label mt-1">
                Postal Code
              </label>
              <input
                type="text"
                id="postalCode"
                className="form-control"
                value={formData.postalCode}
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-flex justify-content-center mt-4">
              <button type="submit" className="btn btn-primary mx-2">
                Update
              </button>
            </div>
          </form>
  );
};

export default ProfilePersonalInfo;