import React from "react";

const AboutUs = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">About Service Swap</h1>

      <div className="row mb-5">
        <div className="col-md-6">
          <img
            src="/images/about-us.jpg"
            alt="About Service Swap"
            className="img-fluid rounded shadow"
            style={{ width: '450px', height: '300px' }}
          />
        </div>
        <div className="col-md-6">
          <h3>Who We Are</h3>
          <p>
            Service Swap is a platform where people can exchange their skills
            and services without needing cash. Whether you’re a graphic
            designer, a dog walker, a math tutor, or a carpenter – you can offer
            your services in exchange for someone else’s.
          </p>
          <p>
            Our mission is to help communities build trust and save money while
            getting essential tasks done.
          </p>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-md-6 order-md-2">
          <img
            src="/images/our-mission.jpg"
            alt="Our Mission"
            className="img-fluid rounded shadow"
            style={{ width: '450px', height: '300px' }}
          />
        </div>
        <div className="col-md-6 order-md-1">
          <h3>Our Mission</h3>
          <p>
            We believe everyone has something to offer. By connecting users
            directly, Service Swap encourages collaboration, local growth, and
            fair exchange of talents.
          </p>
        </div>
      </div>

      <div className="text-center">
        <h3>Join Us Today</h3>
        <p className="lead">
          Start swapping your skills and make a real difference in your
          community.
        </p>
        <a href="/register" className="btn btn-primary px-4 py-2">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
