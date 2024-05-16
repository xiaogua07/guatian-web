import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "瓜 田",
  description: "瓜 田 有 只 鹿",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/qweather-icons@1.6.0/font/qweather-icons.css" />
        <Script src="https://at.alicdn.com/t/c/font_4535178_la6p58pta3.js" />
      </head>
      <body className={inter.className}>
        {children}
      </body>

    </html>
  );
}
