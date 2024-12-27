import Link from "next/link";
import { LatestPost } from "@/components/post";
import { auth } from "~/server/auth";
import Image from "next/image";
import { LoginForm } from "@/components/pre-login/login-form";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (!session) {
    return (
      <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
        <div className="flex w-full max-w-sm flex-col gap-6">
          <a
            href="#"
            className="flex items-center gap-2 self-center font-medium"
          >
            <Image
              src="/yoi_favicon.png"
              alt="YOI Favicon"
              width="24"
              height="24"
            />
            The Youth Oceanic Initiative
          </a>
          <LoginForm />
        </div>
      </div>
    );
  }

  redirect("/admin");
  return null;
}
