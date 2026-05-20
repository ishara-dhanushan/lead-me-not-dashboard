// src/app/dashboard/components/DashboardSidebar.tsx
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
      <aside className="hidden h-screen min-h-0 flex-col border-r border-lmn-border bg-lmn-bg lg:flex">
        <div className="shrink-0 px-4 py-5">
          <Link href="/dashboard" className="flex items-center px-2">
            <Image
              src="/icons/lead-me-not-full-logo.svg"
              alt="LeadMeNot"
              width={132}
              height={54}
              priority
              className="h-10 w-auto"
            />
          </Link>
        </div>

        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-4 pb-4">
          <NavContent />
        </div>
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
  const pathname = usePathname();

  return (
    <>
      <nav className="mt-8 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === "/dashboard"
              ? pathname === item.href
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`group flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                isActive
                  ? "bg-lmn-primary/10 text-lmn-primary shadow-sm"
                  : "text-lmn-muted hover:bg-lmn-bg-soft hover:text-lmn-primary"
              }`}
            >
              <span className="flex items-center gap-3">
                <Icon className="h-4 w-4" />
                {item.label}
              </span>

              {item.count ? (
                <span className="rounded-full bg-white px-2 py-0.5 text-xs text-lmn-primary">
                  {item.count}
                </span>
              ) : null}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto rounded-2xl border border-lmn-border bg-lmn-bg-soft p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lmn-muted">
          System status
        </p>
        <p className="mt-2 text-sm font-semibold text-lmn-primary">Healthy</p>
      </div>

      <Link
        href="/login"
        className="mt-3 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-lmn-muted transition hover:bg-lmn-bg-soft hover:text-lmn-primary"
      >
        <LogOut className="h-4 w-4" />
        Logout
      </Link>
    </>
  );
}
