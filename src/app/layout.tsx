import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "components/header";
import Footer from "components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        ></link>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  flex flex-col min-h-screen bg-custom-pearl text-black`}
      >
        <Header />
        <main className="flex flex-col flex-grow">{children}</main>
        <Footer />
      </body>
    </>
  );
}
