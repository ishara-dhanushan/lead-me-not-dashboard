import { metrics } from "./dashboard-data";

const toneClasses = {
  purple: "bg-lmn-bg text-lmn-primary ring-lmn-border",
  green: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  amber: "bg-amber-50 text-amber-700 ring-amber-100",
  blue: "bg-lmn-bg text-lmn-primary-soft ring-lmn-border",
};

export default function MetricCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => (
        <article
          key={metric.label}
          className="rounded-3xl border border-lmn-border-soft bg-white p-5 shadow-sm"
        >
          <p className="text-sm text-lmn-muted">{metric.label}</p>

          <div className="mt-3 flex items-end justify-between">
            <p className="text-3xl font-bold text-lmn-text">{metric.value}</p>

            <span
              className={`rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${
                toneClasses[metric.tone]
              }`}
            >
              {metric.change}
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}
