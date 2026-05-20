// src/app/dashboard/components/MetricCards.tsx
import { metrics } from "./dashboard-data";

const toneClasses = {
  purple: "border-lmn-primary/20 bg-lmn-bg text-lmn-primary",
  green: "border-emerald-200 bg-emerald-50 text-emerald-700",
  amber: "border-amber-200 bg-amber-50 text-amber-700",
  blue: "border-blue-200 bg-blue-50 text-blue-700",
};

type MetricCardsProps = { containerWidth: number };

export default function MetricCards({ containerWidth }: MetricCardsProps) {
  const cols =
    containerWidth === 0
      ? "grid-cols-1 md:grid-cols-2 2xl:grid-cols-3"
      : containerWidth >= 980
        ? "grid-cols-3"
        : containerWidth >= 640
          ? "grid-cols-2"
          : "grid-cols-1";

  return (
    <div className={`grid gap-4 ${cols}`}>
      {metrics.map((metric) => (
        <article
          key={metric.label}
          className="rounded-2xl border border-lmn-border bg-white px-5 py-4"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[13px] font-medium text-lmn-muted">
                {metric.label}
              </p>

              <p className="mt-3 text-3xl font-semibold tracking-tight text-lmn-text">
                {metric.value}
              </p>
            </div>

            <span
              className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${
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
