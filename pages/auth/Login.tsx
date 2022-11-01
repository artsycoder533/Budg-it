import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../utilities/firebase';

const Login = () => {
  //sign in with google
  const googleProvider = new GoogleAuthProvider();

  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      console.log(result.user);
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
        <button onClick={googleLogin} className="bg-gray-600 text-white py-2">Sign in with Google</button>
      </div>
    </div>
  )
}

export default Login