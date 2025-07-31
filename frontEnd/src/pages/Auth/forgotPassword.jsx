const ForgotPassword = () => {
  return (
    <div>

      {/* Main Content */}
      <div className="container">
        <h1 className="text-center m-4">Reset Your Password</h1>

        <form className="mx-auto" style={{ maxWidth: "400px" }}>
          {/* Username */}
          <div className="row mb-3 align-items-center">
            <label htmlFor="username" className="col-sm-4 col-form-label">Username</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" id="username" required />
            </div>
          </div>

          {/* Email */}
          <div className="row mb-3 align-items-center">
            <label htmlFor="email" className="col-sm-4 col-form-label">E-mail</label>
            <div className="col-sm-8">
              <input type="email" className="form-control" id="email" required />
            </div>
          </div>

          {/* Info Message */}
          <p className="text-muted text-center">
            We will send a temporary password to your email.<br />
            Please use it to log in and update your password from your profile.
          </p>

          {/* Submit Button */}
          <div className="d-flex justify-content-center mt-3">
            <button type="submit" className="btn btn-primary w-100">Send Temporary Password</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
