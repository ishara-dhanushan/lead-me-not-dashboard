import { CalendarDays, Search } from "lucide-react";

export default function DashboardHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-violet-100/80 bg-white/90 px-5 py-5 backdrop-blur-xl sm:px-8 lg:px-10">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-violet-500">
            LeadMeNot Admin
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
            Management Dashboard
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Monitor users, accountability events, protection rules, and
            subscriptions from one workspace.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex h-11 min-w-[260px] items-center gap-3 rounded-2xl border border-violet-100 bg-violet-50/60 px-4">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search users, alerts, reports..."
              className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />
          </div>

          <div className="flex h-11 items-center gap-2 rounded-2xl border border-violet-100 bg-white px-4 text-sm font-semibold text-violet-700">
            <CalendarDays className="h-4 w-4" />
            16 May, 2026
          </div>
        </div>
      </div>
    </header>
  );
}
