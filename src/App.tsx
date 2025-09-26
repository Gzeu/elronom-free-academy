import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { LessonsPage } from './pages/LessonsPage'
import { CommunityPage } from './pages/CommunityPage'
import { WalletPage } from './pages/WalletPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/lessons" element={<LessonsPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/wallet" element={<WalletPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App