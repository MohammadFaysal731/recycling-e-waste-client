import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <h2 className="text-xl md:text-2xl font-bold text-primary text-center m-5">
        Contact Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 p-10 ">
        <div className="mt-5">
          <div className="text-primary font-bold">
            <h2 className="text-4xl">Contact with the team</h2>
          </div>
          {/* location */}
          <div className="my-10">
            <h2 className="card-title text-primary">Location New Hyde</h2>
            <p>Dhaka Bangladesh</p>
          </div>
          {/* phone*/}
          <div className="my-10">
            <h2 className="card-title text-primary">Phone No</h2>
            <p>+88017 - 53 73 09 86</p>
          </div>
          {/* location */}
          <div className="my-10">
            <h2 className="card-title text-primary">Email</h2>
            <p>mohammadfaysal731@gamil.com</p>
          </div>
        </div>
        {/* contact form */}
        <div className="">
          <form>
            <div className="grid grid-cols-2 gap-4">
              <div className="form-control w-full">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full"
                />
                <label className="label">
                  <span className="label-text-alt">Bottom Left label</span>
                </label>
              </div>
              <div className="form-control w-full">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-primary w-full"
                />
                <label className="label">
                  <span className="label-text-alt">Bottom Left label</span>
                </label>
              </div>
            </div>

            <div className="form-control w-full">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-primary w-full"
              />
              <label className="label">
                <span className="label-text-alt">Bottom Left label</span>
              </label>
            </div>
            <div className="form-control w-full">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-primary w-full"
              />
              <label className="label">
                <span className="label-text-alt">Bottom Left label</span>
              </label>
            </div>
            <div className="form-control">
              <textarea
                className="textarea textarea-primary h-24"
                placeholder="Bio"
              ></textarea>
              <label className="label">
                <span className="label-text-alt">Your bio</span>
              </label>
            </div>
            <button className='btn btn-primary'>Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;