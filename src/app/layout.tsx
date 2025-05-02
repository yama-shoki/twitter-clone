import { SideMenu } from "@/components/SideMenu";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Providers } from "./components/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "JStack Twitter Clone",
  description: "Twitter clone created using JStack",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="antialiased">
          <div className="flex min-h-screen">
            <SideMenu />
            <main className="flex-1 transition-all duration-300">
              <Providers>{children}</Providers>
            </main>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
