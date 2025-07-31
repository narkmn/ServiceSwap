

const UpdateService = () => {
  return (
    <div className="container py-4">
      {/* Breadcrumb */}
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item"><a href="#">Find a Service</a></li>
          <li className="breadcrumb-item"><a href="#">Your Service Requests</a></li>
          <li className="breadcrumb-item active">Modify Request</li>
        </ol>
      </nav>

      <h2 className="text-center mb-4">Modify Your Request</h2>

      {/* Service Summary */}
      <div className="card mb-4">
        <div className="card-header fw-bold">Service Summary</div>
        <div className="card-body row">
          <div className="col-md-8">
            <p><strong>Service Name:</strong> Cleaning</p>
            <p><strong>Category:</strong> Household</p>
            <p><strong>Provider Name:</strong> Jane Doe</p>
            <p><strong>Description:</strong> General cleaning including kitchen and bathroom.</p>
          </div>
          <div className="col-md-4">
            <div className="ratio ratio-4x3 border rounded bg-light d-flex align-items-center justify-content-center">
              <span className="text-muted">Image</span>
            </div>
          </div>
        </div>
      </div>

      {/* Request Details */}
      <div className="card mb-4">
        <div className="card-header fw-bold">Your Request Details</div>
        <div className="card-body">
          {/* Preferred Dates */}
          <div className="mb-3">
            <label className="form-label">Preferred Date*</label>
            <div className="row g-2 align-items-center">
              <div className="col-md-5">
                <input type="date" className="form-control" />
              </div>
              <div className="col-md-1 text-center">to</div>
              <div className="col-md-5">
                <input type="date" className="form-control" />
              </div>
              <div className="col-md-1 form-check mt-2">
                <input type="checkbox" className="form-check-input" id="flexibleCheck" />
                <label className="form-check-label" htmlFor="flexibleCheck">I'm flexible</label>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="mb-3">
            <label className="form-label">Location*</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-geo-alt"></i></span>
              <input type="text" className="form-control" placeholder="Enter your location" />
            </div>
          </div>

          {/* Message */}
          <div className="mb-3">
            <label className="form-label">Message to Provider</label>
            <textarea className="form-control" rows="3" placeholder="Details, questions, or specifics..."></textarea>
          </div>

          {/* Upload File */}
          <div className="mb-3">
            <label className="form-label">Upload a file or photo</label>
            <input type="file" className="form-control" />
          </div>

          {/* Contact Method */}
          <div className="mb-3">
            <label className="form-label">How to Contact You?</label>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="contactMethod" id="contactInApp" defaultChecked />
              <label className="form-check-label" htmlFor="contactInApp">
                In-app Direct Message
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="contactMethod" id="contactEmail" />
              <label className="form-check-label" htmlFor="contactEmail">
                Email
              </label>
            </div>
          </div>

          {/* Give Back Options */}
          <div className="mb-3">
            <label className="form-label">How would you like to give back? *</label>
            <small className="d-block mb-2 text-muted">
              Select number of services or points to match the value. You can mix and match.
            </small>
            <div className="row g-2">
              <div className="col-md-3">
                <label className="form-label">Hard Level Service</label>
                <input type="number" className="form-control" min="0" />
              </div>
              <div className="col-md-3">
                <label className="form-label">Moderate Level Service</label>
                <input type="number" className="form-control" min="0" />
              </div>
              <div className="col-md-3">
                <label className="form-label">Easy Level Service</label>
                <input type="number" className="form-control" min="0" />
              </div>
              <div className="col-md-3">
                <label className="form-label">Points</label>
                <input type="number" className="form-control" min="0" />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="d-flex justify-content-end gap-2">
            <button className="btn btn-secondary">Cancel Request</button>
            <button className="btn btn-primary">Update Request</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateService;
