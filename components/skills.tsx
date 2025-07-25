import type React from "react"
import { Code, Palette, Globe, Database, Server, Cpu } from "lucide-react"

const SkillCategory = ({
  title,
  skills,
  icon: Icon,
}: {
  title: string
  skills: { name: string; level: number }[]
  icon: React.ElementType
}) => {
  return (
    <div className="bg-black p-6 border border-blue-900/20 brush-stroke">
      <div className="flex items-center mb-6">
        <Icon className="text-blue-600 mr-3" size={24} />
        <h3 className="text-xl font-bold font-cinzel">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="text-gray-300">{skill.name}</span>
              <span className="text-gray-400">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const Skills = () => {
  const skillCategories = [
    {
      title: "Meme Creation",
      icon: Code,
      skills: [
        { name: "Doge Expressions", level: 95 },
        { name: "Hat Positioning", level: 90 },
        { name: "Much Wow Timing", level: 85 },
        { name: "Viral Content", level: 90 },
      ],
    },
    {
      title: "Digital Art",
      icon: Palette,
      skills: [
        { name: "Cute Aesthetics", level: 80 },
        { name: "Color Coordination", level: 85 },
        { name: "Hat Design", level: 75 },
        { name: "Adorable Poses", level: 90 },
      ],
    },
    {
      title: "Social Media",
      icon: Globe,
      skills: [
        { name: "Viral Marketing", level: 85 },
        { name: "Community Building", level: 70 },
        { name: "Engagement Tactics", level: 75 },
        { name: "Trend Analysis", level: 80 },
      ],
    },
    {
      title: "Hat Sciences",
      icon: Server,
      skills: [
        { name: "Beanie Physics", level: 80 },
        { name: "Knit Patterns", level: 75 },
        { name: "Color Theory", level: 70 },
        { name: "Comfort Optimization", level: 65 },
      ],
    },
    {
      title: "Doge Wisdom",
      icon: Database,
      skills: [
        { name: "Ancient Memes", level: 75 },
        { name: "Shiba Psychology", level: 80 },
        { name: "Wow Philosophy", level: 85 },
        { name: "Internet Culture", level: 70 },
      ],
    },
    {
      title: "Technical Skills",
      icon: Cpu,
      skills: [
        { name: "Meme Generators", level: 90 },
        { name: "Image Editing", level: 65 },
        { name: "Content Management", level: 70 },
        { name: "Analytics", level: 75 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 ink-splash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-3xl md:text-4xl font-bold mb-16 font-cinzel text-center">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <SkillCategory key={category.title} title={category.title} skills={category.skills} icon={category.icon} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
