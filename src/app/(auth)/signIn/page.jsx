"use client";

import React, { useState } from "react";
import {
  auth,
  googleProvider,
  facebookProvider,
} from "@/src/config/firebaseConfig";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import Cookies from "js-cookie";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const SignInPage = () => {
  const [authData, setAuthData] = useState({
    email: "",
    password: "",
  });
  // console.log(auth?.currentUser);
  const router = useRouter();

  const handleAuthDataChange = (e) => {
    setAuthData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, authData.email, authData.password)
        .then((res) => {
          toast.success("Successfully signed in with credential.");
          router.push("/");
          const accessToken = res.user.accessToken;
          Cookies.set("firebaseAuthToken", accessToken, {
            expires: 7,
            secure: true,
          });
          // localStorage.setItem("firebaseAuthToken", accessToken);
          console.log(accessToken);
        })
        .catch(() => toast.error("Invalid credentials."));
    } catch (error) {
      console.log(error);
      toast.error("Couldn't sign in with credentials. Please try again later.");
      throw error;
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
        .then(() => {
          toast.success("successfully signed in with google.");
          router.push("/");
        })
        .catch((err) =>
          toast.error("Couldn't sign in with google. Please try again later.")
        );
    } catch (error) {
      console.log(error);
      toast.error("Couldn't sign in with google. Please try again later.");

      throw error;
    }
  };

  const signInWithFacebook = async () => {
    try {
      await signInWithPopup(auth, facebookProvider)
        .then(() => {
          toast.success("successfully signed in with facebook.");
          router.push("/");
        })
        .catch((err) =>
          toast.error("Couldn't sign in with facebook. Please try again later.")
        );
    } catch (error) {
      console.log(error);
      toast.error("Couldn't sign in with facebook. Please try again later.");

      throw error;
    }
  };
  return (
    <section className="wrapper mt-32 text-center flex flex-col justify-center items-center">
      <div className="mb-8">
        <h2 className="font-semibold text-xl">Sign In</h2>
        <p>Login and get creating. </p>
      </div>
      <div className="flex mb-4 justify-center max-sm:flex-col items-center gap-2">
        <button
          onClick={signInWithFacebook}
          className="btn w-full   flex text-nowrap justify-center items-center gap-2"
        >
          <span>
            <FaFacebookSquare />
          </span>
          Log in With Facebook
        </button>
        <button
          onClick={signInWithGoogle}
          className="btn w-full flex text-nowrap justify-center items-center gap-2"
        >
          <span>
            <IoLogoGoogle />
          </span>
          Log in With Google
        </button>
      </div>
      <p>Or</p>
      <div className="my-4  max-w-[800px] w-full">
        <div className="space-y-8">
          <input
            onChange={handleAuthDataChange}
            type="text"
            placeholder="Email"
            name="email"
            className="border-b w-full py-2 outline-none ring-0"
          />
          <br />
          <input
            onChange={handleAuthDataChange}
            type="text"
            placeholder="Password"
            name="password"
            className="border-b w-full py-2 outline-none ring-0"
          />
          <button
            // type="submit"
            onClick={signIn}
            className="btn !px-24 max-sm:w-full"
          >
            Login
          </button>
        </div>
      </div>
      <p className="mt-4">
        Don’t have an account?{" "}
        <Link href={"/signUp"} className="text-primary font-semibold">
          Sign up.
        </Link>
      </p>
    </section>
  );
};

export default SignInPage;
