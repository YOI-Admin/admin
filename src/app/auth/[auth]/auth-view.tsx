"use client";

import { useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { AuthCard } from "@daveyplate/better-auth-ui";
import type { AuthToastOptions } from "@daveyplate/better-auth-ui";
import { authClient } from "@/lib/auth-client";

import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

export default function AuthView() {
  const router = useRouter();
  const pathname = usePathname();
  const { toast } = useToast();

  const redirectTo = "/";

  const authToast = useCallback(
    ({ variant, description, action }: AuthToastOptions) => {
      toast({
        variant,
        description,
        action: action && (
          <ToastAction altText={action.label} onClick={action.onClick}>
            {action.label}
          </ToastAction>
        ),
      });
    },
    [toast],
  );

  return (
    <main className="my-auto flex flex-col items-center p-4">
      {
        // https://github.com/daveyplate/better-auth-ui?tab=readme-ov-file#authcard-props
      }
      <AuthCard
        authClient={authClient}
        pathname={pathname}
        appRouter={router}
        emailPassword={false}
        providers={["discord"]}
        toast={authToast}
        redirectTo={redirectTo}
        LinkComponent={Link}
        disableAnimation={true}
        onSessionChange={() => router.refresh()}
      />
    </main>
  );
}
