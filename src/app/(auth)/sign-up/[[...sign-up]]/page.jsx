import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className="flex justify-center items-center glassmorphism-auth h-screen w-full">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
