import Hero from "@/components/hero"
import About from "@/components/about"
import Philosophy from "@/components/philosophy"
import Buy from "@/components/buy"
import Community from "@/components/community"
import Roadmap from "@/components/roadmap"
import Tokenomics from "@/components/tokenomics"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Philosophy />
      <Buy />
      <Community />
      <Roadmap />
      <Tokenomics />
    </div>
  )
}
