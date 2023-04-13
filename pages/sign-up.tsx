import FormButton from "@/components/Buttons/FormButton";
import Input from "@/components/Input";
import Page from "@/components/Page";
import useSignUp from "@/hooks/useSignUp";
import formValidation from "@/utils/formValidation";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { itemVariants, parentVariants } from "@/lib/framerVariants";

const SignUp = () => {
  return (
    <Page title="Sign up |">
      <motion.section
        variants={parentVariants}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <motion.h1
          variants={itemVariants}
          className="text-center text-2xl font-semibold"
        >
          This is only demo application
        </motion.h1>
        <motion.h2 variants={itemVariants} className="mt-8 text-center text-xl">
          so it is not possible to register.
        </motion.h2>
        <motion.h3 variants={itemVariants} className="text-center text-lg">
          Instead, use the demo account below.
        </motion.h3>
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center mt-4"
        >
          <span>email: demo@teehouse.com</span>
          <span>password: Demo123</span>
        </motion.div>
      </motion.section>
    </Page>
  );
};

//working signup code below

// const SignUp = () => {
//   const emailRef = useRef<HTMLInputElement>(null);
//   const nameRef = useRef<HTMLInputElement>(null);
//   const pwdRef = useRef<HTMLInputElement>(null);
//   const repeatPwdRef = useRef<HTMLInputElement>(null);
//   const [error, setError] = useState<string | null>(null);
//   const router = useRouter();

//   const { signUp, isLoading, hookError } = useSignUp();

// const signUpHandler = async (e: React.FormEvent) => {
//   e.preventDefault();
//   const signUpData = {
//     email: emailRef.current!.value,
//     username: nameRef.current!.value,
//     password: pwdRef.current!.value,
//     passwordRepeat: repeatPwdRef.current!.value,
//   };
//   const { formIsValid, error } = formValidation(signUpData);
//   if (error) {
//     setError(error);
//   } else setError(null);
//   if (formIsValid) {
//     const { username, email, password } = signUpData;
//     const validSignUp = await signUp(username, email, password);
//     if (validSignUp) router.push("/");
//   }
// };

// return (
{
  /* <motion.div
        variants={list}
        initial="hidden"
        animate="show"
        exit="exit"
        className="max-w-[400px] mx-auto py-8 px-8 rounded bg-slate-100 shadow-xl"
      >
        <form onSubmit={signUpHandler}>
          <Input type="email" name="email" value={emailRef} />
          <Input type="text" name="name" value={nameRef} />
          <Input type="password" name="password" value={pwdRef} />
          <Input type="password" name="repeat password" value={repeatPwdRef} />
          {error && <p className="text-rose-700 text-center mt-2">{error}</p>}
          {hookError && (
            <p className="text-rose-700 text-center mt-2">
              Something went wrong
            </p>
          )}
          <FormButton
            text={`${isLoading ? "Signin up..." : "Sign Up"}`}
            disabled={isLoading}
          />
        </form>
      </motion.div> */
}
// </Page>
//   );
// };

export default SignUp;
