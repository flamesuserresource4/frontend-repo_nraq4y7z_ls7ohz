import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[560px] w-full overflow-hidden">
      {/* Spline cover background */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient veil (non-interactive) */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-white/80 via-white/10 to-white/0 dark:from-slate-950/80 dark:via-slate-950/10 dark:to-slate-950/0" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-200">
          <Sparkles className="h-3.5 w-3.5 text-indigo-500" />
          <span>AI-powered interior design studio</span>
        </div>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl dark:text-white sm:text-5xl">
          Atelier IA
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-slate-700 sm:text-lg dark:text-slate-300">
          Visualize, customize, and create your dream spaces with generative AI. Explore layouts, materials, and lighting in a modern, luxury high‑rise aesthetic.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 dark:bg-white dark:text-slate-900"
          >
            Start designing
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-md border border-black/10 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-900 backdrop-blur transition hover:bg-white/90 dark:border-white/10 dark:bg-slate-900/60 dark:text-white dark:hover:bg-slate-900/80"
          >
            See capabilities
          </a>
        </div>
      </div>
    </section>
  );
}
