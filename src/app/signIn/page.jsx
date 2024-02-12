import Link from "next/link";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";

const SignInPage = () => {
  return (
    <section className="wrapper mt-32 text-center flex flex-col justify-center items-center">
      <div className="mb-8">
        <h2 className="font-semibold text-xl">Log In</h2>
        <p>Login and get creating. </p>
      </div>
      <div className="flex mb-4 justify-center items-center gap-2">
        <button className="btn flex justify-center items-center gap-2">
          <span>
            <FaFacebookSquare />
          </span>
          Log in With Facebook
        </button>
        <button className="btn flex justify-center items-center gap-2">
          <span>
            <IoLogoGoogle />
          </span>
          Log in With Facebook
        </button>
      </div>
      <p>Or</p>
      <div className="my-4  w-[800px]">
        <form action="" className="space-y-8">
          <input
            type="text"
            placeholder="Email"
            name="email"
            className="border-b w-full py-2 outline-none ring-0"
          />
          <br />
          <input
            type="text"
            placeholder="Password"
            name="password"
            className="border-b w-full py-2 outline-none ring-0"
          />
          <button className="btn !px-24">Login</button>
        </form>
      </div>
      <p className="mt-4">
        Don’t have an account?
        <Link href={"/signUp"} className="text-primary font-semibold">
          Sign up.
        </Link>
      </p>
    </section>
  );
};

export default SignInPage;
