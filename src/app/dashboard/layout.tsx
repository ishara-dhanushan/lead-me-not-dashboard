// src/app/dashboard/layout.tsx
"use client";

import { useState, type ReactNode } from "react";
import ContextPanel from "@/app/dashboard/components/ContextPanel";
import DashboardHeader from "@/app/dashboard/components/DashboardHeader";
import DashboardSidebar from "@/app/dashboard/components/DashboardSidebar";
import {
  DashboardContextPanelContext,
  type DashboardContextPanel,
} from "@/app/dashboard/components/DashboardContextPanel";

type DashboardRouteLayoutProps = {
  children: ReactNode;
};

export default function DashboardRouteLayout({
  children,
}: DashboardRouteLayoutProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [contextPanel, setContextPanel] =
    useState<DashboardContextPanel | null>(null);

  return (
    <DashboardContextPanelContext.Provider
      value={{
        contextPanel,
        openContextPanel: setContextPanel,
        closeContextPanel: () => setContextPanel(null),
      }}
    >
      <main className="h-screen overflow-hidden bg-lmn-bg text-lmn-text">
        <div
          className={`fixed inset-0 z-30 bg-black/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
            mobileNavOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          onClick={() => setMobileNavOpen(false)}
        />

        <div
          className={`grid h-full lg:grid-cols-[248px_minmax(0,1fr)] ${
            contextPanel
              ? "xl:grid-cols-[248px_minmax(0,1fr)_380px]"
              : "xl:grid-cols-[248px_minmax(0,1fr)]"
          }`}
        >
          <DashboardSidebar
            mobileNavOpen={mobileNavOpen}
            onMobileClose={() => setMobileNavOpen(false)}
          />

          <section className="flex min-h-0 min-w-0 flex-col overflow-hidden bg-lmn-bg-soft">
            <DashboardHeader onOpenMobileNav={() => setMobileNavOpen(true)} />

            {/* Page-level spacing belongs to each page, not the layout. */}
            <div className="min-h-0 flex-1 overflow-y-auto">{children}</div>
          </section>

          {contextPanel ? (
            <ContextPanel
              title={contextPanel.title}
              subtitle={contextPanel.subtitle}
              onClose={() => setContextPanel(null)}
            >
              {contextPanel.content}
            </ContextPanel>
          ) : null}
        </div>
      </main>
    </DashboardContextPanelContext.Provider>
  );
}
