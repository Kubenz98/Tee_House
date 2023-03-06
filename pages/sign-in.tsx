import { useRouter } from "next/router";
import FormButton from "@/components/FormButton";
import Input from "@/components/Input";
import { useRef } from "react";
import Page from "@/components/Page";
import useSignIn from "@/hooks/useSignIn";

const SignIn = () => {
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { signIn, isLoading, isError } = useSignIn();

  const signInHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;
    const valid = await signIn({ email, password });
    if (valid) router.push("/");
  };

  return (
    <Page title="Sign in |">
      <div className="max-w-[400px] mx-auto py-8 px-8 rounded bg-slate-100 shadow-xl">
        <form onSubmit={signInHandler}>
          <Input type="email" value={emailRef} />
          <Input type="password" value={passwordRef} />
          {isError && <p className="text-rose-700">Credentials error</p>}
          <FormButton
            text={`${isLoading ? "loading..." : "Sign In"}`}
            disabled={isLoading}
          />
        </form>
      </div>
    </Page>
  );
};

export default SignIn;
