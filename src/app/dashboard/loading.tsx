// src/app/dashboard/loading.tsx
import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-[420px] items-center justify-center">
      <div className="rounded-3xl border border-lmn-border bg-white px-8 py-7 text-center shadow-sm">
        <LoaderCircle className="mx-auto h-7 w-7 animate-spin text-lmn-primary" />
        <p className="mt-4 text-sm font-semibold text-lmn-text">Please wait</p>
        <p className="mt-1 text-sm text-lmn-muted">
          Preparing dashboard workspace...
        </p>
      </div>
    </div>
  );
}
