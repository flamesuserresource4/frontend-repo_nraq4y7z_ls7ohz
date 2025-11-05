import { Palette, Wand2, Camera, Ruler } from 'lucide-react';

const features = [
  {
    title: 'AI room generation',
    description:
      'Describe your vision and let the model generate multiple layouts, furnishings, and material palettes in seconds.',
    icon: Wand2,
    color: 'from-indigo-500 to-fuchsia-500',
  },
  {
    title: 'Style transfer',
    description:
      'Apply modern, minimal, Scandinavian, or luxury styles to any space while preserving structure and lighting.',
    icon: Palette,
    color: 'from-rose-500 to-orange-500',
  },
  {
    title: 'Photoreal previews',
    description:
      'High‑fidelity renders with accurate reflections and soft shadows so stakeholders see exactly what they get.',
    icon: Camera,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Precise measurements',
    description:
      'Snap‑to room dimensions, furniture footprints, and scale‑aware suggestions to keep designs realistic.',
    icon: Ruler,
    color: 'from-sky-500 to-cyan-500',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Design faster with intelligent tools
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            From concept to photoreal, Atelier IA accelerates every step while keeping your creative control.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <article
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur transition hover:shadow-xl dark:border-white/10 dark:bg-slate-900/60"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr ${f.color} text-white shadow-sm`}>
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{f.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
