// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6fbff] px-4">
      <section className="w-full max-w-md rounded-[32px] border border-blue-100 bg-white p-8 text-center shadow-[0_24px_70px_rgba(30,64,175,0.12)]">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">
          LeadMeNot Admin
        </p>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
          Management Portal
        </h1>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          Access the internal dashboard for users, accountability partners,
          reports, subscriptions, and platform protection settings.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <Link
            href="/login"
            className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="rounded-full border border-blue-100 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-blue-50"
          >
            Register
          </Link>
        </div>
      </section>
    </main>
  );
}
