import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Lessons from "./pages/Lessons";
import Wallet from "./pages/Wallet";
import Community from "./pages/Community";

export default function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </div>
  );
}