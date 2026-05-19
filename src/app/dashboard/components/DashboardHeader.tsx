import { CalendarDays, Search } from "lucide-react";

export default function DashboardHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-lmn-border bg-lmn-bg-soft/90 px-5 py-5 backdrop-blur-xl sm:px-8 lg:px-10">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-lmn-primary-soft">
            LeadMeNot Admin
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-lmn-text">
            Management Dashboard
          </h1>

          <p className="mt-1 text-sm text-lmn-muted">
            Monitor users, accountability events, protection rules, and
            subscriptions from one workspace.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex h-11 min-w-[260px] items-center gap-3 rounded-2xl border border-lmn-border bg-white px-4">
            <Search className="h-4 w-4 text-lmn-muted-soft" />
            <input
              type="text"
              placeholder="Search users, alerts, reports..."
              className="w-full bg-transparent text-sm text-lmn-text outline-none placeholder:text-lmn-muted-soft"
            />
          </div>

          <div className="flex h-11 items-center gap-2 rounded-2xl border border-lmn-border bg-white px-4 text-sm font-semibold text-lmn-primary">
            <CalendarDays className="h-4 w-4" />
            16 May, 2026
          </div>
        </div>
      </div>
    </header>
  );
}
