import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#24273a]">
      <Navbar />
      <div className="container px-12 py-4 mx-auto mt-24">
        <HeroSection />
      </div>
    </main>
  );
}
