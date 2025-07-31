const ProfileAccountInfo = () => {
    return (
          <form className="mx-auto" style={{ maxWidth: '500px' }}>
            <div>
              <label htmlFor="username" className="form-label mt-3">Username</label>
              <input type="text" className="form-control" id="username" readOnly />
            </div>
            <div>
              <label htmlFor="email" className="form-label mt-3">E-mail</label>
              <input type="email" className="form-control" id="email" readOnly />
            </div>
            <div>
              <label htmlFor="pswd" className="form-label mt-3">Password</label>
              <input type="password" className="form-control" id="pswd" readOnly />
              <div className="d-flex justify-content-center mt-3">
                <button className="btn btn-outline-dark">Update Password</button>
              </div>
            </div>
          </form>
        ); 
}
 
export default ProfileAccountInfo;