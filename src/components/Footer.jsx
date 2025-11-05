export default function Footer() {
  return (
    <footer className="bg-white/60 backdrop-blur border-t border-black/5 dark:bg-slate-900/60 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 py-10 text-sm text-slate-600 dark:text-slate-300 sm:flex-row">
          <p>© {new Date().getFullYear()} Atelier IA. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">Privacy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">Terms</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
