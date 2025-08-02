import { useNavigate } from 'react-router-dom';

const FindServiceModal = ({ service, onClose }) => {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');

  const handleRequestService = () => {
    navigate(`/send-request/${service.id}`);
    onClose(); // Close modal after navigation
  };

  return (
    <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{service.title}</h5>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <img
              src={`/images/service${String(service.id).padStart(2, '0')}.jpg`}
              alt={service.title}
              className="img-fluid mb-3"
              style={{ maxHeight: '200px', objectFit: 'cover' }}
              onError={(e) => { e.target.src = '/images/default.jpg'; }}
            />
            <p><strong>Description:</strong> {service.description}</p>
            <p><strong>Category:</strong> {service.category || 'Not specified'}</p>
            <p><strong>Provider:</strong> {service.user?.username || 'Unknown'}</p>
            <p><strong>Rating:</strong> {service.rating || 'N/A'}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
            <button type="button" className="btn btn-primary" onClick={handleRequestService}>
              Request with your Service
            </button>
            <button type="button" className="btn btn-primary">
              Request with TimeCredit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindServiceModal;