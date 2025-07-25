import { PieChart, Lock, Users, Heart, Zap } from "lucide-react"

const Tokenomics = () => {
  const tokenInfo = {
    name: "Little Pepe",
    symbol: "LILPE",
    totalSupply: "1,000,000,000",
    network: "Base",
    contractAddress: "Coming Soon...",
    listedOn: "Ape Store",
  }

  return (
    <section id="tokenomics" className="py-16 sm:py-24 ink-splash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-heading text-2xl sm:text-4xl md:text-5xl font-bold mb-6 font-cinzel text-white">
            <span className="text-blue-600">Tokenomics</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-400 max-w-4xl mx-auto calligraphy leading-relaxed">
            Transparent and sustainable <span className="text-blue-600">token distribution</span> designed to reward our{" "}
            <span className="text-blue-600">community</span> and ensure long-term{" "}
            <span className="text-blue-600">project success</span> on the{" "}
            <span className="text-blue-600">Base network</span>.
          </p>
        </div>

        {/* Token Information */}
        <div className="mb-12 sm:mb-16 bg-blue-900/20 border border-blue-600/30 p-6 sm:p-10 brush-stroke rounded-xl">
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <PieChart className="text-blue-600 mr-4" size={40} />
            <h3 className="text-xl sm:text-3xl font-bold font-cinzel text-white">
              Token <span className="text-blue-600">Information</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center bg-black/30 p-4 sm:p-6 rounded-lg">
              <p className="text-white mb-2">Token Name</p>
              <p className="text-blue-600 font-bold font-cinzel text-lg sm:text-xl">{tokenInfo.name}</p>
            </div>
            <div className="text-center bg-black/30 p-4 sm:p-6 rounded-lg">
              <p className="text-white mb-2">Symbol</p>
              <p className="text-blue-600 font-bold font-cinzel text-lg sm:text-xl">{tokenInfo.symbol}</p>
            </div>
            <div className="text-center bg-black/30 p-4 sm:p-6 rounded-lg">
              <p className="text-white mb-2">Total Supply</p>
              <p className="text-blue-600 font-bold text-lg sm:text-xl">{tokenInfo.totalSupply}</p>
            </div>
            <div className="text-center bg-black/30 p-4 sm:p-6 rounded-lg">
              <p className="text-white mb-2">Network</p>
              <p className="text-blue-600 font-bold text-lg sm:text-xl">{tokenInfo.network}</p>
            </div>
            <div className="text-center bg-black/30 p-4 sm:p-6 rounded-lg md:col-span-2">
              <p className="text-white mb-2">Available On</p>
              <p className="text-blue-600 font-bold text-lg sm:text-xl">{tokenInfo.listedOn}</p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-black border border-blue-900/20 p-6 sm:p-10 brush-stroke rounded-xl">
          <h3 className="text-xl sm:text-3xl font-bold mb-6 sm:mb-8 font-cinzel text-white text-center">
            Key <span className="text-blue-600">Features</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="flex items-start">
              <Lock className="text-blue-600 mr-4 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-white mb-2 text-base sm:text-lg">
                  Locked <span className="text-blue-600">Liquidity Forever</span>
                </h4>
                <p className="text-gray-300 text-sm sm:text-base">
                  <span className="text-blue-600">Liquidity</span> locked <span className="text-blue-600">forever</span>{" "}
                  to ensure project <span className="text-blue-600">stability</span> and investor{" "}
                  <span className="text-blue-600">confidence</span>.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Users className="text-blue-600 mr-4 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-white mb-2 text-base sm:text-lg">
                  Community <span className="text-blue-600">Driven</span>
                </h4>
                <p className="text-gray-300 text-sm sm:text-base">
                  <span className="text-blue-600">Token distribution</span> designed to reward{" "}
                  <span className="text-blue-600">community participation</span> and{" "}
                  <span className="text-blue-600">ecosystem growth</span>.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Heart className="text-blue-600 mr-4 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-white mb-2 text-base sm:text-lg">
                  Charitable <span className="text-blue-600">Impact</span>
                </h4>
                <p className="text-gray-300 text-sm sm:text-base">
                  Portion allocated to <span className="text-blue-600">animal welfare</span> and{" "}
                  <span className="text-blue-600">charitable causes</span> that align with our values.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Zap className="text-blue-600 mr-4 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-white mb-2 text-base sm:text-lg">
                  <span className="text-blue-600">Base</span> Network
                </h4>
                <p className="text-gray-300 text-sm sm:text-base">
                  Built on <span className="text-blue-600">Base</span> for fast, secure, and{" "}
                  <span className="text-blue-600">cost-effective transactions</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tokenomics
