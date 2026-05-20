// src/app/dashboard/page.tsx
"use client";

import { useMemo, useState } from "react";
import MainOverview from "@/app/dashboard/components/MainOverview";
import MetricCards from "@/app/dashboard/components/MetricCards";
import { useContainerWidth } from "@/hooks/useContainerWidth";

export default function DashboardPage() {
  const [selectedActivityId, setSelectedActivityId] = useState<string | null>(
    null
  );

  const dateLabel = useMemo(
    () =>
      new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(new Date()),
    []
  );

  const { ref: contentRef, width: contentWidth } = useContainerWidth();

  return (
    <div
      ref={contentRef}
      className="min-h-full space-y-6 bg-lmn-bg-soft px-5 py-6 sm:px-7 lg:px-8"
    >
      <section className="flex flex-col justify-between gap-3 border-b border-lmn-border pb-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-medium text-lmn-muted">Super Admin</p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-lmn-text">
            Platform overview
          </h1>
        </div>

        <p className="text-sm text-lmn-muted">{dateLabel}</p>
      </section>

      <MetricCards containerWidth={contentWidth} />

      <MainOverview
        selectedActivityId={selectedActivityId}
        onSelectActivity={setSelectedActivityId}
      />
    </div>
  );
}
