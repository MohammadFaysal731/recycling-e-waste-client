import React, { useEffect, useRef } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SignInImage from "../assets/sign-in.png";
import Loading from "../components/Loading";
import SocialSignIn from "../components/SocialSignIn";
import { auth } from "../firebase.init";
const SignIn = () => {
  const emailRef =useRef();
  const [signInWithEmailAndPassword, emailUser, emailUserLoading, emailUserError] =
    useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, sendingError] =
      useSendPasswordResetEmail(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();
  let errorElement;
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
    useEffect(()=>{
       if (emailUser) {
     navigate(from, { replace: true });
    } 
    },[emailUser, navigate,from])
  
    if (emailUserLoading || sending) {
      return <Loading />;
    }
    if (emailUserError || sendingError) {
      errorElement = <p className="text-red-500">{emailUserError?.message}</p>;
    }
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    signInWithEmailAndPassword(email, password);
    reset();
  };
  const forgetPassword=async ()=>{
    const email =emailRef.current.value;
    if(email){
      const success = await sendPasswordResetEmail(email)
      if(success){
         toast.success(`Successfully send email`);
      reset() 
      }
    }
    else{
      toast.error(`Failed to send email`)
    }
  }
  return (
    <div className="max-w-[1440px] mx-auto p-10">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="md:order-2">
          <h2 className="text-xl md:text-2xl font-bold text-primary text-center m-5">
            Sign In
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
                ref={emailRef}
                type="email"
                placeholder="Your email"
                autoComplete="off"
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
                autoComplete="off"
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
            {errorElement}
            <button className="btn btn-primary">Sing In</button>
          </form>
          <p
            onClick={forgetPassword}
            className="cursor-pointer flex justify-end md:text-lg font-bold text-primary"
          >
            Forget Password ?{" "}
          </p>
          <SocialSignIn />
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
