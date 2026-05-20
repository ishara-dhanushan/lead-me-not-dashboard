// src/app/dashboard/components/DashboardLayout.tsx
"use client";

import { useState, type ReactNode } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <main className="min-h-screen bg-lmn-bg text-lmn-text">
      <div
        className={`fixed inset-0 z-30 bg-black/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileNavOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileNavOpen(false)}
      />

      <div className="grid h-screen overflow-hidden lg:grid-cols-[248px_minmax(0,1fr)]">
        <DashboardSidebar
          mobileNavOpen={mobileNavOpen}
          onMobileClose={() => setMobileNavOpen(false)}
        />

        <section className="flex min-h-0 min-w-0 flex-col bg-lmn-bg-soft">
          <DashboardHeader onOpenMobileNav={() => setMobileNavOpen(true)} />

          <div className="min-h-0 flex-1 overflow-y-auto">
            <div className="mx-auto w-full max-w-[1440px] px-5 py-6 sm:px-7 lg:px-8">
              {children}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
