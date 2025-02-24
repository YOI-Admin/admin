import { createAuthClient } from "better-auth/react";
import { env } from "~/env";

export const authClient = createAuthClient({
  baseURL: env.NEXT_PUBLIC_BETTER_AUTH_URL,
});

const signIn = async () => {
  const data = await authClient.signIn.social({
    provider: "discord",
  });
};
