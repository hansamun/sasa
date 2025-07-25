const Community = () => {
  const socialLinks = [
    {
      name: "Telegram",
      description: "Join our main community chat",
      url: "https://t.me/littlepepe",
      icon: "/icons/telegram-icon.webp",
    },
    {
      name: "Twitter",
      description: "Follow for latest updates",
      url: "https://twitter.com/littlepepe",
      icon: "/icons/twitter-icon.png",
    },
  ]

  return (
    <section id="community" className="py-16 sm:py-24 ink-splash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-heading text-2xl sm:text-4xl md:text-5xl font-bold mb-6 font-cinzel text-white">
            Join Our <span className="text-blue-600">Community</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-400 max-w-4xl mx-auto calligraphy leading-relaxed">
            Connect with <span className="text-blue-600">LILPE enthusiasts</span>, stay updated with the latest{" "}
            <span className="text-blue-600">developments</span>, and be part of the most engaging
            <span className="text-blue-600"> meme token community</span>.
          </p>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {socialLinks.map((social, index) => (
            <div
              key={index}
              className="bg-black p-6 sm:p-10 border border-blue-900/20 brush-stroke rounded-xl hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-center">
                <div className="bg-blue-600 p-3 sm:p-4 rounded-full inline-block mb-4 sm:mb-6">
                  <img src={social.icon || "/placeholder.svg"} alt={social.name} className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-cinzel text-white mb-3">{social.name}</h3>
                <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">{social.description}</p>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 font-cinzel font-bold rounded-lg transition-all duration-300 inline-block text-sm sm:text-base"
                >
                  Join {social.name}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Community Guidelines */}
        <div className="bg-black border border-blue-900/20 p-6 sm:p-10 brush-stroke rounded-xl">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 font-cinzel text-white text-center">
            Community <span className="text-blue-600">Guidelines</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h4 className="font-bold text-white mb-2 sm:mb-3 text-base sm:text-lg">
                Be <span className="text-blue-600">Respectful</span>
              </h4>
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                Treat all <span className="text-blue-600">community members</span> with respect and maintain a positive{" "}
                <span className="text-blue-600">environment</span> for everyone.
              </p>
              <h4 className="font-bold text-white mb-2 sm:mb-3 text-base sm:text-lg">
                Stay On <span className="text-blue-600">Topic</span>
              </h4>
              <p className="text-gray-300 text-sm sm:text-base">
                Keep discussions relevant to <span className="text-blue-600">LILPE</span> and the broader{" "}
                <span className="text-blue-600">cryptocurrency ecosystem</span>.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2 sm:mb-3 text-base sm:text-lg">
                No <span className="text-blue-600">Spam</span> or <span className="text-blue-600">Scams</span>
              </h4>
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                Avoid posting <span className="text-blue-600">spam</span>, promotional content, or suspicious{" "}
                <span className="text-blue-600">links</span> that could harm the community.
              </p>
              <h4 className="font-bold text-white mb-2 sm:mb-3 text-base sm:text-lg">
                Help <span className="text-blue-600">Others</span>
              </h4>
              <p className="text-gray-300 text-sm sm:text-base">
                Share <span className="text-blue-600">knowledge</span> and help newcomers understand the{" "}
                <span className="text-blue-600">LILPE ecosystem</span> and{" "}
                <span className="text-blue-600">cryptocurrency basics</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Community
