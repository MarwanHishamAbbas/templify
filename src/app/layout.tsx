import "~/styles/globals.css";
import { Urbanist } from "next/font/google";
import { TRPCReactProvider } from "~/trpc/react";
import Navbar from "~/components/layout/Navbar";
import SideBar from "~/components/layout/SideBar";
import { Toaster } from "~/components/ui/sonner";
import Layout from "~/components/layout/Layout";
import { type Metadata } from "next";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Templify",
  description:
    "With a team of dedicated professionals who are passionate about crafting online experiences, we're here to elevate your online presence and bring your vision to life.",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${urbanist.variable} `}>
        <TRPCReactProvider>
          <div className=" mx-auto max-w-[1360px] space-y-6 px-3 py-10">
            <Navbar />
            <div className=" flex gap-6">
              <SideBar />
              <Layout>{children}</Layout>
            </div>
            <Toaster />
          </div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
