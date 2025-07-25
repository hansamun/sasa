import type React from "react"
import { GraduationCap, Award, BookOpen } from "lucide-react"

type Education = {
  id: number
  degree: string
  institution: string
  location: string
  period: string
  description: string
  icon: React.ElementType
}

type Certificate = {
  id: number
  title: string
  issuer: string
  date: string
  url?: string
}

const EducationCard = ({ item }: { item: Education }) => {
  const Icon = item.icon

  return (
    <div className="relative pl-8 pb-12 border-l border-blue-900/30">
      <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-900/80 rounded-full flex items-center justify-center">
        <Icon size={16} className="text-white" />
      </div>
      <div className="bg-black p-6 border border-blue-900/20 brush-stroke">
        <h3 className="text-xl font-bold mb-1 font-cinzel text-blue-600">{item.degree}</h3>
        <p className="text-gray-300 mb-2">
          {item.institution}, {item.location}
        </p>
        <p className="text-gray-400 mb-4 text-sm">{item.period}</p>
        <p className="text-gray-300 calligraphy">{item.description}</p>
      </div>
    </div>
  )
}

const CertificateCard = ({ certificate }: { certificate: Certificate }) => {
  return (
    <div className="bg-black p-6 border border-blue-900/20 brush-stroke">
      <h3 className="text-lg font-bold mb-1 font-cinzel text-blue-600">{certificate.title}</h3>
      <p className="text-gray-300 mb-2">{certificate.issuer}</p>
      <p className="text-gray-400 mb-4 text-sm">{certificate.date}</p>
      {certificate.url && (
        <a
          href={certificate.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-300 hover:text-blue-600 transition-colors underline"
        >
          Much Certificate
        </a>
      )}
    </div>
  )
}

const Education = () => {
  const educationItems: Education[] = [
    {
      id: 1,
      degree: "Master of Meme Sciences",
      institution: "University of Doge",
      location: "Internet",
      period: "2020 - 2022",
      description:
        "Advanced studies in viral content creation, hat aesthetics, and the philosophical implications of 'much wow' in modern digital culture.",
      icon: GraduationCap,
    },
    {
      id: 2,
      degree: "Bachelor of Hat Engineering",
      institution: "Shiba Institute of Technology",
      location: "Cyberspace",
      period: "2017 - 2020",
      description:
        "Comprehensive foundation in beanie physics, knit pattern optimization, and the mathematical principles of maximum cuteness achievement.",
      icon: BookOpen,
    },
    {
      id: 3,
      degree: "Diploma in Adorable Expressions",
      institution: "Doge Academy of Arts",
      location: "The Cloud",
      period: "2019",
      description:
        "Intensive program covering facial expression mastery, timing of comedic elements, and advanced techniques in heart-melting poses.",
      icon: Award,
    },
  ]

  const certificates: Certificate[] = [
    {
      id: 1,
      title: "Certified Meme Master",
      issuer: "Internet Meme Council",
      date: "2023",
      url: "#",
    },
    {
      id: 2,
      title: "Advanced Hat Styling",
      issuer: "Fashion Doge Institute",
      date: "2022",
      url: "#",
    },
    {
      id: 3,
      title: "Viral Content Creation",
      issuer: "Social Media Shiba Academy",
      date: "2021",
      url: "#",
    },
    {
      id: 4,
      title: "Ancient Doge Wisdom",
      issuer: "Elder Meme Society",
      date: "2024",
      url: "#",
    },
  ]

  return (
    <section id="education" className="py-20 ink-splash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-3xl md:text-4xl font-bold mb-16 font-cinzel text-center">
          Education & Certifications
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-8 font-cinzel text-blue-600">Academic Journey</h3>
            <div className="space-y-6">
              {educationItems.map((item) => (
                <EducationCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 font-cinzel text-blue-600">Certifications</h3>
            <div className="space-y-6">
              {certificates.map((certificate) => (
                <CertificateCard key={certificate.id} certificate={certificate} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
