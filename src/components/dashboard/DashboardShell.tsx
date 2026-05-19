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
    <main className="min-h-screen bg-[#f4f1ff] text-slate-950">
      <div className="grid min-h-screen lg:grid-cols-[260px_minmax(0,1fr)_360px]">
        <DashboardSidebar />

        <section className="min-w-0 border-x border-violet-100/80 bg-white">
          <DashboardHeader />

          <div className="px-5 pb-8 pt-5 sm:px-8 lg:px-10">
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
