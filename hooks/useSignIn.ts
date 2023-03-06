import { fetchJson } from "@/lib/api";
import { useMutation, useQueryClient } from "react-query";
import { User } from "@/lib/user";

interface SignInVariables {
  email: string;
  password: string;
}

const useSignIn = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation<User, Error, SignInVariables>(
    ({ email, password }) =>
      fetchJson(`/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
  );
  const signIn = async ({ email, password }: SignInVariables) => {
    try {
      const user = await mutation.mutateAsync({ email, password });
      queryClient.setQueryData("user", user);
      return true;
    } catch (err) {
      return false;
    }
  };
  return { signIn, isLoading: mutation.isLoading, isError: mutation.isError };
};

export default useSignIn;
