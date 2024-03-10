import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "@/components";


export const metadata: Metadata = {
  title: "Book Hub",
  description: "Discover the best books",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className="relative">
      <Navbar/>
        {children}
      <Footer/>
     </body>
    </html>
  );
}
 