// src/app/dashboard/components/DashboardShell.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import ContextPanel from "./ContextPanel";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import MainOverview from "./MainOverview";
import MetricCards from "./MetricCards";
import { activities } from "./dashboard-data";
import { useContainerWidth } from "@/hooks/useContainerWidth";

// lg breakpoint — where the left sidebar switches from overlay to always-docked
const LG = 1024;
// xl breakpoint — where the right panel switches from drawer to always-docked column
const XL = 1280;

export default function DashboardShell() {
  // null = no card selected, right panel hidden
  const [selectedActivityId, setSelectedActivityId] = useState<string | null>(
    null
  );

  // Controls the mobile (<lg) left sidebar drawer
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const prevWidthRef = useRef<number>(
    typeof window !== "undefined" ? window.innerWidth : LG
  );

  useEffect(() => {
    function onResize() {
      const curr = window.innerWidth;
      const prev = prevWidthRef.current;

      // Crossed UP through lg → entering docked-sidebar territory.
      // Reset mobileNavOpen so it doesn't re-open if the user shrinks again.
      if (prev < LG && curr >= LG) {
        setMobileNavOpen(false);
      }

      prevWidthRef.current = curr;
    }

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const selectedActivity =
    activities.find((a) => a.id === selectedActivityId) ?? activities[0];

  const { ref: contentRef, width: contentWidth } = useContainerWidth();

  function handleSelectActivity(id: string) {
    setSelectedActivityId(id);
  }

  function handleCloseContextPanel() {
    setSelectedActivityId(null);
  }

  const hasSelection = selectedActivityId !== null;

  return (
    <main className="h-screen overflow-hidden bg-lmn-bg text-lmn-text">
      {/* Mobile nav backdrop */}
      <div
        className={`fixed inset-0 z-30 bg-black/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileNavOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileNavOpen(false)}
      />

      {/* Grid layout: base: 1 col (main), lg+: [260px sidebar] [main] (docked),
          xl+: [260px sidebar] [main] [360px panel] (when card selected) */}
      <div
        className={`grid h-full lg:grid-cols-[260px_minmax(0,1fr)] ${
          hasSelection
            ? "xl:grid-cols-[260px_minmax(0,1fr)_360px]"
            : "xl:grid-cols-[260px_minmax(0,1fr)]"
        }`}
      >
        {/* DashboardSidebar: lg+ → grid column (always visible),
            <lg → fixed overlay drawer (controlled by mobileNavOpen) */}
        <DashboardSidebar
          mobileNavOpen={mobileNavOpen}
          onMobileClose={() => setMobileNavOpen(false)}
        />

        <section className="flex min-w-0 flex-col overflow-hidden border-x border-lmn-border bg-lmn-bg-soft">
          <DashboardHeader onOpenMobileNav={() => setMobileNavOpen(true)} />

          <div
            ref={contentRef}
            className="flex-1 overflow-y-auto px-5 pb-8 pt-5 sm:px-8 lg:px-10"
          >
            <MetricCards containerWidth={contentWidth} />

            <MainOverview
              selectedActivityId={selectedActivityId}
              onSelectActivity={handleSelectActivity}
            />
          </div>
        </section>

        {/* ContextPanel: xl+ → docked grid column (visible when hasSelection),
            <xl → fixed drawer from right (open when hasSelection). Closes to clear selection. */}
        {hasSelection && (
          <ContextPanel
            activity={selectedActivity}
            onClose={handleCloseContextPanel}
          />
        )}
      </div>
    </main>
  );
}
