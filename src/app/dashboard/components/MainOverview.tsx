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
  review: "bg-amber-50 text-amber-700",
  approved: "bg-emerald-50 text-emerald-700",
  blocked: "bg-rose-50 text-rose-700",
  info: "bg-lmn-bg text-lmn-primary",
};

export default function MainOverview({
  selectedActivityId,
  onSelectActivity,
}: MainOverviewProps) {
  return (
    <div className="mt-6 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
      <section className="rounded-[28px] border border-lmn-border-soft bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-lmn-text">Recent activity</h2>
            <p className="text-sm text-lmn-muted">
              Select an event to preview its context.
            </p>
          </div>

          <button
            type="button"
            className="rounded-full bg-lmn-bg px-3 py-1.5 text-xs font-semibold text-lmn-primary"
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
                    ? "border-lmn-primary-soft/40 bg-lmn-bg shadow-sm"
                    : "border-lmn-border-soft bg-white hover:bg-lmn-bg-soft"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-lmn-text">
                      {activity.user}
                    </p>
                    <p className="mt-1 text-sm text-lmn-muted">
                      {activity.action}
                    </p>
                  </div>

                  <span className="text-xs text-lmn-muted-soft">
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

      <section className="rounded-[28px] border border-lmn-border-soft bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-lmn-text">Managed users</h2>
            <p className="text-sm text-lmn-muted">
              Mock user management table.
            </p>
          </div>

          <MoreHorizontal className="h-5 w-5 text-lmn-muted-soft" />
        </div>

        <div className="mt-5 space-y-3">
          {managedUsers.map((user) => (
            <article
              key={user.email}
              className="flex items-center justify-between rounded-3xl border border-lmn-border-soft bg-white p-4"
            >
              <div>
                <p className="text-sm font-bold text-lmn-text">{user.name}</p>
                <p className="mt-1 text-xs text-lmn-muted">{user.email}</p>
              </div>

              <div className="text-right">
                <p className="text-xs font-semibold text-lmn-muted">
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
