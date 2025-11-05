import { ArrowRight, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm sm:p-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200">
              <Sparkles className="h-3.5 w-3.5" /> No credit card required
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Start your first project in minutes
            </h3>
            <p className="mt-2 text-slate-600">
              Sign up to save your work across devices, or jump in as a guest to explore the studio right away.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#signup"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-3 font-medium text-white shadow hover:bg-slate-800"
            >
              Create free account <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#studio"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50"
            >
              Try as guest
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
