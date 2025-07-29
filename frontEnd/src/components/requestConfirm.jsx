const RequestConfirm = ({ serviceName, category, providerName }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
  };

  return (
    <>
      <h2 className="mb-4">Request Confirmation</h2>
      <section className="mb-5">
        <h4 className="fw-bold mb-3">Service Summary</h4>
        <div className="row">
          <div className="col-md-8">
            <p><strong>Service Name:</strong> {serviceName}</p>
            <p><strong>Category:</strong> {category}</p>
            <p><strong>Provider Name:</strong> {providerName}</p>
            <p><strong>Description:</strong></p>
            <p className="fst-italic text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="col-md-4" aria-label="Service image or placeholder">
            <div className="bg-light h-100 rounded" style={{ minHeight: '150px' }}></div>
          </div>
        </div>
        <hr className="my-4" />
      </section>

      <section>
        <h4 className="fw-bold mb-3">Your Request Details</h4>
        <div className="card p-4">
          <div className="mb-3">
            <label htmlFor="date-from" className="form-label">Preferred Date*</label>
            <div className="d-flex flex-wrap align-items-center gap-3" role="group" aria-labelledby="prefer-date-label">
              <input type="date" id="date-from" name="date-from" className="form-control w-auto" aria-label="Start date" required />
              <span>to</span>
              <input type="date" id="date-to" name="date-to" className="form-control w-auto" aria-label="End date" required />
              <div className="form-check">
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
            <textarea id="message-provider" name="message-provider" className="form-control" placeholder="Tell them what you need, ask questions, or explain specifics." rows="4"></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="upload-file" className="form-label">Upload a file or photo:</label>
            <input type="file" id="upload-file" name="upload-file" className="form-control" />
          </div>

          <fieldset className="mb-3">
            <legend className="form-label">How to Contact You?</legend>
            <div className="form-check">
              <input type="radio" name="contact-method" value="in-app" id="contact-in-app" className="form-check-input" defaultChecked />
              <label htmlFor="contact-in-app" className="form-check-label">In-app Direct Message</label>
            </div>
            <div className="form-check">
              <input type="radio" name="contact-method" value="email" id="contact-email" className="form-check-input" />
              <label htmlFor="contact-email" className="form-check-label">Email</label>
            </div>
          </fieldset>

          <fieldset className="mb-3">
            <legend className="form-label">How would you like to give back? *</legend>
            <small className="text-muted d-block mb-2">Select the number of services or points you'd like to give back to match the service value. You can mix and match.</small>
            <div className="row">
              <div className="col-md-3 mb-3">
                <label htmlFor="hard-level" className="form-label">Hard Level service</label>
                <input type="number" id="hard-level" name="hard-level" min="0" step="1" defaultValue="0" className="form-control" />
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="moderate-level" className="form-label">Moderate Level service</label>
                <input type="number" id="moderate-level" name="moderate-level" min="0" step="1" defaultValue="0" className="form-control" />
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="easy-level" className="form-label">Easy Level service</label>
                <input type="number" id="easy-level" name="easy-level" min="0" step="1" defaultValue="0" className="form-control" />
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="points" className="form-label">Points</label>
                <input type="number" id="points" name="points" min="0" step="1" defaultValue="0" className="form-control" />
              </div>
            </div>
          </fieldset>

          <div className="d-flex gap-3">
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Send Request</button>
            <button type="button" className="btn btn-outline-secondary" onClick={() => window.history.back()}>Cancel Request</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default RequestConfirm;