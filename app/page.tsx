import HeroSlider from "../components/HeroSlider";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-primary mb-4 text-center">
        Welcome to <span className="text-rose-400">Sri Sakthi</span> Uniforms
      </h1>
      <p className="text-gray-700 text-lg text-center font-medium p-2">
        We are a leading manufacturer and wholesaler of all types of uniforms
        including school, corporate, hospital, hotel and more.
      </p>
      <HeroSlider></HeroSlider>
    </main>
  );
}
