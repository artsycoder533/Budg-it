import React, { useEffect } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../utilities/firebase";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {
  const [user, loading] = useAuthState(auth);
  //sign in with google
  const googleProvider = new GoogleAuthProvider();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/assessment");
    }
  }, [user]);

  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      if (result.user) router.push("/assessment");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sm:container mx-auto flex flex-col items-center border">
      <h2>Sign In</h2>
      <div className="flex flex-col gap-2">
        <button
          onClick={googleLogin}
          className="border py-2 px-4 flex items-center justify-center gap-2 rounded-md">
          <FcGoogle /> Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
