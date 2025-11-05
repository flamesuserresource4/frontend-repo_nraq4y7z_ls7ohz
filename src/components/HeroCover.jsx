import Spline from "@splinetool/react-spline";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function HeroCover() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Subtle gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />

      {/* Foreground content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            New: AI-powered photorealistic renderings
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Design interiors with intelligence and imagination
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-700 sm:text-xl">
            Atelier IA blends a hands-on 3D studio with generative AI to help you
            plan, style, and visualize your dream spaces in minutes.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#studio"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-white shadow hover:bg-slate-800"
            >
              Launch Studio <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#workshop"
              className="inline-flex items-center gap-2 rounded-lg bg-white/80 px-5 py-3 text-slate-900 ring-1 ring-slate-200 backdrop-blur hover:bg-white"
            >
              <PlayCircle className="h-5 w-5" /> Watch Training
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
