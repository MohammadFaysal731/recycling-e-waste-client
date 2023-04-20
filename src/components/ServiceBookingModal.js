import React from 'react';

const ServiceBookingModal = () => {
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id="service-booking-modal"
        className="modal-toggle"
      />
      <div className="modal sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="service-booking-modal"
            className="btn btn-sm btn-primary btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <form>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="# " className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
            </div>
            <div className="modal-action">
              <button className="btn btn-primary btn-xs">book now</button>
              <label
                htmlFor="service-booking-modal"
                className="btn btn-xs btn-primary"
              >
                Cancel
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceBookingModal;