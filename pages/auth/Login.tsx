import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../utilities/firebase';
import { FcGoogle } from "react-icons/fc";
import { useRouter } from 'next/router';

const Login = () => {
  //sign in with google
  const googleProvider = new GoogleAuthProvider();
  const router = useRouter();

  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      if (result.user) router.push('/Dashboard');
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <h2>Join Today</h2>
      <div>
        <h3>Sign In</h3>
      </div>
      <div>
        <button
          onClick={googleLogin}
          className="bg-gray-600 text-white py-2 px-4 flex items-center justify-center gap-2 rounded-md">
          <FcGoogle/> Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default Login