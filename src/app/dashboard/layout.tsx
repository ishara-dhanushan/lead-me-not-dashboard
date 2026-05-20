// src/app/dashboard/layout.tsx
"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
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

const CONTEXT_PANEL_WIDTH = 380;
const CONTEXT_PANEL_TRANSITION_MS = 300;

export default function DashboardRouteLayout({
  children,
}: DashboardRouteLayoutProps) {
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [contextPanel, setContextPanel] =
    useState<DashboardContextPanel | null>(null);
  const [isContextPanelOpen, setIsContextPanelOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-close context panel and mobile navigation on route changes
  useEffect(() => {
    closeContextPanel();
    setMobileNavOpen(false);
  }, [pathname]);

  function clearCloseTimeout() {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }

  function openContextPanel(panel: DashboardContextPanel) {
    clearCloseTimeout();
    setContextPanel(panel);

    requestAnimationFrame(() => {
      setIsContextPanelOpen(true);
    });
  }

  function closeContextPanel() {
    setIsContextPanelOpen(false);

    closeTimeoutRef.current = setTimeout(() => {
      setContextPanel(null);
      closeTimeoutRef.current = null;
    }, CONTEXT_PANEL_TRANSITION_MS);
  }

  return (
    <DashboardContextPanelContext.Provider
      value={{
        contextPanel,
        isContextPanelOpen,
        openContextPanel,
        closeContextPanel,
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
          className="grid h-full transition-[grid-template-columns] duration-300 ease-out lg:grid-cols-[248px_minmax(0,1fr)] xl:grid-cols-[248px_minmax(0,1fr)_var(--context-panel-width)]"
          style={
            {
              "--context-panel-width": isContextPanelOpen
                ? `${CONTEXT_PANEL_WIDTH}px`
                : "0px",
            } as React.CSSProperties
          }
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

          <div className="min-h-0 overflow-hidden">
            {contextPanel ? (
              <ContextPanel
                title={contextPanel.title}
                subtitle={contextPanel.subtitle}
                isOpen={isContextPanelOpen}
                onClose={closeContextPanel}
              >
                {contextPanel.content}
              </ContextPanel>
            ) : null}
          </div>
        </div>
      </main>
    </DashboardContextPanelContext.Provider>
  );
}
