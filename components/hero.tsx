import Link from "next/link"

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-section min-h-screen flex items-center justify-center text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-900/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-900/5 blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="brush-border p-8 sm:p-12 md:p-16 bg-black/40 backdrop-blur-sm rounded-lg">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 font-cinzel">
            <span className="text-white">Little Pepe</span> <span className="text-blue-600">$LILPE</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-3xl mb-8 text-white font-light">
            The Premier <span className="text-blue-600">Little Pepe</span> Meme Token
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-12 max-w-4xl mx-auto text-gray-300 calligraphy leading-relaxed">
            Join the most sophisticated <span className="text-blue-600">meme coin community</span> where style meets
            substance.
            <br className="hidden sm:block" />
            Built on <span className="text-blue-600">Base network</span> for optimal performance and security.
          </p>

          {/* Token Stats */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 mb-12">
            <div className="bg-blue-900/20 border border-blue-600/30 px-4 sm:px-6 py-3 rounded-lg">
              <span className="text-white text-xs sm:text-sm block">Total Supply</span>
              <span className="text-blue-600 font-bold text-sm sm:text-lg">1,000,000,000 LILPE</span>
            </div>
            <div className="bg-black/30 border border-gray-600/30 px-4 sm:px-6 py-3 rounded-lg">
              <span className="text-white text-xs sm:text-sm block">Network</span>
              <span className="text-blue-600 font-bold text-sm sm:text-lg">Base</span>
            </div>
            <div className="bg-blue-900/20 border border-blue-600/30 px-4 sm:px-6 py-3 rounded-lg">
              <span className="text-white text-xs sm:text-sm block">Available On</span>
              <span className="text-blue-600 font-bold text-sm sm:text-lg">Ape Store</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <a
              href="https://ape.store/base/0x04620ac712a1cf6f42d3412b5d7a82d3b7148ab6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 sm:px-10 py-3 sm:py-4 font-cinzel font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 rounded-lg"
            >
              BUY $LILPE
            </a>
            <Link
              href="#about"
              className="zen-button text-blue-600 hover:text-blue-500 px-8 sm:px-10 py-3 sm:py-4 font-cinzel text-base sm:text-lg"
            >
              Learn More
            </Link>
            <Link
              href="#tokenomics"
              className="zen-button text-blue-600 hover:text-blue-500 px-8 sm:px-10 py-3 sm:py-4 font-cinzel text-base sm:text-lg"
            >
              Tokenomics
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
