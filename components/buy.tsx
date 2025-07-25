"use client"

import { Copy, CheckCircle, ExternalLink, TrendingUp, ShoppingCart } from "lucide-react"
import { useState } from "react"

const Buy = () => {
  const [copied, setCopied] = useState(false)
  const contractAddress = "0x04620ac712a1cf6f42d3412b5d7a82d3b7148ab6"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="buy" className="py-16 sm:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-heading text-2xl sm:text-4xl md:text-5xl font-bold mb-6 font-cinzel text-white">
            How to Purchase <span className="text-blue-600">$LILPE</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-400 max-w-4xl mx-auto calligraphy leading-relaxed">
            Purchase <span className="text-blue-600">LILPE tokens</span> on{" "}
            <span className="text-blue-600">Ape Store</span> and track performance on{" "}
            <span className="text-blue-600">DexScreener</span>. Built on{" "}
            <span className="text-blue-600">Base network</span> for fast, low-cost transactions.
          </p>
        </div>

        {/* Token Information Card */}
        <div className="mb-12 sm:mb-16 bg-blue-900/20 border border-blue-600/30 p-6 sm:p-10 brush-stroke rounded-xl">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-3xl font-bold font-cinzel text-white mb-4">
              <span className="text-blue-600">Little Pepe $LILPE</span> Token
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 text-base sm:text-lg">
              <div className="bg-black/30 p-3 sm:p-4 rounded-lg">
                <span className="text-white block mb-2 text-sm sm:text-base">Token Symbol</span>
                <span className="text-blue-600 font-bold text-lg sm:text-xl">LILPE</span>
              </div>
              <div className="bg-black/30 p-3 sm:p-4 rounded-lg">
                <span className="text-white block mb-2 text-sm sm:text-base">Total Supply</span>
                <span className="text-blue-600 font-bold text-lg sm:text-xl">1,000,000,000</span>
              </div>
              <div className="bg-black/30 p-3 sm:p-4 rounded-lg">
                <span className="text-white block mb-2 text-sm sm:text-base">Network</span>
                <span className="text-blue-600 font-bold text-lg sm:text-xl">Base</span>
              </div>
            </div>
          </div>

          {/* Contract Address */}
          <div className="bg-black/50 border border-blue-900/30 p-4 sm:p-6 rounded-lg text-center">
            <p className="text-white mb-3 text-base sm:text-lg">Contract Address</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <code className="text-blue-600 font-mono text-sm sm:text-lg bg-blue-900/20 px-3 sm:px-4 py-2 rounded-lg break-all">
                {contractAddress}
              </code>
              <button
                onClick={copyToClipboard}
                className="p-2 sm:p-3 hover:bg-blue-900/20 rounded-lg transition-colors"
                title="Copy to clipboard"
              >
                {copied ? (
                  <CheckCircle size={20} className="text-blue-600" />
                ) : (
                  <Copy size={20} className="text-gray-400" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Trading Platforms */}
        <div className="mb-12 sm:mb-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Ape Store Trading */}
          <div className="bg-black border border-blue-900/20 p-6 sm:p-8 brush-stroke rounded-xl text-center">
            <div className="bg-blue-600 p-4 rounded-full inline-block mb-6">
              <ShoppingCart size={32} className="text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-cinzel text-white mb-4">
              Trade on <span className="text-blue-600">Ape Store</span>
            </h3>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              Buy and sell <span className="text-blue-600">LILPE tokens</span> directly on the premier{" "}
              <span className="text-blue-600">Base network</span> DEX.
            </p>
            <a
              href="https://ape.store/base/0x04620ac712a1cf6f42d3412b5d7a82d3b7148ab6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 font-cinzel font-bold text-sm sm:text-base rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              Trade Now
              <ExternalLink size={18} className="ml-2" />
            </a>
          </div>

          {/* DexScreener Charts */}
          <div className="bg-black border border-blue-900/20 p-6 sm:p-8 brush-stroke rounded-xl text-center">
            <div className="bg-green-600 p-4 rounded-full inline-block mb-6">
              <TrendingUp size={32} className="text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-cinzel text-white mb-4">
              View on <span className="text-green-400">DexScreener</span>
            </h3>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              Track <span className="text-blue-600">LILPE price</span>, volume, and market data with advanced{" "}
              <span className="text-green-400">charts and analytics</span>.
            </p>
            <a
              href="https://dexscreener.com/base/0x9E8D45af19539F711cd50E359dAae87E8F759399"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 font-cinzel font-bold text-sm sm:text-base rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              View Charts
              <ExternalLink size={18} className="ml-2" />
            </a>
          </div>
        </div>

        {/* Purchase Guide */}
        <div className="bg-black border border-blue-900/20 p-6 sm:p-10 brush-stroke rounded-xl">
          <h3 className="text-xl sm:text-3xl font-bold mb-6 sm:mb-8 font-cinzel text-white text-center">
            Purchase <span className="text-blue-600">Guide</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 font-bold text-lg sm:text-2xl">
                1
              </div>
              <h4 className="font-bold text-white mb-2 sm:mb-3 text-base sm:text-lg">
                Get <span className="text-blue-600">ETH</span>
              </h4>
              <p className="text-gray-300 text-sm sm:text-base">
                Purchase <span className="text-blue-600">ETH</span> from any major exchange and transfer to your{" "}
                <span className="text-blue-600">Base-compatible wallet</span>.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 font-bold text-lg sm:text-2xl">
                2
              </div>
              <h4 className="font-bold text-white mb-2 sm:mb-3 text-base sm:text-lg">
                Connect <span className="text-blue-600">Wallet</span>
              </h4>
              <p className="text-gray-300 text-sm sm:text-base">
                Connect your <span className="text-blue-600">MetaMask</span>,{" "}
                <span className="text-blue-600">Coinbase Wallet</span>, or other Base-compatible wallet to{" "}
                <span className="text-blue-600">Ape Store</span>.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 font-bold text-lg sm:text-2xl">
                3
              </div>
              <h4 className="font-bold text-white mb-2 sm:mb-3 text-base sm:text-lg">
                Swap <span className="text-blue-600">ETH</span>
              </h4>
              <p className="text-gray-300 text-sm sm:text-base">
                Use the <span className="text-blue-600">contract address</span> to find{" "}
                <span className="text-blue-600">LILPE</span> and swap your <span className="text-blue-600">ETH</span>{" "}
                for <span className="text-blue-600">LILPE tokens</span>.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 font-bold text-lg sm:text-2xl">
                4
              </div>
              <h4 className="font-bold text-white mb-2 sm:mb-3 text-base sm:text-lg">
                Track & <span className="text-blue-600">Hold</span>
              </h4>
              <p className="text-gray-300 text-sm sm:text-base">
                Monitor your investment on <span className="text-green-400">DexScreener</span> and participate in our
                growing <span className="text-blue-600">community</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Buy
