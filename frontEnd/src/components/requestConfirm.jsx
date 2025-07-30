import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RequestConfirm = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [error, setError] = useState(null);

  const imageSrc = `/images/service${String(service.id).padStart(2, '0')}.jpg`;

  useEffect(() => {
    if (serviceId) {
      axios.get(`http://localhost:8080/api/services/${serviceId}`)
        .then(response => setService(response.data))
        .catch(err => {
          console.error('Error fetching service:', err);
          setError('Service not found. Please select a service.');
          navigate('/find-service', { state: { error: 'Service not found. Please select a service.' } });
        });
    } else {
      setError('No service selected.');
      navigate('/find-service', { state: { error: 'No service selected. Please select a service.' } });
    }
  }, [serviceId, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted', { serviceId, serviceName: service?.title });
    navigate('/find-service', { state: { success: 'Request submitted successfully!' } });
  };

  if (error || !service) {
    return null; // Render nothing while redirecting
  }

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">ServiceSwap</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/home">Home</a></li>
          <li className="breadcrumb-item"><a href="/find-service">Find a Service</a></li>
          <li className="breadcrumb-item active" aria-current="page">Request Confirmation</li>
        </ol>
      </nav>
      <h2 className="mb-4">Request Confirmation</h2>
      <div className="card p-4 shadow-sm">
        <section className="mb-5">
          <h4 className="fw-bold mb-3">Service Summary</h4>
          <div className="row g-4">
            <div className="col-md-8">
              <p><strong>Service Name:</strong> {service.title}</p>
              <p><strong>Category:</strong> {service.category || 'Not specified'}</p>
              <p><strong>Provider Name:</strong> {service.provider || 'Unknown'}</p>
              <p><strong>Description:</strong></p>
              <p className="text-muted">
                {service.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
              </p>
            </div>
            <div className="col-md-4">
                <img
                  src={imageSrc}
                  alt={`Service ${service.title}`}
                  className="card-img-top"
                  style={{ objectFit: 'cover', height: '200px' }}
                  onError={(e) => { e.target.src = '/images/default.jpg'; }}
                />
            </div>
          </div>
          <hr className="my-4" />
        </section>

        <section>
          <h4 className="fw-bold mb-3">Your Request Details</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="date-from" className="form-label">Preferred Date*</label>
              <div className="input-group">
                <input type="date" id="date-from" name="date-from" className="form-control" aria-label="Start date" required />
                <span className="input-group-text">to</span>
                <input type="date" id="date-to" name="date-to" className="form-control" aria-label="End date" required />
                <div className="form-check ms-3">
                  <input type="checkbox" id="flexible" name="flexible" className="form-check-input" />
                  <label htmlFor="flexible" className="form-check-label">I'm flexible</label>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="location" className="form-label">Location*</label>
              <div className="input-group">
                <span className="input-group-text">
                  <svg width="20" height="20" fill="#003366" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zM12 11.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z"/>
                  </svg>
                </span>
                <input type="text" id="location" name="location" className="form-control" placeholder="Enter location" required />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="message-provider" className="form-label">Message to a Provider</label>
              <textarea id="message-provider" name="message-provider" className="form-control" placeholder="Tell them what you need, ask questions, or explain specifics." rows="3"></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="upload-file" className="form-label">Upload a file or photo:</label>
              <div className="input-group">
                <input type="file" id="upload-file" name="upload-file" className="form-control" />
                <button type="button" className="btn btn-outline-secondary">Browse...</button>
              </div>
            </div>

            <div className="mb-3">
              <legend className="form-label">How to Contact You?</legend>
              <div className="form-check">
                <input type="radio" name="contact-method" value="in-app" id="contact-in-app" className="form-check-input" defaultChecked />
                <label htmlFor="contact-in-app" className="form-check-label">In-app Direct Message</label>
              </div>
              <div className="form-check">
                <input type="radio" name="contact-method" value="email" id="contact-email" className="form-check-input" />
                <label htmlFor="contact-email" className="form-check-label">Email</label>
              </div>
            </div>

            <div className="mb-3">
              <legend className="form-label">How would you like to give back? *</legend>
              <small className="text-muted mb-2">Select the number of services or points you'd like to give back to match the service value. You can mix and match.</small>
              <div className="row g-3">
                <div className="col-md-3">
                  <label htmlFor="hard-level" className="form-label">Hard Level service</label>
                  <input type="number" id="hard-level" name="hard-level" min="0" step="1" defaultValue="0" className="form-control" />
                </div>
                <div className="col-md-3">
                  <label htmlFor="moderate-level" className="form-label">Moderate Level service</label>
                  <input type="number" id="moderate-level" name="moderate-level" min="0" step="1" defaultValue="0" className="form-control" />
                </div>
                <div className="col-md-3">
                  <label htmlFor="easy-level" className="form-label">Easy Level service</label>
                  <input type="number" id="easy-level" name="easy-level" min="0" step="1" defaultValue="0" className="form-control" />
                </div>
                <div className="col-md-3">
                  <label htmlFor="points" className="form-label">Points</label>
                  <input type="number" id="points" name="points" min="0" step="1" defaultValue="0" className="form-control" />
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-end gap-3">
              <button type="button" className="btn btn-outline-secondary" onClick={() => navigate('/find-service')}>Cancel Request</button>
              <button type="submit" className="btn btn-primary">Send Request</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default RequestConfirm;