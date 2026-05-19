"use client";

import { useState } from "react";
import ContextPanel from "./ContextPanel";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import MainOverview from "./MainOverview";
import MetricCards from "./MetricCards";
import { activities } from "./dashboard-data";

export default function DashboardShell() {
  const [selectedActivityId, setSelectedActivityId] = useState(
    activities[0].id
  );

  const selectedActivity =
    activities.find((activity) => activity.id === selectedActivityId) ??
    activities[0];

  return (
    <main className="h-screen overflow-hidden bg-lmn-bg text-lmn-text">
      <div className="grid h-full lg:grid-cols-[260px_minmax(0,1fr)] xl:grid-cols-[260px_minmax(0,1fr)_360px]">
        <DashboardSidebar />

        <section className="flex min-w-0 flex-col overflow-hidden border-x border-lmn-border bg-lmn-bg-soft">
          <DashboardHeader />

          <div className="flex-1 overflow-y-auto px-5 pb-8 pt-5 sm:px-8 lg:px-10">
            <MetricCards />

            <MainOverview
              selectedActivityId={selectedActivityId}
              onSelectActivity={setSelectedActivityId}
            />
          </div>
        </section>

        <ContextPanel activity={selectedActivity} />
      </div>
    </main>
  );
}
