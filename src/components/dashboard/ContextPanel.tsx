import {
  Bell,
  CheckCircle2,
  Clock,
  ShieldAlert,
  UserRound,
} from "lucide-react";
import type { ActivityItem } from "@/types/dashboard";

type ContextPanelProps = {
  activity: ActivityItem;
};

const statusConfig = {
  review: {
    label: "Needs review",
    icon: Clock,
    className: "bg-amber-50 text-amber-700 ring-amber-100",
  },
  approved: {
    label: "Approved",
    icon: CheckCircle2,
    className: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  },
  blocked: {
    label: "Blocked alert",
    icon: ShieldAlert,
    className: "bg-rose-50 text-rose-700 ring-rose-100",
  },
  info: {
    label: "Information",
    icon: Bell,
    className: "bg-violet-50 text-violet-700 ring-violet-100",
  },
};

export default function ContextPanel({ activity }: ContextPanelProps) {
  const config = statusConfig[activity.status];
  const StatusIcon = config.icon;

  return (
    <aside className="hidden min-h-screen bg-[#fbfaff] px-5 py-6 xl:block">
      <div className="rounded-[28px] border border-violet-100 bg-white p-5 text-center shadow-sm">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-violet-100 text-violet-700">
          <UserRound className="h-9 w-9" />
        </div>

        <h2 className="mt-4 text-lg font-bold text-slate-950">
          {activity.user}
        </h2>

        <p className="mt-1 text-sm text-slate-500">Selected context</p>

        <div
          className={`mx-auto mt-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ring-1 ${config.className}`}
        >
          <StatusIcon className="h-3.5 w-3.5" />
          {config.label}
        </div>
      </div>

      <div className="mt-5 rounded-[28px] border border-violet-100 bg-white p-5 shadow-sm">
        <h3 className="text-sm font-bold text-slate-950">Activity details</h3>

        <div className="mt-4 rounded-3xl bg-violet-50 p-4">
          <p className="text-sm font-semibold text-slate-950">
            {activity.action}
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            {activity.details}
          </p>
        </div>

        <dl className="mt-5 space-y-3 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-slate-500">Time</dt>
            <dd className="font-semibold text-slate-900">{activity.time}</dd>
          </div>

          <div className="flex justify-between gap-4">
            <dt className="text-slate-500">Source</dt>
            <dd className="font-semibold text-slate-900">Admin event log</dd>
          </div>

          <div className="flex justify-between gap-4">
            <dt className="text-slate-500">Priority</dt>
            <dd className="font-semibold text-slate-900">Medium</dd>
          </div>
        </dl>
      </div>

      <div className="mt-5 rounded-[28px] bg-slate-950 p-5 text-white shadow-sm">
        <p className="text-sm font-bold">Quick actions</p>

        <div className="mt-4 grid gap-2">
          <button
            type="button"
            className="rounded-2xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-950"
          >
            Review event
          </button>

          <button
            type="button"
            className="rounded-2xl bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/15"
          >
            Open user profile
          </button>
        </div>
      </div>
    </aside>
  );
}
