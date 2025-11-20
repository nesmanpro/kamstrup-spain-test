import { ApolloWrapper } from "@/lib/apolloClient";
// NextJS
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Toaster } from "sonner";

// Custom fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// metadata
export const metadata: Metadata = {
  title: "Pokemon App",
  description: "Technical test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col items-center`}
      >
        <NavBar />
        <ApolloWrapper>{children}</ApolloWrapper>
        <Toaster />
      </body>
    </html>
  );
}
