import { useNavigate } from "react-router-dom";
const RequestSent = () => {
    const navigate = useNavigate();

    return (  <div className="container py-5">
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/find-service">Home</a></li>
          <li className="breadcrumb-item"><a href="/find-service">Find a Service</a></li>
          <li className="breadcrumb-item"><a href="/search-result">Search Result</a></li>
          <li className="breadcrumb-item active" aria-current="page">Request Confirmation</li>
        </ol>
      </nav>

      <div className="text-center my-5">
        <h2 className="mb-4 fw-bold">Your request has been sent!</h2>
        <p className="mb-4 fs-5">
          The service provider has received your request.<br />
          Please wait for their response — we’ll notify you as soon as there’s an update.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-outline-primary"
            onClick={() => navigate("/")}
          >
            Go to Home
          </button>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/request-status")}
          >
            Check Request Status
          </button>
        </div>
      </div>
    </div>);
}
 
export default RequestSent;