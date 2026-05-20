// src/app/dashboard/components/MainOverview.tsx
import { MoreHorizontal } from "lucide-react";
import { activities } from "./dashboard-data";

type MainOverviewProps = {
  selectedActivityId: string | null;
  onSelectActivity: (activityId: string) => void;
};

const activityStyles = {
  review: "bg-amber-50 text-amber-700",
  approved: "bg-emerald-50 text-emerald-700",
  blocked: "bg-rose-50 text-rose-700",
  info: "bg-lmn-bg text-lmn-primary",
};

const platformBreakdown = [
  { label: "iOS", value: "28,104", percentage: "45%", width: "w-[45%]" },
  { label: "Android", value: "22,880", percentage: "37%", width: "w-[37%]" },
  { label: "Web", value: "11,426", percentage: "18%", width: "w-[18%]" },
];

export default function MainOverview({
  selectedActivityId,
  onSelectActivity,
}: MainOverviewProps) {
  return (
    <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
      <section className="rounded-2xl border border-lmn-border bg-white p-5">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-base font-semibold text-lmn-text">
              Platform breakdown
            </h2>
            <p className="mt-1 text-sm text-lmn-muted">
              Active monitored devices by platform.
            </p>
          </div>

          <MoreHorizontal className="h-5 w-5 text-lmn-muted-soft" />
        </div>

        <div className="mt-6 space-y-5">
          {platformBreakdown.map((platform) => (
            <div key={platform.label}>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium text-lmn-text">
                  {platform.label}
                </span>
                <span className="text-lmn-muted">
                  {platform.value} · {platform.percentage}
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-lmn-bg">
                <div
                  className={`h-full rounded-full bg-lmn-primary ${platform.width}`}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-lmn-border bg-white p-5">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-base font-semibold text-lmn-text">
              Recent activity
            </h2>
            <p className="mt-1 text-sm text-lmn-muted">
              Latest accountability and platform events.
            </p>
          </div>

          <button
            type="button"
            className="rounded-lg border border-lmn-border px-3 py-1.5 text-xs font-medium text-lmn-muted transition hover:bg-lmn-bg"
          >
            View all
          </button>
        </div>

        <div className="mt-5 divide-y divide-lmn-border">
          {activities.map((activity) => {
            const isSelected = selectedActivityId === activity.id;

            return (
              <button
                key={activity.id}
                type="button"
                onClick={() => onSelectActivity(activity.id)}
                className={`flex w-full items-center justify-between gap-5 py-4 text-left transition ${
                  isSelected ? "bg-lmn-bg px-3" : "hover:bg-lmn-bg-soft"
                }`}
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-lmn-text">
                    {activity.user}
                  </p>
                  <p className="mt-1 truncate text-sm text-lmn-muted">
                    {activity.action}
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-3">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                      activityStyles[activity.status]
                    }`}
                  >
                    {activity.status}
                  </span>
                  <span className="w-16 text-right text-xs text-lmn-muted">
                    {activity.time}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}
