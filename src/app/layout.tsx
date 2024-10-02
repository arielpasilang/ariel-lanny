import type { Metadata } from "next";
import { Arizonia, EB_Garamond } from "@next/font/google";

import "./globals.css";

const arizonia = Arizonia({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-arizonia",
});

const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-eb-garamond",
});

export const metadata: Metadata = {
  title: "Ariel and Lanny Wedding",
  description:
    "Family, Relative and Friends - See you all this October 12, 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${eb_garamond.variable} ${arizonia.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
