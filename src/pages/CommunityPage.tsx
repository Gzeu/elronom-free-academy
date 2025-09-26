export function CommunityPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gradient mb-4">Join Our Community</h1>
          <p className="text-xl text-gray-600">Connect, learn, and grow together</p>
        </div>
        
        <div className="card-gradient border border-white/20 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Discord Community Coming Soon!</h2>
          <p className="text-gray-600 mb-6">We're setting up:</p>
          
          <div className="space-y-4 text-left max-w-md mx-auto">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Community discussions</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Learning progress sharing</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Expert mentorship</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Trading challenges</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Achievement celebrations</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}