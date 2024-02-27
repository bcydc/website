import Script from "next/script";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import "@/ui/styles/tailwind.css";
import Navbar from "@/ui/components/Navbar";

const plus = Plus_Jakarta_Sans({ subsets: ["latin"] });

const identity = {
  title: "British Columbia Youth Developer Collective",
  description:
    "A collective of over 120 high school students in British Columbia with a shared passion for computer science, software development, robotics, and technology.",
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
    <html lang="en">
      <body className={`${plus.className}`}>
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col items-center w-full min-h-screen md:max-w-[1536px] ">
            <Navbar />
            {children}
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-E9N10N52TY" />
            <Script id="google-analytics">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-E9N10N52TY');
              `}
            </Script>
          </div>
        </div>
      </body>
    </html>
  );
}
