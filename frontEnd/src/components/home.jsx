import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const Home = () => {
  const [services, setServices] = useState([]);

  const navigate = useNavigate();
  const handleClickSearch = () => {
    navigate('/search-service');
  };

  useEffect(() => {
    axios.get('http://localhost:8080/api/services')
      .then(response => setServices(response.data))
      .catch(error => console.error('Error fetching services:', error));
  }, []);

  console.log('Services:', services);

  return (
    <div className="container py-4">
      <h1 className="text-center mb-5">What would you like to do today?</h1>

      <div className="row justify-content-center gy-4">
        {/* Card 1 */}
        <div className="col-md-5 col-lg-4" onClick={handleClickSearch} style={{ cursor: 'pointer' }}>
          <button className="btn btn-light w-100 p-4 shadow-sm d-flex flex-column align-items-center h-100">
            <img src="/images/icon_find_service.png" alt="Find a Service" style={{ width: "60px", height: "60px" }} className="mb-2" />
            <h5>Find a Service</h5>
            <p className="text-muted text-center">
              Looking for a service? Start here to connect with someone ready to help!
            </p>
          </button>
        </div>

        {/* Card 2 */}
        <div className="col-md-5 col-lg-4">
          <button className="btn btn-light w-100 p-4 shadow-sm d-flex flex-column align-items-center h-100">
            <img src="/images/icon_your_offer.png" alt="Offer a Service" style={{ width: "60px", height: "60px" }} className="mb-2" />
            <h5>Offer a Service</h5>
            <p className="text-muted text-center">
              Offering something? Create or update your service and keep it up to date.
            </p>
          </button>
        </div>

        {/* Card 3 */}
        <div className="col-md-5 col-lg-4">
          <button className="btn btn-light w-100 p-4 shadow-sm d-flex flex-column align-items-center h-100">
            <img src="/images/icon_your_request.png" alt="Your Service Requests" style={{ width: "60px", height: "60px" }} className="mb-2" />
            <h5>Your Service Requests</h5>
            <p className="text-muted text-center">
              Check on the services you've requested from others.
            </p>
          </button>
        </div>

        {/* Card 4 */}
        <div className="col-md-5 col-lg-4">
          <button className="btn btn-light w-100 p-4 shadow-sm d-flex flex-column align-items-center h-100">
            <img src="/images/icon_your_service.png" alt="Requests for Your Service" style={{ width: "60px", height: "60px" }} className="mb-2" />
            <h5>Requests for Your Service</h5>
            <p className="text-muted text-center">
              See who's asked for your help. Respond and stay connected.
            </p>
          </button>
        </div>
      </div>

      {/* Dynamic Services Section */}
      <h2 className="text-center my-5">Latest Services</h2>
      <div className="row">
        {services.map(service => (
          <div key={service.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
                <span className="badge bg-secondary">{service.category}</span>
                <div className="mt-2 text-muted">{service.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
