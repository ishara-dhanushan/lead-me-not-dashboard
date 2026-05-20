// src/app/dashboard/layout.tsx
import type { ReactNode } from "react";
import DashboardLayout from "@/app/dashboard/components/DashboardLayout";

type DashboardRouteLayoutProps = {
  children: ReactNode;
};

export default function DashboardRouteLayout({
  children,
}: DashboardRouteLayoutProps) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
