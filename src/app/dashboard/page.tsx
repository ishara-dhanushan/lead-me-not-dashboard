// src/app/dashboard/page.tsx
"use client";

import { useState } from "react";
import MainOverview from "@/app/dashboard/components/MainOverview";
import MetricCards from "@/app/dashboard/components/MetricCards";
import { useContainerWidth } from "@/hooks/useContainerWidth";

export default function DashboardPage() {
  const [selectedActivityId, setSelectedActivityId] = useState<string | null>(
    null
  );

  const { ref: contentRef, width: contentWidth } = useContainerWidth();

  return (
    <div ref={contentRef} className="space-y-6">
      <section>
        <p className="text-sm font-medium text-lmn-muted">Dashboard</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-lmn-text">
          Platform overview
        </h1>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-lmn-muted">
          Monitor users, accountability activity, alerts, and organization
          health from one workspace.
        </p>
      </section>

      <MetricCards containerWidth={contentWidth} />

      <MainOverview
        selectedActivityId={selectedActivityId}
        onSelectActivity={setSelectedActivityId}
      />
    </div>
  );
}
