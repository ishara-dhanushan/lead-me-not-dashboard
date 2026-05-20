// src/app/dashboard/[...catchall]/page.tsx
import { notFound } from "next/navigation";

export default function DashboardCatchAll() {
  notFound();
}
