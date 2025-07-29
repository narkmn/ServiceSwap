import React, { useState } from "react";
import Request from "./request";

const currentRequests = [
  {
    id: "R12334",
    title: "Hair Dying",
    provider: "Jane Doe",
    requestedDate: "Jun-10-2025",
    status: "Accepted",
  },
];

const pastRequests = [
  {
    id: "R12334",
    title: "Lawn Mowing",
    provider: "John Doe",
    requestedDate: "Mar-10-2025",
    completedDate: "Mar-25-2025",
  },
];

const currentActions = [
  "Modify Request",
  "Cancel Request",
  "Mark as Complete",
  "Send Message to Provider",
  "Report This Service",
];

const pastActions = [
  "Give Feedback",
  "Delete Request",
  "Send Message to Provider",
  "Report This Service",
];

const Yourservices = () => {
  const [openMenu, setOpenMenu] = useState({ type: null, index: null });
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const handleMenu = (type, idx) => {
    setOpenMenu(
      openMenu.type === type && openMenu.index === idx
        ? { type: null, index: null }
        : { type, index: idx }
    );
  };

  const handleActionClick = (action, req) => {
    if (action === "Mark as Complete") {
      setSelectedRequest(req);
      setShowConfirm(true);
    }
    // Add other actions here as needed
  };

  const handleConfirm = () => {
    // Add logic to mark request as complete
    setShowConfirm(false);
    setSelectedRequest(null);
    // Optionally show a success message or update state
  };

  const handleCancel = () => {
    setShowConfirm(false);
    setSelectedRequest(null);
  };

  return (
    <div className="container py-5">
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/find-service">Home</a></li>
          <li className="breadcrumb-item"><a href="/find-service">Find a Service</a></li>
          <li className="breadcrumb-item active" aria-current="page">Your Service Requests</li>
        </ol>
      </nav>

      <h3 className="mb-3">Current Requests</h3>
      <table className="table table-bordered align-middle mb-5">
        <thead>
          <tr>
            <th>Request ID</th>
            <th>Title</th>
            <th>Provider</th>
            <th>Requested Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentRequests.map((req, idx) => (
            <tr key={req.id}>
              <td>{req.id}</td>
              <td>{req.title}</td>
              <td>{req.provider}</td>
              <td>{req.requestedDate}</td>
              <td>{req.status}</td>
              <td style={{ position: "relative" }}>
                <button
                  className="btn btn-link"
                  onClick={() => handleMenu("current", idx)}
                  aria-label="Show actions"
                >
                  <span style={{ fontSize: "1.5rem" }}>⋮</span>
                </button>
                {openMenu.type === "current" && openMenu.index === idx && (
                  <ul
                    className="list-group position-absolute"
                    style={{
                      zIndex: 10,
                      top: "100%",
                      right: 0,
                      minWidth: "180px",
                    }}
                  >
                    {currentActions.map((action) => (
                      <li
                        key={action}
                        className="list-group-item list-group-item-action"
                        tabIndex={0}
                        onClick={() => handleActionClick(action, req)}
                        style={{ cursor: "pointer" }}
                      >
                        {action}
                      </li>
                    ))}
                  </ul>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="mb-3">Past Requests</h3>
      <table className="table table-bordered align-middle">
        <thead>
          <tr>
            <th>Request ID</th>
            <th>Title</th>
            <th>Provider</th>
            <th>Requested Date</th>
            <th>Completed Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {pastRequests.map((req, idx) => (
            <tr key={req.id}>
              <td>{req.id}</td>
              <td>{req.title}</td>
              <td>{req.provider}</td>
              <td>{req.requestedDate}</td>
              <td>{req.completedDate}</td>
              <td style={{ position: "relative" }}>
                <button
                  className="btn btn-link"
                  onClick={() => handleMenu("past", idx)}
                  aria-label="Show actions"
                >
                  <span style={{ fontSize: "1.5rem" }}>⋮</span>
                </button>
                {openMenu.type === "past" && openMenu.index === idx && (
                  <ul
                    className="list-group position-absolute"
                    style={{
                      zIndex: 10,
                      top: "100%",
                      right: 0,
                      minWidth: "180px",
                    }}
                  >
                    {pastActions.map((action) => (
                      <li key={action} className="list-group-item list-group-item-action" tabIndex={0}>
                        {action}
                      </li>
                    ))}
                  </ul>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showConfirm && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ background: "rgba(0,0,0,0.2)", zIndex: 1050 }}
        >
          <div className="bg-white rounded shadow p-4" style={{ minWidth: 400 }}>
            <h5 className="mb-3 fw-bold">Confirm Service Completion?</h5>
            <p>
              Are you sure you want to confirm that the service has been completed?<br />
              <span className="text-muted">
                Once confirmed, the system will proceed with releasing the reward, and this action cannot be undone.
              </span>
            </p>
            <div className="d-flex justify-content-end gap-3 mt-4">
              <button className="btn btn-primary" onClick={handleConfirm}>Confirm</button>
              <button className="btn btn-outline-secondary" onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Yourservices;