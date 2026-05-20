// src/app/dashboard/not-found.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileQuestion, Home } from "lucide-react";

export default function DashboardNotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
        className="max-w-md rounded-2xl border border-lmn-border bg-white p-8 shadow-sm"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-lmn-bg text-lmn-primary">
          <FileQuestion className="h-8 w-8 animate-pulse" />
        </div>

        <h1 className="mt-6 text-2xl font-bold tracking-tight text-lmn-text">
          Page not found
        </h1>

        <p className="mt-3 text-sm leading-6 text-lmn-muted">
          We couldn&apos;t find the page you&apos;re looking for. It might have
          been moved, deleted, or never existed in the admin platform.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 rounded-xl bg-lmn-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-lmn-primary-soft"
          >
            <Home className="h-4 w-4" />
            Back to dashboard
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
