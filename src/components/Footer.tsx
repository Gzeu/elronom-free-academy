import { Github, Twitter, MessageCircle } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-md border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">ELRONOM Free</h3>
            <p className="text-gray-600 text-sm">
              Free MultiversX Trading Academy. Learn blockchain, trading, and DeFi 
              through hands-on tutorials and community support.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/lessons" className="hover:text-blue-600">Free Lessons</a></li>
              <li><a href="/community" className="hover:text-blue-600">Community</a></li>
              <li><a href="https://multiversx.com" target="_blank" rel="noopener" className="hover:text-blue-600">MultiversX</a></li>
              <li><a href="https://github.com/Gzeu/elronom-free-academy" target="_blank" rel="noopener" className="hover:text-blue-600">Open Source</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/Gzeu/elronom-free-academy" target="_blank" rel="noopener" 
                 className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <Github className="w-5 h-5 text-gray-700" />
              </a>
              <a href="#" className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <Twitter className="w-5 h-5 text-gray-700" />
              </a>
              <a href="#" className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <MessageCircle className="w-5 h-5 text-gray-700" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-600">
          <p>&copy; 2025 ELRONOM Free Academy. Open source educational platform.</p>
        </div>
      </div>
    </footer>
  )
}