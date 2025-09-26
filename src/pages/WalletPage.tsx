export function WalletPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gradient mb-4">Wallet Practice</h1>
          <p className="text-xl text-gray-600">Learn with MultiversX testnet - safe environment</p>
        </div>
        
        <div className="card-gradient border border-white/20 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Testnet Integration Coming Soon!</h2>
          <p className="text-gray-600 mb-6">Practice with:</p>
          
          <div className="space-y-4 text-left max-w-md mx-auto">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-multiversx-500 rounded-full"></div>
              <span>xPortal wallet connection</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-multiversx-500 rounded-full"></div>
              <span>Testnet EGLD transactions</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-multiversx-500 rounded-full"></div>
              <span>Smart contract interactions</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-multiversx-500 rounded-full"></div>
              <span>Paper trading simulator</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-multiversx-500 rounded-full"></div>
              <span>Educational NFT rewards</span>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              🔒 <strong>Safe Learning:</strong> All practice happens on testnet with fake tokens. 
              Your real funds are never at risk.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}