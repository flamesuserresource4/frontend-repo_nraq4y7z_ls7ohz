import { ShieldCheck, GraduationCap, Cube, Sparkles, Upload, Ruler } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Account & Dashboard",
    desc:
      "Create an account or try as a guest. Your personal dashboard is the hub for projects and renderings.",
    id: "auth",
  },
  {
    icon: GraduationCap,
    title: "Guided Training Workshop",
    desc:
      "Step-by-step onboarding covers design principles and the 3D canvas so you feel confident from day one.",
    id: "workshop",
  },
  {
    icon: Cube,
    title: "Interactive 3D Studio",
    desc:
      "Draw walls, place furniture, and shape your layout directly on the canvas with precision tools.",
    id: "studio",
  },
  {
    icon: Sparkles,
    title: "AI Style & Rendering",
    desc:
      "Share your style, palette, and mood board. Generate photoreal images from your 3D layout in a click.",
    id: "ai",
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
          <Upload className="h-3.5 w-3.5" /> Bring your floor plan
        </span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          From floor plan to photoreal in four steps
        </h2>
        <p className="mt-3 text-slate-600">
          Atelier IA bridges the gap between vision and reality with a toolkit built for speed and clarity.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, desc, id }, idx) => (
          <div
            key={id}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-slate-900 to-slate-700 opacity-10" />
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white shadow-sm">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate-900">
              <Ruler className="h-4 w-4 text-slate-500" /> Step {idx + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
