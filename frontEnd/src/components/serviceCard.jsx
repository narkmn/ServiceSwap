const ServiceCard = ({ service }) => {
  let imageSrc;
  try {
    imageSrc = `/images/service${String(service.id).padStart(2, '0')}.jpg`;
  } catch (err) {
    imageSrc = `/images/default.jpg`;
  }

  return (
    <div className="card shadow-sm service-img-container">
      <img className="card-img-top"
        src={imageSrc} 
        alt={`Service ${service.id}`} 
      />
      <div className="card-body">
        <h5 className="card-title">{service.title}</h5>
        <p className="card-text">{service.description}</p>
      </div>
    </div>
  );
};


export default ServiceCard;