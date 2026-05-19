// src/app/dashboard/components/DashboardHeader.tsx
"use client";

import { CalendarDays, Menu, Search } from "lucide-react";

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

type DashboardHeaderProps = {
  onOpenMobileNav: () => void;
};

export default function DashboardHeader({
  onOpenMobileNav,
}: DashboardHeaderProps) {
  const today = new Date(Date.now());
  const formattedDate = formatDate(today);

  return (
    <header className="sticky top-0 z-20 border-b border-lmn-border bg-lmn-bg-soft/90 px-5 py-5 backdrop-blur-xl sm:px-8 lg:px-10">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-start gap-3">
          {/* Hamburger — only visible on mobile (<lg), where sidebar is hidden by default */}
          <button
            type="button"
            onClick={onOpenMobileNav}
            aria-label="Open navigation"
            className="mt-1 shrink-0 rounded-xl p-2 pr-4 text-lmn-muted transition hover:bg-lmn-bg hover:text-lmn-primary lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>

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
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex h-11 sm:flex-1 min-w-[260px] items-center gap-3 rounded-2xl border border-lmn-border bg-white px-4">
            <Search className="h-4 w-4 text-lmn-muted-soft" />
            <input
              type="text"
              placeholder="Search users, alerts, reports..."
              className="w-full bg-transparent text-sm text-lmn-text outline-none placeholder:text-lmn-muted-soft"
            />
          </div>

          <div className="flex h-11 items-center gap-2 rounded-2xl border border-lmn-border bg-white px-4 text-sm font-semibold text-lmn-primary whitespace-nowrap min-w-fit">
            <CalendarDays className="h-4 w-4" />
            {formattedDate}
          </div>
        </div>
      </div>
    </header>
  );
}
