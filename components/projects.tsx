import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="project-card bg-black border border-blue-900/20 overflow-hidden brush-stroke">
      <div className="relative h-48 md:h-64">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 font-cinzel text-blue-600">{project.title}</h3>
        <p className="text-gray-400 mb-4 calligraphy">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs bg-blue-900/10 text-gray-300 px-2 py-1 border border-blue-900/20">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-blue-600 transition-colors"
            >
              <ExternalLink size={16} className="mr-1" /> Much View
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-blue-600 transition-colors"
            >
              <Github size={16} className="mr-1" /> Such Code
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Ultimate Hat Collection",
      description:
        "A comprehensive showcase of the finest knit beanies, featuring seasonal colors and premium comfort ratings for maximum doge satisfaction.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Hat Science", "Comfort Tech", "Style Guide", "Much Wow"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Meme Generator Supreme",
      description:
        "The most advanced doge meme creation tool, featuring authentic 'wow' expressions and perfectly timed comedic elements for viral success.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Meme Tech", "Viral Engine", "Doge AI", "Much Generate"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Shiba Wisdom Database",
      description:
        "An extensive collection of ancient doge wisdom and modern internet philosophy, curated for maximum enlightenment and entertainment.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Wisdom Tech", "Philosophy DB", "Ancient Memes", "Very Smart"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Cozy Vibes Simulator",
      description:
        "An immersive experience that captures the essence of wearing the perfect beanie, complete with warmth metrics and comfort analytics.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Comfort Sim", "Cozy Tech", "Warmth API", "Such Relax"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Viral Content Tracker",
      description:
        "A sophisticated analytics platform that monitors meme performance and predicts viral potential using advanced doge algorithms.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Analytics", "Viral Metrics", "Trend Analysis", "Much Data"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Hat Physics Engine",
      description:
        "A revolutionary simulation of beanie dynamics, modeling the perfect hat-to-head ratio for optimal cuteness and comfort.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Physics Engine", "Hat Dynamics", "Cuteness Math", "Very Science"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-3xl md:text-4xl font-bold mb-16 font-cinzel text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
