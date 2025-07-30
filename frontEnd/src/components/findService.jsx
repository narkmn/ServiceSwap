import { useEffect, useState } from 'react';
import axios from 'axios';
import ServiceCard from './serviceCard';
import ServiceModal from './serviceModal';

const FindService = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/services')
      .then(response => setServices(response.data))
      .catch(error => console.error('Error fetching services:', error));
  }, []);

  const handleCardClick = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="bg-light min-vh-100">
      <div className="container py-4">
        {/* Breadcrumbs */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/home">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Find a Service</li>
          </ol>
        </nav>

        {/* Search Bar */}
        <div className="row g-2 align-items-center mb-4">
          <div className="col-md-5">
            <input className="form-control" type="text" placeholder="Search" />
          </div>
          <div className="col-md-4">
            <select id="serviceCategory" className="form-select">
              <option value="">Select a category</option>
              <option value="tech">Technology & IT Support</option>
              <option value="home">Home Maintenance & Repairs</option>
              <option value="education">Education & Tutoring</option>
              <option value="wellness">Health & Wellness</option>
              <option value="pet">Pet Care</option>
              <option value="transport">Transportation & Delivery</option>
              <option value="creative">Creative & Design</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="col-md-3">
            <button className="btn btn-primary w-100" type="button">Search</button>
          </div>
        </div>

        {/* Fixed-width Card Grid */}
        <div className="d-flex flex-wrap justify-content-start gap-4">
          {services.map((service, index) => (
            <div key={index} style={{ flex: '0 0 300px' }}>
              <ServiceCard service={service} onClick={() => handleCardClick(service)} />
            </div>
          ))}
        </div>

        {selectedService && (
          <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
        )}
      </div>
    </div>
  );
};

export default FindService;