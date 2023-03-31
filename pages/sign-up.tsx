import FormButton from "@/components/FormButton";
import Input from "@/components/Input";
import Page from "@/components/Page";
import useSignUp from "@/hooks/useSignUp";
import formValidation from "@/utils/formValidation";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { list } from "@/lib/framerMotion";

const SignUp = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const pwdRef = useRef<HTMLInputElement>(null);
  const repeatPwdRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const { signUp, isLoading, hookError } = useSignUp();

  const signUpHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const signUpData = {
      email: emailRef.current!.value,
      username: nameRef.current!.value,
      password: pwdRef.current!.value,
      passwordRepeat: repeatPwdRef.current!.value,
    };
    const { formIsValid, error } = formValidation(signUpData);
    if (error) {
      setError(error);
    } else setError(null);
    if (formIsValid) {
      const { username, email, password } = signUpData;
      const validSignUp = await signUp(username, email, password);
      if (validSignUp) router.push("/");
    }
  };

  return (
    <Page title="Sign up |">
      <motion.div
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
      </motion.div>
    </Page>
  );
};

export default SignUp;
