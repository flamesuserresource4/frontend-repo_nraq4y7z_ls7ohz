import { useState } from 'react';
import { Menu, X, Home } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-slate-900/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-rose-500 text-white">
              <Home className="h-5 w-5" />
            </span>
            <span>Atelier IA</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-600 dark:text-slate-300 md:flex">
            <a href="#features" className="transition hover:text-slate-900 dark:hover:text-white">Capabilities</a>
            <a href="#showcase" className="transition hover:text-slate-900 dark:hover:text-white">Showcase</a>
            <a href="#pricing" className="transition hover:text-slate-900 dark:hover:text-white">Pricing</a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800">Sign in</a>
            <a href="#get-started" className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 dark:bg-white dark:text-slate-900">Get started</a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-black/5 md:hidden dark:border-white/10">
          <div className="space-y-3 px-4 py-4 text-slate-700 dark:text-slate-200">
            <a href="#features" className="block">Capabilities</a>
            <a href="#showcase" className="block">Showcase</a>
            <a href="#pricing" className="block">Pricing</a>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800">Sign in</a>
              <a href="#get-started" className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white dark:bg-white dark:text-slate-900">Get started</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
