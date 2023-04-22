import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile, } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import SingUpImage from "../assets/sing-up.png";
import Loading from '../components/Loading';
import SocialSignIn from '../components/SocialSignIn';
import { auth } from '../firebase.init';
const SingUP = () => {
  const [createUserWithEmailAndPassword, emailUser, emailUserLoading, emailUserError] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updatingError] = useUpdateProfile(auth);
    
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
    let errorElement;
    const navigate = useNavigate();
     const location = useLocation();
     const from = location.state?.from?.pathname || "/";
     useEffect(()=>{
      if (emailUser) {
       navigate(from,{replace:true});
     }
     },[emailUser, navigate,from])
     
     if (emailUserLoading || updating) {
       return <Loading />;
     }
     if (emailUserError || updatingError) {
       errorElement = <p className="text-red-500">{emailUserError?.message}</p>;
     }
  const onSubmit = async (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({displayName:name});

  };
  return (
    <div className="max-w-[1440px] mx-auto p-10">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="md:order-2">
          <h2 className="text-xl md:text-2xl font-bold text-primary text-center m-5">
            Sing up
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                autoComplete="off"
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
            <button className="btn btn-primary">Sing Up</button>
          </form>
          <SocialSignIn />
        </div>
        {/* image */}
        <div>
          <img src={SingUpImage} alt="singUpImage" />
        </div>
      </div>
    </div>
  );
};

export default SingUP;