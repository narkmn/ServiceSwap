import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Myrequests = () => {
    const navigate = useNavigate();
    const userId = localStorage.getItem('userId');
    const [userRequests, setUserRequests] = useState([]);
    const [openMenu, setOpenMenu] = useState({ type: null, index: null });

  const currentActions = ["Delete"]; 

  useEffect(() => {
    axios.get('http://localhost:8080/api/requests')
      .then(response => {
        const filtered = response.data.filter(request => request.sender.id === Number(userId));
        setUserRequests(filtered);
      })
      .catch(error => console.error('Error fetching request:', error));
  }, []);

  const handleMenu = (type, idx) => {
    setOpenMenu(
      openMenu.type === type && openMenu.index === idx
        ? { type: null, index: null }
        : { type, index: idx }
    );
  };

  const handleActionClick = (action, req) => {
    if (action === "Mark as Complete") {
      // write a code
    } else if (action === "Edit") {
      // write a code
    } else if (action === "Delete") {
      axios.delete(`http://localhost:8080/api/requests/${req.id}`)
        .then(() => {
          setUserRequests(prev => prev.filter(service => service.id !== req.id));
          alert("Service deleted successfully!");
        })
        .catch(error => console.error('Error deleting service:', error));
    }
  };


  return (
    <div className="container py-5">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">My request</li>
        </ol>
      </nav>

      {/* Table */}
      <table className="table table-bordered align-middle mb-5">
        <thead>
          <tr>
            <th>Request ID</th>
            <th>Service Title</th>
            <th>Type</th>
            <th>Service description</th>
            
            <th>Offered my service</th>
            <th>Proposed date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userRequests.map((req, idx) => (
            <tr key={req.id}>
              <td>{req.id}</td>
              <td>{req.service?.id + "-" + req.service?.serviceTitle}</td>
              <td>{req.service?.serviceType}</td>
              <td>{req.service?.description}</td>
              <td>{req.swapServiceId?.id + "-" + req.swapServiceId?.serviceTitle}</td>
              <td>{req.proposedDate?.split("T")[0]}</td>
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
    </div>
  );
}
 
export default Myrequests;