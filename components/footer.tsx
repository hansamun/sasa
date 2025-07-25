import Link from "next/link"
import { ExternalLink } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-3xl font-bold font-cinzel text-blue-600">
              Little Pepe <span className="text-gray-300">$LILPE</span>
            </Link>
            <p className="mt-4 text-gray-400 calligraphy text-lg leading-relaxed">
              The premier Little Pepe meme token built on Base network. Join our community and be part of the future of
              decentralized finance.
            </p>
            <div className="mt-6 space-y-2 text-sm text-gray-500">
              <p>
                <span className="text-gray-400">Total Supply:</span>
                <span className="text-blue-600 font-bold ml-2">1,000,000,000 LILPE</span>
              </p>
              <p>
                <span className="text-gray-400">Network:</span>
                <span className="text-white font-bold ml-2">Base</span>
              </p>
              <p>
                <span className="text-gray-400">Available On:</span>
                <span className="text-blue-600 font-bold ml-2">Ape Store</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 font-cinzel text-gray-300">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-blue-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#buy" className="text-gray-400 hover:text-blue-600 transition-colors">
                  Buy LILPE
                </Link>
              </li>
              <li>
                <Link href="#community" className="text-gray-400 hover:text-blue-600 transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="#roadmap" className="text-gray-400 hover:text-blue-600 transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="#tokenomics" className="text-gray-400 hover:text-blue-600 transition-colors">
                  Tokenomics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 font-cinzel text-gray-300">Community</h3>
            <div className="space-y-4">
              <a
                href="https://t.me/littlepepebase"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-blue-600 transition-colors"
              >
                <img src="/icons/telegram-icon.webp" alt="Telegram" className="w-5 h-5 mr-3" />
                <span>Telegram</span>
                <ExternalLink size={16} className="ml-2" />
              </a>
              <a
                href="https://x.com/LittlePepeBase"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-blue-600 transition-colors"
              >
                <img src="/icons/twitter-icon.png" alt="Twitter" className="w-5 h-5 mr-3" />
                <span>Twitter</span>
                <ExternalLink size={16} className="ml-2" />
              </a>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-bold mb-4 font-cinzel text-gray-300">Newsletter</h4>
              <p className="text-gray-400 mb-4 text-sm">Subscribe for updates and announcements.</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow bg-black border border-blue-900/20 px-4 py-2 text-white focus:outline-none focus:border-blue-600 rounded-l-lg"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-900/10 text-center text-gray-500">
          <p>© {currentYear} Little Pepe $LILPE. All rights reserved.</p>
          <p className="mt-2 text-sm">Built on Base Network • Community Driven • Professionally Managed</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
