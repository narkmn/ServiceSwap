import { useEffect, useState } from 'react';
import axios from 'axios';
import FindServiceCard from '../../components/findServiceCard';
import FindServiceModal from '../../components/findServiceModal';
import { serviceCategory } from '../../assets/service';

const FindService = () => {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const userId = localStorage.getItem('userId');
  console.log(services);

  useEffect(() => {
    axios.get('http://localhost:8080/api/services')
      .then(response => {
        const filtered = response.data.filter(service => service.user.id !== Number(userId));
        setServices(filtered);
        setFilteredServices(filtered); // default
      })
      .catch(error => console.error('Error fetching services:', error));
  }, []);

  useEffect(() => {
    const lowerSearch = searchTerm.toLowerCase();

    const filtered = services.filter(service => {
      const title = service.title || '';
      const description = service.description || '';
      const category = service.category || '';

      const matchesText =
        title.toLowerCase().includes(lowerSearch) ||
        description.toLowerCase().includes(lowerSearch);

      const matchesCategory = selectedCategory
        ? category.toLowerCase() === selectedCategory.toLowerCase()
        : true;

      return matchesText && matchesCategory;
    });

    setFilteredServices(filtered);
  }, [searchTerm, selectedCategory, services]);

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

        {/* Search and Filter */}
        <div className="row g-2 align-items-center mb-4">
          <div className="col-md-6">
            <input
              className="form-control"
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <select
              className="form-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {serviceCategory.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Service Cards */}
        <div className="d-flex flex-wrap justify-content-start gap-4">
          {filteredServices.map((service, index) => (
            <div key={index} className="col-md-3 mb-4" >
              <FindServiceCard service={service} onClick={() => handleCardClick(service)} />
            </div>
          ))}
        </div>

        {selectedService && (
          <FindServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
        )}
      </div>
    </div>
  );
};

export default FindService;
