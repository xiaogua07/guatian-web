import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <script src="https://at.alicdn.com/t/c/font_4535178_anzvmn7ehbv.js"></script>
      </head>
      <body className={inter.className}>{children}</body>

    </html>
  );
}
