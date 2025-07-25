import type React from "react"
import { CheckCircle, Circle, Clock, Rocket } from "lucide-react"

type RoadmapPhase = {
  id: number
  phase: string
  title: string
  description: string
  items: string[]
  status: "completed" | "current" | "upcoming"
  icon: React.ElementType
}

const PhaseCard = ({ phase }: { phase: RoadmapPhase }) => {
  const Icon = phase.icon
  const getStatusColor = () => {
    switch (phase.status) {
      case "completed":
        return "text-green-500 border-green-500/20 bg-green-900/10"
      case "current":
        return "text-blue-600 border-blue-600/20 bg-blue-900/10"
      case "upcoming":
        return "text-gray-400 border-gray-600/20 bg-gray-900/10"
      default:
        return "text-gray-400 border-gray-600/20 bg-gray-900/10"
    }
  }

  const getStatusIcon = () => {
    switch (phase.status) {
      case "completed":
        return <CheckCircle size={20} className="text-green-500" />
      case "current":
        return <Clock size={20} className="text-blue-600" />
      case "upcoming":
        return <Circle size={20} className="text-gray-400" />
      default:
        return <Circle size={20} className="text-gray-400" />
    }
  }

  return (
    <div className={`p-6 border brush-stroke ${getStatusColor()}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Icon className="mr-3" size={24} />
          <div>
            <h3 className="text-lg font-bold font-cinzel">{phase.phase}</h3>
            <h4 className="text-xl font-bold font-cinzel text-blue-600">{phase.title}</h4>
          </div>
        </div>
        {getStatusIcon()}
      </div>
      <p className="text-gray-300 mb-4 calligraphy">{phase.description}</p>
      <ul className="space-y-2">
        {phase.items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span className="text-gray-300 text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Roadmap = () => {
  const roadmapPhases: RoadmapPhase[] = [
    {
      id: 1,
      phase: "Phase 1",
      title: "Pepe Foundation",
      description: "Building the foundation for LILPE ecosystem with core features and community building.",
      items: [
        "Launch LILPE token",
        "Build initial community of Pepe enthusiasts",
        "Create official website and social media presence",
        "Establish partnerships with meme creators",
        "Launch community-driven meme contests",
      ],
      status: "completed",
      icon: Rocket,
    },
    {
      id: 2,
      phase: "Phase 2",
      title: "Much Growth",
      description: "Expanding the LILPE ecosystem with advanced features and broader market reach.",
      items: [
        "List on major decentralized exchanges",
        "Launch NFT collection featuring different Pepe styles",
        "Develop LILPE mobile app for meme creation",
        "Reach 10,000+ community members",
        "Implement staking rewards for Pepe holders",
      ],
      status: "current",
      icon: Clock,
    },
    {
      id: 3,
      phase: "Phase 3",
      title: "Pepe Metaverse",
      description: "Creating immersive experiences and expanding into the metaverse with virtual Pepe collections.",
      items: [
        "Launch LILPE metaverse world",
        "Virtual Pepe try-on experiences",
        "Cross-chain bridge implementation",
        "Partnership with major gaming platforms",
        "Launch LILPE DAO for community governance",
      ],
      status: "upcoming",
      icon: Circle,
    },
    {
      id: 4,
      phase: "Phase 4",
      title: "Global Domination",
      description: "Achieving worldwide recognition as the premier Pepe-wearing meme coin with real-world utility.",
      items: [
        "Physical merchandise store launch",
        "Celebrity endorsements and partnerships",
        "Integration with major e-commerce platforms",
        "Launch LILPE charity foundation",
        "Become the #1 Pepe-themed cryptocurrency",
      ],
      status: "upcoming",
      icon: Circle,
    },
  ]

  return (
    <section id="roadmap" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-3xl md:text-4xl font-bold mb-6 font-cinzel text-center">Roadmap</h2>
        <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto calligraphy">
          Our journey to becoming the most beloved Pepe-wearing meme coin in the crypto universe. Much roadmap, very
          plan, wow!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {roadmapPhases.map((phase) => (
            <PhaseCard key={phase.id} phase={phase} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-blue-900/10 border border-blue-600/20 px-6 py-3">
            <Rocket className="text-blue-600" size={24} />
            <span className="text-blue-600 font-cinzel font-bold">Current Phase: Much Growth</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Roadmap
