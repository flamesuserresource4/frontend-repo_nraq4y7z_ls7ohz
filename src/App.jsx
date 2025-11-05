import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900 dark:from-slate-950 dark:to-slate-900 dark:text-white">
      <Header />

      <main>
        <Hero />
        <Features />

        <section id="get-started" className="py-16 sm:py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-8 rounded-2xl border border-black/10 bg-white/70 p-8 backdrop-blur dark:border-white/10 dark:bg-slate-900/60 sm:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold tracking-tight">Bring your vision to life</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  Start a project, describe your space, and let Atelier IA generate layouts, finishes, and photoreal previews you can iterate on.
                </p>
              </div>
              <div className="flex sm:justify-end">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 dark:bg-white dark:text-slate-900"
                >
                  Create your first room
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
