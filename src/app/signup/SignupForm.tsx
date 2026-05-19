// src/app/signup/SignupForm.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function SignupForm() {
  return (
    <div className="space-y-5">
      <form className="space-y-3.5">
        <label className="block">
          <span className="text-xs font-medium text-slate-700">Full name</span>
          <input
            type="text"
            placeholder="Admin user"
            className="mt-1 h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
          />
        </label>

        <label className="block">
          <span className="text-xs font-medium text-slate-700">Work email</span>
          <input
            type="email"
            placeholder="admin@leadmenot.org"
            className="mt-1 h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
          />
        </label>

        <label className="block">
          <span className="text-xs font-medium text-slate-700">Admin role</span>
          <select className="mt-1 h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100">
            <option>Support Admin</option>
            <option>Operations Manager</option>
            <option>Subscription Manager</option>
            <option>Super Admin</option>
          </select>
        </label>

        <label className="block">
          <span className="text-xs font-medium text-slate-700">Password</span>
          <input
            type="password"
            placeholder="••••••••"
            className="mt-1 h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
          />
        </label>

        <label className="flex items-start gap-2 text-xs leading-5 text-slate-600">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 rounded border-slate-300"
          />
          I confirm this account is for approved LeadMeNot management use only.
        </label>

        <Link
          href="/dashboard"
          className="flex h-12 w-full items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Create admin account
        </Link>
      </form>

      <div className="flex items-center gap-4">
        <span className="h-px flex-1 bg-slate-200" />
        <span className="text-xs font-medium text-slate-400">Or</span>
        <span className="h-px flex-1 bg-slate-200" />
      </div>

      <button
        type="button"
        className="flex h-12 w-full items-center justify-center gap-3 rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
      >
        <Image
          src="/icons/google-color-icon.svg"
          alt=""
          width={20}
          height={20}
          aria-hidden="true"
        />
        Register with Google
      </button>
    </div>
  );
}
