import Script from "next/script";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import "@/ui/tailwind.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

const identity = {
  title: "British Columbia Youth Developer Collective",
  description:
    "A collective of students from across BC who have a shared passion for computer science. We are creating more opportunities for passionate youth to excel, and improving the computer science field in all high schools around BC.",
};

export const metadata: Metadata = {
  ...identity,
  openGraph: {
    ...identity,
    url: "https://bcydc.ca",
    siteName: "BCYDC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://bcydc.ca/embed.png" }],
  },
  twitter: {
    ...identity,
    card: "summary_large_image",
    images: ["https://bcydc.ca/embed.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
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
      </body>
    </html>
  );
}
