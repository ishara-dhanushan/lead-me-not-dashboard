"use client";

import Image from "next/image";
import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="space-y-5">
      <form className="space-y-4">
        <label className="block">
          <span className="text-xs font-medium text-slate-700">
            Admin email
          </span>
          <input
            type="email"
            placeholder="admin@leadmenot.org"
            className="mt-1 h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
          />
        </label>

        <label className="block">
          <span className="text-xs font-medium text-slate-700">Password</span>
          <input
            type="password"
            placeholder="••••••••"
            className="mt-1 h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
          />
        </label>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-slate-600">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-slate-300"
            />
            Keep me signed in
          </label>

          <button
            type="button"
            className="font-medium text-slate-700 hover:text-slate-950"
          >
            Forgot password?
          </button>
        </div>

        <Link
          href="/dashboard"
          className="flex h-12 w-full items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Login
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
        Continue with Google
      </button>
    </div>
  );
}
