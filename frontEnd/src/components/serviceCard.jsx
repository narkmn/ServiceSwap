const ServiceCard = ({ service, onClick }) => {
  const imageSrc = `/images/service${String(service.id).padStart(2, '0')}.jpg`;

  return (
    <div
      className="card h-100 shadow-sm cursor-pointer hover:shadow-lg transition"
      onClick={() => onClick(service)}
    >
      <img
        src={imageSrc}
        alt={`Service ${service.title}`}
        className="card-img-top"
        style={{ objectFit: 'cover', height: '200px' }}
        onError={(e) => { e.target.src = '/images/default.jpg'; }}
      />
      <div className="card-body">
        <h5 className="card-title">{service.title}</h5>
        <p className="card-text text-truncate" title={service.description}>
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;