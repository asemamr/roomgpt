import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
let title = "Dream Image Generator";
let description = "Generate your dream room in seconds.";
let ogimage = "https://roomgpt-demo.vercel.app/og-image.png";
let sitename = "roomGPT.io";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "./favicon.ico",
  },
  metadataBase: new URL("http://localhost:3001"),
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: "https://roomgpt-demo.vercel.app",
    siteName: sitename,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [ogimage],
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans bg-[#17181C] text-white max-w-6xl mx-auto`}>
        {children}
      </body>
    </html>
  );
}
