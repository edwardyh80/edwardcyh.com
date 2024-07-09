import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { twMerge } from "tailwind-merge";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#020617",
};

export const metadata: Metadata = {
  title: {
    template: "%s | Edward Chow",
    default: "Edward Chow",
  },
  description:
    "Edward Chow is a Database Administrator who keeps critical data inside NoSQL databases intact and secure.",
  metadataBase: new URL("https://www.edwardcyh.com"),
  openGraph: {
    title: "Edward Chow",
    description:
      "Edward Chow is a Database Administrator who keeps critical data inside NoSQL databases intact and secure.",
    url: "https://www.edwardcyh.com",
    siteName: "Edward Chow",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body
      className={twMerge(
        inter.className,
        "min-h-screen min-w-96 scroll-smooth bg-primary-950 bg-gradient-to-br from-primary-950 to-secondary-950 text-primary-400 antialiased",
      )}
    >
      {children}
    </body>
  </html>
);

export default RootLayout;
