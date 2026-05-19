// src/app/dashboard/components/MetricCards.tsx
import { metrics } from "./dashboard-data";

const toneClasses = {
  purple: "bg-lmn-bg text-lmn-primary ring-lmn-border",
  green: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  amber: "bg-amber-50 text-amber-700 ring-amber-100",
  blue: "bg-lmn-bg text-lmn-primary-soft ring-lmn-border",
};

type MetricCardsProps = { containerWidth: number };

export default function MetricCards({ containerWidth }: MetricCardsProps) {
  const cols = containerWidth >= 700 ? "grid-cols-4" : "grid-cols-2";

  return (
    <div className={`grid gap-4 ${cols}`}>
      {metrics.map((metric) => (
        <article
          key={metric.label}
          className="rounded-3xl border border-lmn-border-soft bg-white p-5 shadow-sm"
        >
          <p className="text-sm text-lmn-muted">{metric.label}</p>

          <div className="mt-3 flex items-end justify-between gap-2">
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
