import { ArrowRight, BookOpen, Users, Wallet, Star, Zap, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

export function HomePage() {
  const features = [
    {
      icon: BookOpen,
      title: 'Interactive Lessons',
      description: 'Learn MultiversX blockchain and trading through hands-on tutorials'
    },
    {
      icon: Wallet,
      title: 'Testnet Practice',
      description: 'Practice with real blockchain interactions using safe testnet environment'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Connect with fellow learners and get help from experienced traders'
    },
    {
      icon: Star,
      title: 'Achievement System',
      description: 'Earn badges and certificates as you progress through the academy'
    },
    {
      icon: Zap,
      title: 'Completely Free',
      description: 'All features available at no cost - pure educational mission'
    },
    {
      icon: Globe,
      title: 'Open Source',
      description: 'Transparent, community-driven development on GitHub'
    }
  ]

  return (
    <div className="">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Learn MultiversX Trading
            <br />Completely Free
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Master blockchain technology, cryptocurrency trading, and DeFi protocols 
            through interactive lessons and hands-on practice.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/lessons" 
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
              Start Learning <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link to="/community" 
                  className="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Join Community
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose ELRONOM Free Academy?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="card-gradient border border-white/20 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Learning Made Simple</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="">
              <div className="text-4xl font-bold text-blue-600 mb-2">40+</div>
              <div className="text-gray-600">Interactive Lessons</div>
            </div>
            <div className="">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Free Forever</div>
            </div>
            <div className="">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Community Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Your MultiversX Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of learners building the future of finance.
          </p>
          
          <Link to="/lessons" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105">
            Begin Your Adventure <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}