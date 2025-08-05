import "./globals.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

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
      </body>
    </html>
  );
}
