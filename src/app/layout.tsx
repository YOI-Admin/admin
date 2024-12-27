import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { TRPCReactProvider } from "~/trpc/react";
import NextAuthSessionProvider from "@/components/SessionProvider";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PostHogProvider } from "./providers";

export const metadata: Metadata = {
  title: "YOI Admin Dashboard",
  description: "The Youth Oceanic Initiative Admin Dashboard",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const themeColor = "#04328d";

  return (
    <html lang="en" className={GeistSans.variable} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content={themeColor} />
      </head>
      <body>
        <NextAuthSessionProvider>
          <PostHogProvider>
            <TRPCReactProvider>
              <SpeedInsights />
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                {children}
              </ThemeProvider>
            </TRPCReactProvider>
          </PostHogProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
