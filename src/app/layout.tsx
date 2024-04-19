
"use client"; // This is a client component 👈🏽


import type { Metadata } from "next";
import dynamic from 'next/dynamic';
import { Inter , Roboto_Mono} from "next/font/google";
import Header from "./components/Header";
import "./globals.css";



const inter = Inter({ subsets: ["latin"] });
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto_mono.className}>
        <header>
          <title>Jabir Chowdhury</title>
        </header>
        <Header />
        {children}
      </body>
    </html>
  );
}
