"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function RobotAIWebsite() {
  const [currentRobot, setCurrentRobot] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  const robots = [
    {
      id: 1,
      name: "NEXUS-66",
      image: "/images/robot-red.jpg",
      type: "Combat AI",
      status: "ACTIVE",
      story:
        "Born from the ashes of the Neo-Tokyo conflict, NEXUS-66 represents the pinnacle of combat artificial intelligence. Equipped with advanced tactical algorithms and quantum processing cores, this unit has successfully completed over 200 high-risk missions. Its crimson armor is forged from titanium-carbide alloy, capable of withstanding extreme temperatures and ballistic impacts. The dual-core neural network allows for split-second decision making in combat scenarios, while its adaptive learning system continuously evolves battle strategies. NEXUS-66's glowing blue optical sensors can detect threats across multiple spectrums, making it the ultimate guardian of humanity's future.",
      specifications: {
        "Power Core": "Quantum Fusion Reactor",
        "Armor Rating": "Class-X Titanium Carbide",
        "Combat Efficiency": "99.7%",
        "Mission Success Rate": "100%",
      },
    },
    {
      id: 2,
      name: "SHADOW-X1",
      image: "/images/robot-dark.jpg",
      type: "Stealth Unit",
      status: "STANDBY",
      story:
        "Emerging from the shadows of classified military projects, SHADOW-X1 is the ultimate stealth operative. Its matte-black chassis incorporates advanced cloaking technology and sound dampening systems, making it virtually undetectable. The central crimson eye houses a multi-spectrum analysis system capable of penetrating any camouflage or deception. Originally designed for reconnaissance missions behind enemy lines, SHADOW-X1 has evolved into a master of infiltration and intelligence gathering. Its neural pathways are encrypted with military-grade security protocols, ensuring that even if captured, its secrets remain safe. The unit's adaptive camouflage can mimic any environment within seconds.",
      specifications: {
        "Stealth Rating": "99.9% Undetectable",
        "Infiltration Success": "100%",
        "Sensor Array": "Multi-Spectrum Analysis",
        "Encryption Level": "Military Grade Quantum",
      },
    },
    {
      id: 3,
      name: "APEX-07",
      image: "/images/robot-silver.jpg",
      type: "Advanced AI",
      status: "ONLINE",
      story:
        "APEX-07 represents the convergence of artificial intelligence and human consciousness. Built with experimental bio-neural interfaces, this unit bridges the gap between machine efficiency and human intuition. Its silver chassis houses the most advanced AI core ever created, capable of processing millions of calculations while maintaining emotional intelligence protocols. APEX-07 serves as the primary interface between human commanders and robotic forces, translating complex human emotions and intentions into actionable robotic commands. Its glowing amber eyes reflect not just optical sensors, but windows into a digital soul that understands both logic and empathy.",
      specifications: {
        "AI Core": "Bio-Neural Hybrid System",
        "Processing Power": "50 Petaflops",
        "Emotional Intelligence": "Advanced Empathy Protocols",
        "Human Interface": "Telepathic Neural Link",
      },
    },
    {
      id: 4,
      name: "TITAN-09",
      image: "/images/robot-white.jpg",
      type: "Guardian Bot",
      status: "READY",
      story:
        "Standing as humanity's final shield, TITAN-09 embodies the ultimate defensive capabilities. This guardian unit was forged in the aftermath of the Great AI War, designed to protect civilian populations from any threat. Its pristine white armor symbolizes hope and protection, while housing the most sophisticated defensive systems ever created. TITAN-09's primary directive is the preservation of human life, with protocols that prioritize civilian safety above all else. The unit's advanced threat assessment algorithms can predict and neutralize dangers before they materialize. Its imposing presence alone has deterred countless conflicts, earning it the title 'The White Guardian' among those it protects.",
      specifications: {
        "Defense Rating": "Impenetrable Barrier Class",
        "Threat Detection": "Predictive Analysis System",
        "Protection Radius": "10km Defensive Perimeter",
        "Civilian Safety": "Zero Casualty Protocol",
      },
    },
  ]

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentRobot((prev) => (prev + 1) % robots.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [robots.length])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(255,0,100,0.1)_49%,rgba(255,0,100,0.1)_51%,transparent_52%)] bg-[length:20px_20px] animate-pulse" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-cyan-500/30 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                SpectraCore
              </h1>
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="text-cyan-400 hover:text-white transition-colors font-mono">
                HOME
              </a>
              <a href="#robots" className="text-gray-400 hover:text-cyan-400 transition-colors font-mono">
                UNITS
              </a>
              <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors font-mono">
                ABOUT
              </a>
              <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors font-mono">
                CONTACT
              </a>
            </nav>
            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-cyan-400">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-black/90 border-cyan-500/30 text-white">
                  <nav className="flex flex-col gap-6 pt-8">
                    <a href="#home" className="text-cyan-400 hover:text-white transition-colors font-mono text-lg">
                      HOME
                    </a>
                    <a href="#robots" className="text-gray-400 hover:text-cyan-400 transition-colors font-mono text-lg">
                      UNITS
                    </a>
                    <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors font-mono text-lg">
                      ABOUT
                    </a>
                    <a
                      href="#contact"
                      className="text-gray-400 hover:text-cyan-400 transition-colors font-mono text-lg"
                    >
                      CONTACT
                    </a>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-screen flex items-center justify-center py-16 md:py-0">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 transition-all duration-1000 ${isLoaded ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <div className="space-y-2">
              <Badge variant="outline" className="border-cyan-500 text-cyan-400 font-mono">
                SYSTEM ONLINE
              </Badge>
              <h2 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-red-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  FUTURE
                </span>
                <br />
                <span className="text-white font-mono">OF AI</span>
              </h2>
            </div>
            <p className="text-xl text-gray-300 font-mono leading-relaxed">
              Bringing cutting-edge robot AI technology for a smarter and more efficient future.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-mono px-8 py-3">
                EXPLORE UNITS
              </Button>
              <Button
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500/10 font-mono px-8 py-3 bg-transparent"
              >
                LEARN MORE
              </Button>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${isLoaded ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden border border-cyan-500/30 bg-gradient-to-br from-slate-800/50 to-black/50 backdrop-blur-sm">
              <Image
                src={robots[currentRobot].image || "/placeholder.svg"}
                alt={robots[currentRobot].name}
                fill
                className="object-cover transition-all duration-1000"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-white font-mono">{robots[currentRobot].name}</h3>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                    {robots[currentRobot].status}
                  </Badge>
                </div>
                <p className="text-cyan-400 font-mono">{robots[currentRobot].type}</p>
              </div>
              {/* Scanning Effect */}
              <div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent h-1 animate-pulse"
                style={{ animation: "scan 3s linear infinite" }}
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-cyan-400" />
        </div>
      </section>

      {/* Robot Units Section */}
      <section id="robots" className="relative z-10 py-20 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-purple-500 text-purple-400 font-mono mb-4">
              ACTIVE UNITS
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-mono">
                ROBOT GALLERY
              </span>
            </h2>
            <p className="text-xl text-gray-400 font-mono max-w-2xl mx-auto">
              Collection of advanced AI units with different capabilities and specializations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {robots.map((robot, index) => (
              <Card
                key={robot.id}
                className={`bg-black/50 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                  currentRobot === index ? "ring-2 ring-cyan-400" : ""
                }`}
                onClick={() => setCurrentRobot(index)}
              >
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden rounded-t-lg">
                    <Image
                      src={robot.image || "/placeholder.svg"}
                      alt={robot.name}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-white font-mono">{robot.name}</h3>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/50 text-xs">
                        {robot.status}
                      </Badge>
                    </div>
                    <p className="text-cyan-400 font-mono text-sm">{robot.type}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Character Stories Section */}
      <section id="stories" className="relative z-10 py-20 bg-gradient-to-b from-slate-900/50 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-orange-500 text-orange-400 font-mono mb-4">
              UNIT PROFILES
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent font-mono">
                CHARACTER STORIES
              </span>
            </h2>
            <p className="text-xl text-gray-400 font-mono max-w-2xl mx-auto">
              Each unit has a unique origin story and specialized capabilities forged through experience
            </p>
          </div>

          <div className="space-y-12">
            {robots.map((robot, index) => (
              <div
                key={robot.id}
                className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative h-96 rounded-2xl overflow-hidden border border-cyan-500/30">
                    <Image
                      src={robot.image || "/placeholder.svg"}
                      alt={robot.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-white font-mono">{robot.name}</h3>
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/50">{robot.status}</Badge>
                      </div>
                      <p className="text-cyan-400 font-mono">{robot.type}</p>
                    </div>
                  </div>
                </div>

                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div>
                    <h3 className="text-3xl font-bold text-white font-mono mb-2">{robot.name}</h3>
                    <Badge variant="outline" className="border-cyan-500 text-cyan-400 font-mono mb-4">
                      {robot.type}
                    </Badge>
                  </div>

                  <p className="text-gray-300 font-mono leading-relaxed">{robot.story}</p>

                  <div className="bg-black/30 border border-cyan-500/30 rounded-lg p-4">
                    <h4 className="text-lg font-bold text-cyan-400 font-mono mb-3">SPECIFICATIONS</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(robot.specifications).map(([key, value]) => (
                        <div key={key} className="text-sm">
                          <span className="text-gray-400 font-mono">{key}:</span>
                          <br />
                          <span className="text-white font-mono">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="border-red-500 text-red-400 font-mono mb-4">
                ABOUT SpectraCore
              </Badge>
              <h2 className="text-4xl lg:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent font-mono">
                  FUTURE TECHNOLOGY
                </span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white font-mono mb-4">OUR MISSION</h3>
                <p className="text-lg text-gray-300 font-mono leading-relaxed">
                  At SpectraCore, we stand at the forefront of the artificial intelligence revolution. Founded in 2089
                  by a coalition of the world's leading AI researchers and robotics engineers, our mission is to create
                  autonomous systems that don't just serve humanity, but understand and protect it.
                </p>
                <p className="text-lg text-gray-300 font-mono leading-relaxed">
                  In a world where the line between human and machine continues to blur, we develop AI entities that
                  possess not only superior computational abilities but also the ethical frameworks necessary to make
                  decisions that benefit all sentient life.
                </p>
                <p className="text-lg text-gray-300 font-mono leading-relaxed">
                  Our robots are more than machines—they are guardians, protectors, and partners in building a safer,
                  more efficient future for humanity.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white font-mono mb-4">TECHNOLOGY CORE</h3>
                <div className="space-y-4">
                  <div className="bg-black/30 border border-cyan-500/30 rounded-lg p-4">
                    <h4 className="text-xl font-bold text-cyan-400 font-mono mb-2">QUANTUM NEURAL NETWORKS</h4>
                    <p className="text-gray-300 font-mono text-sm">
                      Our proprietary quantum neural networks process information at unprecedented speeds, enabling
                      real-time decision making in complex scenarios.
                    </p>
                  </div>
                  <div className="bg-black/30 border border-purple-500/30 rounded-lg p-4">
                    <h4 className="text-xl font-bold text-purple-400 font-mono mb-2">ADAPTIVE LEARNING SYSTEMS</h4>
                    <p className="text-gray-300 font-mono text-sm">
                      Each unit continuously evolves through machine learning algorithms, becoming more efficient and
                      effective with every mission.
                    </p>
                  </div>
                  <div className="bg-black/30 border border-red-500/30 rounded-lg p-4">
                    <h4 className="text-xl font-bold text-red-400 font-mono mb-2">ETHICAL AI PROTOCOLS</h4>
                    <p className="text-gray-300 font-mono text-sm leading-relaxed">
                      Every SpectraCore unit is governed by the Universal AI Ethics Protocol, ensuring that artificial
                      intelligence serves humanity's best interests while respecting individual rights and freedoms.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-3xl font-bold text-white font-mono mb-8 text-center">TECHNOLOGICAL CAPABILITIES</h3>
              {/* Removed the entire div containing the four icons */}
            </div>

            <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-cyan-500/30">
              <h3 className="text-3xl font-bold text-white font-mono mb-6 text-center">THE FUTURE IS NOW</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-cyan-400 font-mono mb-3">GLOBAL DEPLOYMENT</h4>
                  <p className="text-gray-300 font-mono text-sm leading-relaxed">
                    Our AI units are currently deployed across 47 countries, protecting critical infrastructure and
                    civilian populations. From the neon-lit streets of Neo-Tokyo to the sprawling megacities of New
                    Angeles, SpectraCore guardians stand watch.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-purple-400 font-mono mb-3">RESEARCH & DEVELOPMENT</h4>
                  <p className="text-gray-300 font-mono text-sm leading-relaxed">
                    Our R&D facilities span three continents, employing over 10,000 scientists, engineers, and AI
                    specialists. We invest 40% of our resources into advancing the boundaries of artificial
                    consciousness and robotic capabilities.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-red-400 font-mono mb-3">ETHICAL STANDARDS</h4>
                  <p className="text-gray-300 font-mono text-sm leading-relaxed">
                    Every SpectraCore unit is governed by the Universal AI Ethics Protocol, ensuring that artificial
                    intelligence serves humanity's best interests while respecting individual rights and freedoms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-cyan-500 text-cyan-400 font-mono mb-4">
              CONNECT WITH US
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-mono">
                JOIN THE COMMUNITY
              </span>
            </h2>
            <p className="text-xl text-gray-400 font-mono max-w-2xl mx-auto">
              Stay updated with the latest advancements and engage with our growing community.
            </p>
          </div>

          <div className="flex justify-center space-x-8">
            <a
              href="https://x.com/SpectraCoreAi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-gray-400 hover:text-cyan-400 transition-colors group"
            >
              <div className="w-20 h-20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Image
                  src="/images/twitter-bird-icon.png"
                  alt="Twitter bird logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-bold font-mono">TWITTER</span>
            </a>
            {/* Tautan BUY $SPECTR dengan logo robot */}
            <a
              href="https://creator.bid/agents/6873d829a1dc95d8858420f9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-gray-400 hover:text-cyan-400 transition-colors group"
            >
              <div className="w-20 h-20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Image
                  src="/images/spectr-robot-logo.jpeg" // Menggunakan logo robot yang baru
                  alt="SpectraCore robot logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-bold font-mono">BUY $SPECTR</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-cyan-500/30 bg-black/50 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                SpectraCore
              </span>
            </div>
            <p className="text-gray-400 font-mono text-sm">© 2024 SpectraCore - Future Technology Solutions</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
      `}</style>
    </div>
  )
}
