export function LessonsPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gradient mb-4">Interactive Lessons</h1>
          <p className="text-xl text-gray-600">Learn MultiversX blockchain and trading step by step</p>
        </div>
        
        <div className="card-gradient border border-white/20 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Coming Soon!</h2>
          <p className="text-gray-600 mb-6">We're preparing 40+ interactive lessons covering:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
            <div className="p-4 bg-white/50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Blockchain Basics</h3>
              <p className="text-sm text-gray-600">5 lessons covering fundamentals</p>
            </div>
            <div className="p-4 bg-white/50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">MultiversX Fundamentals</h3>
              <p className="text-sm text-gray-600">8 lessons on the ecosystem</p>
            </div>
            <div className="p-4 bg-white/50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Wallet Management</h3>
              <p className="text-sm text-gray-600">4 lessons on security</p>
            </div>
            <div className="p-4 bg-white/50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Trading Strategies</h3>
              <p className="text-sm text-gray-600">10 lessons on techniques</p>
            </div>
            <div className="p-4 bg-white/50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Smart Contracts</h3>
              <p className="text-sm text-gray-600">6 lessons on development</p>
            </div>
            <div className="p-4 bg-white/50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">DeFi on MultiversX</h3>
              <p className="text-sm text-gray-600">7 lessons on protocols</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}