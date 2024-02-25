"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import {
  auth,
  googleProvider,
  facebookProvider,
} from "@/src/config/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { IoLogoGoogle } from "react-icons/io";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const [authData, setAuthData] = useState({
    email: "",
    password: "",
  });
  // console.log(auth?.currentUser);
  const router = useRouter();

  const handleAuthDataChange = (e) => {
    setAuthData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        authData.email,
        authData.password
      )
        .then(() => {
          toast.success("Account created successfully");
          router.push("/signIn");
        })
        .catch((err) =>
          toast.error("Couldn't create account. Please try again later.s")
        );
    } catch (error) {
      console.log(error);
      toast.error("Failed to create account. Please try again later.");

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

      console.log(res.user.emailVerified);
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
        <h2 className="font-semibold text-xl">New to IMGSCALER? Register</h2>
        <p>Sign up for image scalling and enhancing </p>
      </div>
      <div className="flex mb-4 justify-center max-sm:flex-col items-center gap-2">
        <button
          onClick={signInWithFacebook}
          className="btn w-full text-nowrap  flex justify-center items-center gap-2"
        >
          <span>
            <FaFacebookSquare />
          </span>
          sign Up With Facebook
        </button>
        <button
          onClick={signInWithGoogle}
          className="btn w-full text-nowrap flex justify-center items-center gap-2"
        >
          <span>
            <IoLogoGoogle />
          </span>
          sign Up With Google
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
            type="password"
            placeholder="Password"
            name="password"
            className="border-b w-full py-2 outline-none ring-0"
          />
          <button onClick={signUp} className="btn !px-24 max-sm:w-full">
            Register
          </button>
        </div>
      </div>
      <p className="mt-4">
        By signing up for an account you, agree to imgscaler’s{" "}
        <Link href={"/about"} className="text-primary font-semibold">
          Terms of use
        </Link>{" "}
        <br />
        Already have an account?{" "}
        <Link className="text-primary font-semibold" href={"/signIn"}>
          Log In
        </Link>
      </p>
    </section>
  );
};

export default SignUpPage;
