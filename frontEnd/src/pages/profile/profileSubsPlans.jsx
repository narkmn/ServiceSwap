import { useNavigate } from 'react-router-dom';

const ProfileSubsPlans = () => {
  const navigate = useNavigate();

  const handlePlanSelect = (plan) => {
    console.log(`Selected plan: ${plan}`);
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="h1 text-center m-5">Find Your Perfect Plan</div>

        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-header text-center">Trial</div>
              <div className="card-body">
                <p>Try ServiceSwap free for 30 days!</p>
                <ul className="list-unstyled">
                  <li>&#10004; Exchange up to 3 services</li>
                  <li>&#10004; Offer up to 3 of your own skills</li>
                  <li>&#10004; Receive 3 time credits</li>
                </ul>
                <p>Perfect for exploring how skill-sharing works — no commitment needed.</p>
              </div>
              <div className="card-footer text-center">
                <button
                  className="btn btn-outline-primary"
                  onClick={() => handlePlanSelect('Trial')}
                >
                  Free
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-header text-center">Monthly</div>
              <div className="card-body">
                <p>Ideal for active users looking to exchange regularly.</p>
                <ul className="list-unstyled">
                  <li>&#10004; Exchange up to 10 services each month</li>
                  <li>&#10004; Offer up to 10 different services</li>
                  <li>&#10004; Receive 3 time credits every month</li>
                </ul>
                <p>Stay flexible and grow your skill network month by month.</p>
              </div>
              <div className="card-footer text-center">
                <button
                  className="btn btn-outline-primary"
                  onClick={() => handlePlanSelect('Monthly')}
                >
                  $9.99 / month
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-header text-center">Yearly</div>
              <div className="card-body">
                <p>Perfect for power users who want the best value.</p>
                <ul className="list-unstyled">
                  <li>&#10004; Unlimited service exchanges</li>
                  <li>&#10004; Unlimited services offered</li>
                  <li>&#10004; Receive 6 time credits every month</li>
                </ul>
                <p>Unlock the full potential of the ServiceSwap community all year long.</p>
              </div>
              <div className="card-footer text-center">
                <button
                  className="btn btn-outline-primary"
                  onClick={() => handlePlanSelect('Yearly')}
                >
                  $99 / year
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <button className="btn btn-secondary" onClick={() => navigate('/profile')}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSubsPlans;