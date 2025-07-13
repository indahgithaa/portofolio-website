import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Putu Indah Githa Cahyani",
  description:
    "Personal portfolio of Putu Indah Githa Cahyani, a passionate Computer Science student based in Malang, Indonesia, focusing on building meaningful tech solutions.",
  icons: {
    icon: "/moon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link rel="icon" href="/moon.png" type="image/png" sizes="32x32" />
      </head>
      <body>{children}</body>
    </html>
  );
}
