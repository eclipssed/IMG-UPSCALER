import Link from "next/link";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";

const SignUpPage = () => {
  return (
    <section className="wrapper mt-32 text-center flex flex-col justify-center items-center">
      <div className="mb-8">
        <h2 className="font-semibold text-xl">New to IMGSCALER? Register</h2>
        <p>Sign up for image scalling and enhancing </p>
      </div>
      <div className="flex mb-4 justify-center items-center gap-2">
        <button className="btn flex justify-center items-center gap-2">
          <span>
            <FaFacebookSquare />
          </span>
          sign Up With Facebook
        </button>
        <button className="btn flex justify-center items-center gap-2">
          <span>
            <IoLogoGoogle />
          </span>
          sign Up With Facebook
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
          <button className="btn !px-24">Register</button>
        </form>
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
