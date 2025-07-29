import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="container">
      <div className="row align-items-center mt-3">
        <div className="col-sm-9 text-center">
          <img src="/images/welcome_page.jpg" className="img-fluid" alt="Welcome" />
        </div>
        <section className="col-sm-3 align-items-center text-center">
          <p>
            Discover a new way to exchange skills. Whether you're fixing a
            computer or mowing a lawn, help and be helped — fairly and simply.
          </p>
          <Link to="/register" className="btn btn-primary mb-3">Get Started</Link>
          <p>Already have an account?</p>
          <Link to="/login">Log in</Link>
        </section>
      </div>
    </div>
  );
}

export default Welcome;