import { useRouter } from "next/router";
import FormButton from "@/components/Buttons/FormButton";
import Input from "@/components/Input";
import { useRef } from "react";
import Page from "@/components/Page";
import useSignIn from "@/hooks/useSignIn";
import Link from "next/link";
import { motion } from "framer-motion";
import { list } from "@/lib/framerVariants";

const SignIn = () => {
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { signIn, isLoading, isError } = useSignIn();

  const signInHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;
    const valid = await signIn(email, password);
    if (valid) router.push("/");
  };

  return (
    <Page title="Sign in |">
      <motion.div
        variants={list}
        initial="hidden"
        animate="show"
        exit="exit"
        className="max-w-[400px] mx-auto py-8 px-8 rounded bg-slate-100 shadow-xl dark:bg-neutral-700"
      >
        <form onSubmit={signInHandler}>
          <Input type="email" name="email" value={emailRef} initial="demo@teehouse.com" />
          <Input type="password" name="password" value={passwordRef} initial="Demo123" />
          {isError && (
            <p className="text-rose-700 text-center mt-2">Credentials error</p>
          )}
          <FormButton
            text={`${isLoading ? "Signin In..." : "Sign In"}`}
            disabled={isLoading}
          />
        </form>
        <Link
          href="/sign-up"
          className="block text-center mt-5 text-sm min-[360px]:text-base underline underline-offset-2 dark:text-zinc-200"
        >
          Click here to create new account!
        </Link>
      </motion.div>
    </Page>
  );
};

export default SignIn;
