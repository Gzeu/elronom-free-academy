import { NavLink } from "react-router-dom";

const linkCls = ({ isActive }: { isActive: boolean }) =>
  "px-3 py-2 rounded-md text-sm font-medium " +
  (isActive ? "bg-white/10 text-white" : "text-gray-300 hover:text-white hover:bg-white/5");

export default function NavBar() {
  return (
    <nav className="w-full sticky top-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="text-white font-semibold">ELRONOM Free Academy</div>
        <div className="flex gap-1">
          <NavLink to="/" className={linkCls} end>Home</NavLink>
          <NavLink to="/lessons" className={linkCls}>Lessons</NavLink>
          <NavLink to="/wallet" className={linkCls}>Wallet</NavLink>
          <NavLink to="/community" className={linkCls}>Community</NavLink>
        </div>
      </div>
    </nav>
  );
}