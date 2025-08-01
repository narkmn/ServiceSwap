import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


const FindServiceRequest = () => {
  const navigate = useNavigate();

  // Receiver information
  const { serviceId } = useParams();
  const [receiverService, setRecieverService] = useState([]);
  useEffect(() => {
    if (serviceId) {
      axios.get(`http://localhost:8080/api/services/${serviceId}`)
        .then(response => setRecieverService(response.data))
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

  const imageSrc = `/images/service${String(serviceId).padStart(2, '0')}.jpg`;

  // Sender information service
  const userId = localStorage.getItem('userId');

  const [senderServices, setSenderServices] = useState([]);
  const [offerService, setOfferService] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/services')
      .then(response => {
        const Services = response.data.filter(service => service.user.id === Number(userId));
        setSenderServices(Services)
      })
      .catch(error => console.error('Error fetching services:', error));
  }, []);

  // If there's an error or user put wrong url, return null to avoid rendering
  if (error || !receiverService) {
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const toLocalDateTime = (dateStr) => dateStr + "T00:00:00.000";

    // Add your form submission logic here
    const requestData = {
      receiver:{"id":receiverService.user?.id},
      service:{"id":serviceId},
      proposedDate: toLocalDateTime(e.target['receiversenderdate'].value),
      status: "PENDING",

      //Who is sending the request
      sender:{"id":userId},
      swapType: "SERVICE",
      swapServiceId:{"id":offerService},
      swapTimecredit:0,
      proposedMyserviceDate: toLocalDateTime(e.target['senderservicedate'].value),
      initialMsg: e.target['message-provider'].value,
      proposedLocation: e.target['proposallocation'].value,
      swapLocation: e.target['swaplocation'].value
    }
    console.log('Form submitted', requestData );

    try {
      await axios.post("http://localhost:8080/api/requests", requestData);
      alert("Request sent!");
      navigate("/myrequest", {
        state: { success: "Request submitted successfully!" },
      });
    } catch (err) {
      console.error("Error submitting request:", err);
      alert("Something went wrong!");
    }

  };

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">ServiceSwap</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/home">Home</a></li>
          <li className="breadcrumb-item"><a href="/find-service">Find a Service</a></li>
          <li className="breadcrumb-item active" aria-current="page">Send request</li>
        </ol>
      </nav>
      <h2 className="mb-4">Request Confirmation</h2>
      <div className="card p-4 shadow-sm">
        <section className="mb-5">
          <h4 className="fw-bold mb-3">Service Summary</h4>
          <div className="row g-4">
            <div className="col-md-8">
              <p><strong>Service Name:</strong> {receiverService.serviceTitle}</p>
              <p><strong>Category:</strong> {receiverService.category || 'Not specified'}</p>
              <p><strong>Provider Name:</strong> {receiverService.user?.username || 'Unknown'}</p>
              <p><strong>Description:</strong></p>
              <p className="text-muted">
                {receiverService.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
              </p>
            </div>
            <div className="col-md-4">
                <img
                  src={imageSrc}
                  alt={`Service ${receiverService.serviceTitle}`}
                  className="card-img-top"
                  style={{ objectFit: 'cover', height: '200px' }}
                  onError={(e) => { e.target.src = '/images/default.jpg'; }}
                />
            </div>
          </div>
        </section>

        <section>
          <hr className="my-4" />
          <form onSubmit={handleSubmit}>
            <h4 className="fw-bold mb-3">I Want Your Service</h4>
            <div className="mb-3">
              <label htmlFor="date-from" className="form-label">Preferred Date*</label>
              <div className="input-group">
                <input type="date" id="date-to" name="receiversenderdate" className="form-control" aria-label="End date" required />
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
                <input type="text" id="location" name="proposallocation" className="form-control" placeholder="Enter location" required />
              </div>
            </div>
            <hr className="my-4" />

            <h4 className="fw-bold mb-3">I Offer My Service</h4>
            <div className="mb-3">
            <select id="offerService" className="form-select" onChange={(e) => setOfferService(e.target.value)}>
              <option value="">Select a your service</option>
              {senderServices.map((service) => 
                <option key = {service.id} value={service.id}>{service.id + '-' +service.serviceTitle}</option>
              )}
            </select>
          </div>
            <div className="mb-3">
              <label htmlFor="date-from" className="form-label">Proposed Date</label>
              <div className="input-group">
                <input type="date" id="date-to" name="senderservicedate" className="form-control" aria-label="End date" required />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="location" className="form-label">Location</label>
              <div className="input-group">
                <span className="input-group-text">
                  <svg width="20" height="20" fill="#003366" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zM12 11.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z"/>
                  </svg>
                </span>
                <input type="text" id="location" name="swaplocation" className="form-control" placeholder="Enter location" required/>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="message-provider" className="form-label">Message to a Provider</label>
              <textarea id="message-provider" name="message-provider" className="form-control" placeholder="Tell them what you need, ask questions, or explain specifics." rows="3"></textarea>
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
}
 
export default FindServiceRequest;