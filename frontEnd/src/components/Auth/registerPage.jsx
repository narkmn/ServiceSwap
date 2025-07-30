const RegisterPage = () => {
  return (
    <div className="container-fluid">

      <div className="container">
        <form className="mx-auto" style={{ maxWidth: '500px' }}>
          <div className="h2 text-center mt-5">Create Your Account</div>

          <div>
            <label htmlFor="username" className="form-label mt-3">Username</label>
            <input type="text" className="form-control" id="username" />
          </div>

          <div>
            <label htmlFor="email" className="form-label mt-3">E-mail</label>
            <input type="email" className="form-control" id="email" placeholder="Email@xxx.com" />
          </div>

          <div>
            <label htmlFor="pswd" className="form-label mt-3">Password</label>
            <input type="password" className="form-control" id="pswd" placeholder="Enter your password here" />
          </div>

          <div>
            <label htmlFor="confirm_pswd" className="form-label mt-3">Confirm Password</label>
            <input type="password" className="form-control" id="confirm_pswd" placeholder="Re-enter your password" />
          </div>

          <div className="form-check mt-3">
            <input type="checkbox" className="form-check-input" id="checkbox" />
            <label className="form-check-label" htmlFor="checkbox">
              I accept Terms and Conditions and Privacy Policy
            </label>
          </div>

          <div className="d-flex justify-content-center mt-4">
            <button type="submit" className="btn btn-primary mx-2">Create Account</button>
            <button type="reset" className="btn btn-outline-secondary mx-2">Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;