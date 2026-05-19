import Image from "next/image";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { navItems } from "./dashboard-data";

export default function DashboardSidebar() {
  return (
    <aside className="hidden min-h-screen bg-[#fbfaff] px-5 py-6 lg:flex lg:flex-col">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/icons/lead-me-not-full-logo.svg"
          alt="LeadMeNot"
          width={124}
          height={48}
          priority
          className="h-11 w-auto"
        />
      </Link>

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
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-200"
                  : "text-slate-600 hover:bg-violet-50 hover:text-violet-700"
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
                      : "bg-violet-100 text-violet-700"
                  }`}
                >
                  {item.count}
                </span>
              ) : null}
            </button>
          );
        })}
      </nav>

      <div className="mt-auto rounded-3xl border border-violet-100 bg-violet-50 p-4">
        <p className="text-sm font-bold text-slate-950">Admin Reminder</p>
        <p className="mt-1 text-xs leading-5 text-slate-500">
          Review partner approval requests before applying account changes.
        </p>
      </div>

      <Link
        href="/login"
        className="mt-4 flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
      >
        <LogOut className="h-4 w-4" />
        Logout
      </Link>
    </aside>
  );
}
