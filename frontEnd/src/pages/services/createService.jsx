import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { serviceCategory } from '../../assets/service';

const CreateService = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [error, setError] = useState(null);

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
      imgUrl: "default.jpg",
      status: "A",
      availability: "A",
      location: formData.get("location"),
      userId: Number(userId),
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
    <div className="container py-3 d-flex justify-content-center">
      <div className="card p-5 shadow-lg border-0 w-100">
        {/* Breadcrumbs */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item"><a href="/your-services">My services</a></li>
            <li className="breadcrumb-item active" aria-current="page">Offer a Service</li>
          </ol>
        </nav>

        <h1 className="text-center mb-5 fw-bold">Create a Service</h1>

        <section className="container d-flex justify-content-center">
          <form onSubmit={handleSubmit}>
            {/* Title */}
            <div className="mb-4">
              <label htmlFor="title" className="form-label fw-bold">Service Name</label>
              <input
                type="text"
                id="title"
                name="title"
                className="form-control"
                placeholder="Enter service name"
                required
              />
            </div>

            {/* Category */}
            <div className="mb-4">
              <label htmlFor="category" className="form-label fw-bold">Category</label>
              <select
                id="category"
                name="category"
                className="form-select"
                required
              >
                <option value="">Select category</option>
                {serviceCategory.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Location */}
            <div className="mb-4">
              <label htmlFor="location" className="form-label fw-bold">Location*</label>
              <input
                type="text"
                id="location"
                name="location"
                className="form-control"
                placeholder="Enter location"
                required
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label htmlFor="description" className="form-label fw-bold">Description</label>
              <textarea
                id="description"
                name="description"
                className="form-control"
                rows="4"
                placeholder="Enter service description"
                required
              ></textarea>
            </div>

            {/* File Upload */}
            <div className="mb-4">
              <label htmlFor="upload-file" className="form-label fw-bold">Upload a file or photo:</label>
              <input
                type="file"
                id="upload-file"
                name="upload-file"
                className="form-control"
              />
            </div>

            {/* Difficulty Level */}
            <div className="mb-4">
              <label htmlFor="points" className="form-label fw-bold">
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

            {/* Buttons */}
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
