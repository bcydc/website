"use client";

import "react-notion-x/src/styles.css";
import { Plus_Jakarta_Sans } from "next/font/google";

import "@/ui/styles/notion.css";
import "@/ui/styles/tailwind.css";
import Navbar from "@/ui/components/Navbar";

const plus = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plus.className}`}>
        <div className="flex items-center flex-col w-full">
          <div className="flex px-8 flex-col items-center bg-notion-dark w-full">
            <div className="flex w-full max-w-[1536px]">
              <Navbar />
            </div>
          </div>
          <div className="w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
