// src/app/dashboard/page.tsx
import type { Metadata } from "next";
import DashboardWorkspace from "@/app/dashboard/components/DashboardWorkspace";

export const metadata: Metadata = {
  title: "Dashboard | LeadMeNot Admin",
  description: "LeadMeNot platform overview and recent activity.",
};

export default function DashboardPage() {
  return <DashboardWorkspace />;
}
