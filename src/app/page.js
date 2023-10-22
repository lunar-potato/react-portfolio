import Image from 'next/image'
import HeroSection from './components/HeroSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#24273a] container mx-auto p-4">
      <HeroSection/>
    </main>
  )
}
