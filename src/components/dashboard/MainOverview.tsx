import { MoreHorizontal } from "lucide-react";
import { activities, managedUsers } from "./dashboard-data";

type MainOverviewProps = {
  selectedActivityId: string;
  onSelectActivity: (activityId: string) => void;
};

const statusStyles = {
  Active: "bg-emerald-50 text-emerald-700",
  Review: "bg-amber-50 text-amber-700",
  Paused: "bg-slate-100 text-slate-600",
};

const activityStyles = {
  review: "bg-amber-100 text-amber-700",
  approved: "bg-emerald-100 text-emerald-700",
  blocked: "bg-rose-100 text-rose-700",
  info: "bg-violet-100 text-violet-700",
};

export default function MainOverview({
  selectedActivityId,
  onSelectActivity,
}: MainOverviewProps) {
  return (
    <div className="mt-6 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
      <section className="rounded-[28px] border border-violet-100/70 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-950">
              Recent activity
            </h2>
            <p className="text-sm text-slate-500">
              Select an event to preview its context.
            </p>
          </div>

          <button
            type="button"
            className="rounded-full bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-700"
          >
            Today
          </button>
        </div>

        <div className="mt-5 space-y-3">
          {activities.map((activity) => {
            const isSelected = selectedActivityId === activity.id;

            return (
              <button
                key={activity.id}
                type="button"
                onClick={() => onSelectActivity(activity.id)}
                className={`w-full rounded-3xl border p-4 text-left transition ${
                  isSelected
                    ? "border-violet-200 bg-violet-50 shadow-sm"
                    : "border-slate-100 bg-white hover:bg-slate-50"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-slate-950">
                      {activity.user}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      {activity.action}
                    </p>
                  </div>

                  <span className="text-xs text-slate-400">
                    {activity.time}
                  </span>
                </div>

                <span
                  className={`mt-3 inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                    activityStyles[activity.status]
                  }`}
                >
                  {activity.status}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="rounded-[28px] border border-violet-100/70 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-950">Managed users</h2>
            <p className="text-sm text-slate-500">
              Mock user management table.
            </p>
          </div>

          <MoreHorizontal className="h-5 w-5 text-slate-400" />
        </div>

        <div className="mt-5 space-y-3">
          {managedUsers.map((user) => (
            <article
              key={user.email}
              className="flex items-center justify-between rounded-3xl border border-slate-100 bg-white p-4"
            >
              <div>
                <p className="text-sm font-bold text-slate-950">{user.name}</p>
                <p className="mt-1 text-xs text-slate-500">{user.email}</p>
              </div>

              <div className="text-right">
                <p className="text-xs font-semibold text-slate-500">
                  {user.plan}
                </p>
                <span
                  className={`mt-1 inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                    statusStyles[user.status]
                  }`}
                >
                  {user.status}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
