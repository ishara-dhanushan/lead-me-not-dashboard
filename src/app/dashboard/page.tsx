// src/app/dashboard/page.tsx
import Link from "next/link";

const stats = [
  { label: "Active Users", value: "2,418" },
  { label: "Partners", value: "764" },
  { label: "Alerts Today", value: "128" },
  { label: "Subscriptions", value: "1,935" },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#f6fbff] px-4 py-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-6xl rounded-[34px] border border-blue-100 bg-white p-6 shadow-[0_24px_80px_rgba(30,64,175,0.10)] sm:p-8">
        <div className="flex flex-col gap-4 border-b border-blue-50 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">
              LeadMeNot Admin
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
              Management Dashboard
            </h1>

            <p className="mt-1 text-sm text-slate-600">
              Dummy admin dashboard for platform management, support, reports,
              and accountability operations.
            </p>
          </div>

          <Link
            href="/login"
            className="rounded-full border border-blue-100 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-blue-50"
          >
            Logout
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-3xl border border-blue-100 bg-blue-50/60 p-5"
            >
              <p className="text-sm text-slate-600">{stat.label}</p>
              <p className="mt-3 text-3xl font-bold text-slate-950">
                {stat.value}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
