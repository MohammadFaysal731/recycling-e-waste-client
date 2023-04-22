import React, { useEffect } from 'react';
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../firebase.init';
import Loading from './Loading';
const SocialSignIn = () => {
  const [signInWithGoogle, googleUser, googleUserLoading, googleUserError] = useSignInWithGoogle(auth);
  let errorElement;
  const navigate=useNavigate();
  const location =useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(()=>{
   if(googleUser){
    navigate(from,{replace:true});
  } 
  },[googleUser, navigate,from])
  
  if(googleUserLoading){
    return <Loading/>
  }
  if(googleUserError){
    errorElement = <p className='text-red-500'>{googleUserError?.message}</p>
  }
  return (
    <div>
      {errorElement}
      <div className="flex flex-col w-full">
        <div className="divider">OR</div>
        <button onClick={() => signInWithGoogle()} className="btn btn-primary">
          <FcGoogle className="mx-2 text-3xl" /> Continue With Google
        </button>
      </div>
    </div>
  );
};

export default SocialSignIn;