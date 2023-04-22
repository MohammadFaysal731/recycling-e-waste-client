import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    const name =data.name;
    const email =data.email;
    const phone =data.phone;
    const massage =data.massage;
   console.log(name, email,phone,massage);
  };
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
            <h2 className="card-title text-primary">Location</h2>
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4">
              {/* name */}
              <div className="form-control w-full">
                <input
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                  })}
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered input-primary w-full"
                />
                <label className="label">
                  {errors?.name?.type === "required" && (
                    <small className="text-red-500">
                      {errors?.name?.message}
                    </small>
                  )}
                </label>
              </div>
              {/* email */}
              <div className="form-control w-full">
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                  })}
                  type="email"
                  placeholder="Your email"
                  className="input input-bordered input-primary w-full"
                />
                <label className="label">
                  {errors?.email?.type === "required" && (
                    <small className="text-red-500">
                      {errors?.email?.message}
                    </small>
                  )}
                </label>
              </div>
            </div>
            {/*  phone */}
            <div className="form-control w-full">
              <input
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Phone number is required",
                  },
                  maxLength: {
                    value: 11,
                    message: "Maximum length is 11",
                  },
                })}
                type="number"
                placeholder="Your phone"
                className="input input-bordered input-primary w-full"
              />
              <label className="label">
                {errors?.phone?.type === "required" && (
                  <small className="text-red-500">
                    {errors?.phone?.message}
                  </small>
                )}
                {errors?.phone?.type === "maxLength" && (
                  <small className="text-red-500">
                    {errors?.phone?.message}
                  </small>
                )}
              </label>
            </div>
            {/* message */}
            <div className="form-control">
              <textarea
                {...register("massage", {
                  required: {
                    value: true,
                    message: "Massage number is required",
                  },
                  maxLength: {
                    value: 50,
                    message: "Massage length is 50",
                  },
                })}
                className="textarea textarea-primary h-24"
                placeholder="Massage"
              ></textarea>
              <label className="label">
                {errors?.massage?.type === "required" && (
                  <small className="text-red-500">
                    {errors?.massage?.message}
                  </small>
                )}
                {errors?.massage?.type === "maxLength" && (
                  <small className="text-red-500">
                    {errors?.massage?.message}
                  </small>
                )}{" "}
              </label>
            </div>
            <button className="btn btn-primary">Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
