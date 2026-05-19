// src/app/dashboard/components/DashboardSidebar.tsx
import Image from "next/image";
import Link from "next/link";
import { LogOut, X } from "lucide-react";
import { navItems } from "./dashboard-data";

type DashboardSidebarProps = {
  mobileNavOpen: boolean;
  onMobileClose: () => void;
};

export default function DashboardSidebar({
  mobileNavOpen,
  onMobileClose,
}: DashboardSidebarProps) {
  return (
    <>
      {/* DESKTOP (lg+): Plain grid column — always visible, no toggle/close.
          Users navigate with it always present. */}
      <aside className="hidden h-full flex-col overflow-y-auto bg-lmn-bg px-5 py-6 lg:flex">
        <Link href="/" className="flex items-center">
          <Image
            src="/icons/lead-me-not-full-logo.svg"
            alt="LeadMeNot"
            width={132}
            height={54}
            priority
            className="h-12 w-auto"
          />
        </Link>

        <NavContent />
      </aside>

      {/* MOBILE (<lg): Fixed overlay drawer sliding from left.
          Has X close button, hidden via -translate-x-full when closed. */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-[260px] flex-col overflow-y-auto bg-lmn-bg px-5 py-6 shadow-2xl transition-transform duration-300 lg:hidden ${
          mobileNavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/icons/lead-me-not-full-logo.svg"
              alt="LeadMeNot"
              width={132}
              height={54}
              priority
              className="h-12 w-auto"
            />
          </Link>

          <button
            type="button"
            onClick={onMobileClose}
            aria-label="Close navigation"
            className="rounded-xl p-1.5 text-lmn-muted transition hover:bg-white hover:text-lmn-primary"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <NavContent />
      </aside>
    </>
  );
}

function NavContent() {
  return (
    <>
      <nav className="mt-10 space-y-1.5">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = index === 0;

          return (
            <button
              key={item.label}
              type="button"
              className={`flex w-full items-center justify-between rounded-2xl px-3 py-3 text-sm font-medium transition ${
                isActive
                  ? "bg-lmn-primary text-white shadow-lg shadow-lmn-primary/20"
                  : "text-lmn-muted hover:bg-white hover:text-lmn-primary"
              }`}
            >
              <span className="flex items-center gap-3">
                <Icon className="h-4 w-4" />
                {item.label}
              </span>

              {item.count ? (
                <span
                  className={`rounded-full px-2 py-0.5 text-xs ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-white text-lmn-primary"
                  }`}
                >
                  {item.count}
                </span>
              ) : null}
            </button>
          );
        })}
      </nav>

      <div className="mt-auto shrink-0 rounded-3xl border border-lmn-border bg-white/70 p-4">
        <p className="text-sm font-bold text-lmn-text">Admin Reminder</p>
        <p className="mt-1 text-xs leading-5 text-lmn-muted">
          Review partner approval requests before applying account changes.
        </p>
      </div>

      <Link
        href="/login"
        className="mt-4 shrink-0 flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium text-lmn-muted transition hover:bg-white hover:text-lmn-primary"
      >
        <LogOut className="h-4 w-4" />
        Logout
      </Link>
    </>
  );
}
