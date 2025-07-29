import { useEffect, useState } from 'react';
import axios from 'axios';
import ServiceCard from './serviceCard';

const SearchService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/services')
            .then(response => setServices(response.data))
            .catch(error => console.error('Error fetching services:', error));
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto px-4 py-6">
                {/* Breadcrumbs */}
                <nav aria-label="breadcrumb" className="m-4">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="home">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Find a Service</li>
            </ol>
            </nav>

            {/* Search Bar */}
            <div className="container my-3">
            <form className="d-flex align-items-center gap-2">
                <input className="form-control w-50" type="text" placeholder="Search" />

                <select id="serviceCategory" className="form-select w-auto">
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

                <button className="btn btn-primary" type="submit">Search</button>
            </form>
            </div>

                {/* Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchService;