import React from "react";
import { useForm } from "react-hook-form";
import SignInImage from "../assets/sign-in.png";

const SignIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    console.log(email, password);
  };
  return (
    <div className="max-w-[1440px] mx-auto p-10">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="md:order-2">
          <h2 className="text-xl md:text-2xl font-bold text-primary text-center m-5">
            Sing up
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
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
            {/*  password */}
            <div className="form-control w-full">
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  maxLength: {
                    value: 8,
                    message: "Maximum length is 8",
                  },
                })}
                type="password"
                placeholder="Your password"
                className="input input-bordered input-primary w-full"
              />
              <label className="label">
                {errors?.password?.type === "required" && (
                  <small className="text-red-500">
                    {errors?.password?.message}
                  </small>
                )}
                {errors?.password?.type === "maxLength" && (
                  <small className="text-red-500">
                    {errors?.password?.message}
                  </small>
                )}
              </label>
            </div>

            <button className="btn btn-primary">Sing Up</button>
          </form>
        </div>
        {/* image */}
        <div className="">
          <img src={SignInImage} alt="signInImage" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
