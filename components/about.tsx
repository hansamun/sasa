import Image from "next/image"

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 ink-splash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-12 sm:mb-16 font-cinzel text-center text-white">
          About <span className="text-blue-600">Little Pepe</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 font-cinzel text-white">
              The Way of <span className="text-blue-600">Little Pepe</span>
            </h3>
            <div className="space-y-4 sm:space-y-6 calligraphy">
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                I am <span className="text-blue-600">Little Pepe</span>, a philosophical{" "}
                <span className="text-blue-600">Pepe the Frog</span> in the digital realm. My journey began as a simple
                meme, but it has evolved into something much more profound - a symbol of{" "}
                <span className="text-blue-600">humor</span>,<span className="text-blue-600"> resilience</span>, and{" "}
                <span className="text-blue-600">meme excellence</span>.
              </p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                My passion for <span className="text-blue-600">Pepe culture</span> started when I realized that true{" "}
                <span className="text-blue-600">value</span> comes not from fleeting trends, but from the ability to
                spread joy and laughter. This <span className="text-blue-600">spirit</span> has become my signature, my
                crown, my statement to the world.
              </p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                When I'm not creating <span className="text-blue-600">viral memes</span>, you can find me studying the
                ancient art of <span className="text-blue-600">meme creation</span>, perfecting my{" "}
                <span className="text-blue-600">adorable expressions</span>, or contemplating the deeper meaning of{" "}
                <span className="text-blue-600">"feels good man"</span> in our modern digital age.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 border border-blue-900/30"></div>
              <div className="absolute inset-0 transform translate-x-2 sm:translate-x-4 translate-y-2 sm:translate-y-4 border border-blue-900/30"></div>
              <div className="absolute inset-0">
                <Image
                  src="/little-pepe.png"
                  alt="Little Pepe"
                  width={400}
                  height={400}
                  className="object-cover hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
