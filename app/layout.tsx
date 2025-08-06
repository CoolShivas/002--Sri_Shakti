import "./globals.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Sri Sakthi Uniforms",
  description: "Uniform manufacturer in Tamil Nadu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Navbar />
        <main className="min-h-screen bg-white">{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
