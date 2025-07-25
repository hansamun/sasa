import type React from "react"
import { Feather, Compass, Moon, Sun } from "lucide-react"

const PhilosophyCard = ({
  title,
  description,
  icon: Icon,
}: {
  title: string
  description: string
  icon: React.ElementType
}) => {
  return (
    <div className="bg-black p-4 sm:p-6 border border-blue-900/20 brush-stroke rounded-lg">
      <div className="flex items-center mb-4">
        <Icon className="text-blue-600 mr-3" size={24} />
        <h3 className="text-lg sm:text-xl font-bold font-cinzel text-white">{title}</h3>
      </div>
      <p className="text-gray-300 calligraphy text-sm sm:text-base leading-relaxed">{description}</p>
    </div>
  )
}

const Philosophy = () => {
  const philosophies = [
    {
      title: "Rare Pepe Wisdom",
      icon: Moon,
      description:
        "I approach each meme with a clear mind and pure Pepe energy. This allows me to see the true essence of 'rare' and create content that touches the soul.",
    },
    {
      title: "Feels Crafting",
      icon: Sun,
      description:
        "Like the perfect balance of rare feels, I balance humor with heart, creating memes that are both entertaining and meaningful.",
    },
    {
      title: "Constant Pepeing",
      icon: Feather,
      description:
        "I believe in continuous improvement of my meme game, constantly refining my expressions and perfecting the art of adorable content creation.",
    },
    {
      title: "True Pepe Way",
      icon: Compass,
      description:
        "In the vast internet landscape, I maintain the authentic spirit of Pepe wisdom, ensuring every meme serves the greater good of spreading joy.",
    },
  ]

  return (
    <section id="philosophy" className="py-16 sm:py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-6 font-cinzel text-center text-white">
          Little <span className="text-blue-600">Pepe Philosophy</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 sm:mb-16 max-w-3xl mx-auto calligraphy text-sm sm:text-base leading-relaxed">
          Inspired by the ancient wisdom of <span className="text-blue-600">Pepe</span> and the modern comfort of{" "}
          <span className="text-blue-600">rare memes</span>, I apply these principles to my
          <span className="text-blue-600"> meme craft</span>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {philosophies.map((philosophy) => (
            <PhilosophyCard
              key={philosophy.title}
              title={philosophy.title}
              description={philosophy.description}
              icon={philosophy.icon}
            />
          ))}
        </div>

        <div className="mt-12 sm:mt-16 p-6 sm:p-8 border border-blue-900/20 bg-black/50 text-center rounded-lg">
          <blockquote className="text-lg sm:text-xl italic text-gray-300 calligraphy">
            "Such <span className="text-blue-600">wisdom</span>, much <span className="text-blue-600">feels</span>, very{" "}
            <span className="text-blue-600">philosophy</span>. Wow."
            <footer className="text-white mt-4 font-cinzel text-sm sm:text-base">
              — <span className="text-blue-600">Ancient Pepe Proverb</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default Philosophy
