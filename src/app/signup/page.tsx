// src/app/signup/page.tsx
import Image from "next/image";
import Link from "next/link";
import SignupForm from "./SignupForm";

export default function SignupPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 px-4 py-6 sm:px-6 lg:px-8">
      <Image
        src="/images/auth-hero.png"
        alt="LeadMeNot admin registration background"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-linear-to-b from-white/25 via-blue-950/20 to-blue-950/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#dbeafe_0%,transparent_42%)] opacity-70" />

      <div className="relative z-10 flex min-h-[calc(100vh-3rem)] items-center justify-center">
        <section className="w-full max-w-md rounded-[30px] border border-white/50 bg-white/90 p-6 shadow-[0_24px_90px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:p-8">
          <div className="mb-7 text-center">
            <Link
              href="/"
              className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl font-black text-blue-600 ring-1 ring-blue-100"
            >
              L
            </Link>

            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              LeadMeNot Admin
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Register admin
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Create a secure internal account for approved LeadMeNot management
              team members.
            </p>
          </div>

          <SignupForm />

          <p className="mt-6 text-center text-sm text-slate-600">
            Already have access?{" "}
            <Link
              href="/login"
              className="font-semibold text-blue-700 hover:text-blue-800"
            >
              Login
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
