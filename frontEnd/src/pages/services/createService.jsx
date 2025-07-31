import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const CreateService = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [error, setError] = useState(null);

  // Load existing service if editing
  const userId = localStorage.getItem("userId");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const requestData = {
      ...service,
      title: formData.get("title"),
      category: formData.get("category"),
      description: formData.get("description"),
      serviceType: "Construction",
      serviceDifficulty: Number(formData.get("points")),
      img_url: "default.jpg", 
      status: "A",
      availability:"A",
      location: formData.get("location"),
      // user: userId,
    };
    console.log("Request Data:", requestData);

    try {
      await axios.post("http://localhost:8080/api/services", requestData);
      alert("Service is created!");
      navigate("/your-services", {
        state: { success: "Service submitted successfully!" },
      });
    } catch (err) {
      console.error("Error submitting service:", err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 fw-bold">Create Your Service</h1>

      <div className="card p-4 shadow-lg border-0">
        <section>
          <form onSubmit={handleSubmit}>
            {/* Location input field */}
            <div className="mb-4">
              <label htmlFor="title" className="form-label fw-bold">
                Service Name
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-geo-alt-fill"></i>
                </span>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="form-control"
                  placeholder="Enter service name"
                  required
                />
              </div>
            </div>
            {/* Location input field */}
            <div className="mb-4">
              <label htmlFor="category" className="form-label fw-bold">
                Category
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-geo-alt-fill"></i>
                </span>
                <input
                  type="text"
                  id="category"
                  name="category"
                  className="form-control"
                  placeholder="Enter Category"
                  required
                />
              </div>
            </div>
            {/* Location input field */}
            <div className="mb-4">
              <label htmlFor="location" className="form-label fw-bold">
                Location*
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-geo-alt-fill"></i>
                </span>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="form-control"
                  placeholder="Enter location"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="title" className="form-label fw-bold">
                description
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-geo-alt-fill"></i>
                </span>
                <input
                  type="text"
                  id="description"
                  name="description"
                  className="form-control"
                  placeholder="Enter service description"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="upload-file" className="form-label fw-bold">
                Upload a file or photo:
              </label>
              <input
                type="file"
                id="upload-file"
                name="upload-file"
                className="form-control"
              />
            </div>

            <fieldset className="mb-4">
              
                <div className="col-md-3 mb-3">
                  <label htmlFor="points" className="form-label">
                    Difficulty level (in points) 
                  </label>
                  <input
                    type="number"
                    id="points"
                    name="points"
                    min="0"
                    step="1"
                    defaultValue="0"
                    className="form-control"
                  />
                </div>
            </fieldset>

            <div className="text-end">
              <button
                type="button"
                className="btn btn-outline-secondary me-2 px-4"
                onClick={() => navigate("/your-services")}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary px-4">
                Submit Request
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default CreateService;
