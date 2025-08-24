import "./globals.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import { ReactNode } from "react";
import { Providers } from "../app/redux/providers";

export const metadata = {
  title: "Sri Sakthi Uniforms",
  description: "Uniform manufacturer in Tamil Nadu",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Providers>
          <Header />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
