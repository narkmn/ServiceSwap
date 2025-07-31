

const ProfilePayment = () => {
  return (
    <div className="container-fluid">


      <div className="container">
        <div className="row m-4">
          {/* Payment Method */}
          <div className="col">
            <p className="h2 fst-italic">Payment Method</p>
            <form>
              <label htmlFor="cc" className="form-label mt-1">Credit Card Number</label>
              <input
                type="text"
                className="form-control"
                id="cc"
                name="cc"
                placeholder="1234 5678 9012 3456"
                maxLength="19"
                pattern="\d{4} ?\d{4} ?\d{4} ?\d{4}"
                required
              />

              <label htmlFor="expiry_date" className="form-label mt-1">Expiry Date</label>
              <input
                type="text"
                className="form-control"
                id="expiry_date"
                name="expiry_date"
                placeholder="MM/YY"
                maxLength="5"
                pattern="(0[1-9]|1[0-2])\/\d{2}"
                required
              />

              <label htmlFor="holder_name" className="form-label mt-1">Card Holder Name</label>
              <input
                type="text"
                name="holder_name"
                id="holder_name"
                className="form-control"
                required
              />
            </form>

            <hr />

            <p className="h2 fst-italic">Billing Address</p>
            <form>
              {/* Checkbox */}
              <div className="form-check mb-2">
                <input type="checkbox" className="form-check-input" id="checkbox" />
                <label className="form-check-label" htmlFor="checkbox">
                  Use My profile address for billing
                </label>
              </div>

              {/* Address fields */}
              <label htmlFor="address" className="form-label mt-1">Address</label>
              <input type="text" id="address" className="form-control" />

              <label htmlFor="city" className="form-label mt-1">City *</label>
              <input type="text" id="city" className="form-control" required />

              <label htmlFor="province" className="form-label mt-1">Province</label>
              <input type="text" id="province" className="form-control" required />

              <label htmlFor="postal_code" className="form-label mt-1">Postal Code *</label>
              <input type="text" id="postal_code" className="form-control" required />
            </form>
          </div>

          {/* Payment Summary */}
          <div className="col border-start ps-4">
            <p className="h2 fst-italic">Payment Summary</p>
            <div className="border p-3 rounded">
              <div className="d-flex justify-content-between">
                <p className="mb-1">Selected Plan</p>
                <p className="mb-1" id="userSelectedPlan">$0.00</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="mb-1">Price</p>
                <p className="mb-1" id="price">$0.00</p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p className="mb-1">Subtotal</p>
                <p className="mb-1" id="subtotal">$0.00</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="mb-1">Tax</p>
                <p className="mb-1" id="tax">$0.00</p>
              </div>
              <hr />
              <div className="d-flex justify-content-between fw-bold">
                <p className="mb-1">Grand Total</p>
                <p className="mb-1" id="grandTotal">$0.00</p>
              </div>
            </div>

            <div className="d-flex justify-content-center mt-2">
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePayment;
