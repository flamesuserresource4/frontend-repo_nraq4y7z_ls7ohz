import { Rocket, User, LogIn, Settings } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-slate-900 to-slate-700 text-white shadow-sm">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">Atelier IA</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
            <a href="#workshop" className="hover:text-slate-900 transition-colors">Workshop</a>
            <a href="#studio" className="hover:text-slate-900 transition-colors">3D Studio</a>
            <a href="#ai" className="hover:text-slate-900 transition-colors">AI Rendering</a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
              <User className="h-4 w-4" /> Sign up
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white shadow hover:bg-slate-800">
              <LogIn className="h-4 w-4" /> Guest Login
            </button>
            <button className="ml-1 hidden rounded-lg p-2 hover:bg-slate-100 md:inline-flex">
              <Settings className="h-4 w-4 text-slate-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
