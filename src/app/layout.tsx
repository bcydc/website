import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import "@/ui/styles/tailwind.css";
import Navbar from "@/ui/components/Navbar";

const plus = Plus_Jakarta_Sans({ subsets: ["latin"] });

const identity = {
  title: "British Columbia Youth Developer Collective",
  description:
    "A collective of over 300 high school students in British Columbia with a shared passion for computer science, software development, robotics, and technology.",
};

export const metadata: Metadata = {
  title: identity.title,
  description: identity.description,
  openGraph: {
    ...identity,
    url: "https://bcydc.ca",
    siteName: "BCYDC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://bcydc.ca/banners/embed.png" }],
  },
  twitter: {
    ...identity,
    card: "summary_large_image",
    images: ["https://bcydc.ca/banners/embed.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-g-900">
      <head>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.15.4/css/all.css"
        />
      </head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-JD2FNNVXTR" />
      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-JD2FNNVXTR');
          `}
      </Script>

      <body className={`${plus.className} bg-g-900`}>
        <div className="relative flex h-full w-full flex-col items-center overflow-y-hidden bg-g-900">
          <div className="flex h-full min-h-screen w-full max-w-[1024px] flex-col items-center px-4 md:w-[1024px] md:max-w-[1024px] md:px-0">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
