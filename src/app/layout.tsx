import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/globals.scss";
const mont = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meet Majevadiya",
  description: "Personal portfolio of Meet Majevadiya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mont.variable}`}>{children}</body>
    </html>
  );
}
