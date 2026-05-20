// src/app/dashboard/components/DashboardHeader.tsx
"use client";

import { Bell, Menu, Search, Settings } from "lucide-react";

type DashboardHeaderProps = {
  onOpenMobileNav: () => void;
};

export default function DashboardHeader({
  onOpenMobileNav,
}: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-lmn-border bg-white/85 px-5 py-3 backdrop-blur-xl sm:px-7 lg:px-8">
      <div className="flex h-11 items-center gap-3">
        <button
          type="button"
          onClick={onOpenMobileNav}
          aria-label="Open navigation"
          className="rounded-xl p-2 text-lmn-muted transition hover:bg-lmn-bg hover:text-lmn-primary lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="flex h-10 w-full max-w-md items-center gap-3 rounded-full border border-lmn-border bg-lmn-bg-soft px-4">
          <Search className="h-4 w-4 text-lmn-muted-soft" />
          <input
            type="text"
            placeholder="Search users, alerts, organizations..."
            className="w-full bg-transparent text-sm text-lmn-text outline-none placeholder:text-lmn-muted-soft"
          />
        </div>

        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            aria-label="Notifications"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-lmn-border bg-white text-lmn-muted transition hover:bg-lmn-bg hover:text-lmn-primary sm:flex"
          >
            <Bell className="h-4 w-4" />
          </button>

          <button
            type="button"
            aria-label="Settings"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-lmn-border bg-white text-lmn-muted transition hover:bg-lmn-bg hover:text-lmn-primary sm:flex"
          >
            <Settings className="h-4 w-4" />
          </button>

          <button
            type="button"
            aria-label="Open profile"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-lmn-primary text-sm font-semibold text-white shadow-sm"
          >
            AD
          </button>
        </div>
      </div>
    </header>
  );
}
