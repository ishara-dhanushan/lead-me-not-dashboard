// src/types/dashboard.ts
import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  icon: LucideIcon;
  count?: number;
};

export type Metric = {
  label: string;
  value: string;
  change: string;
  tone: "purple" | "green" | "amber" | "blue";
};

export type ActivityItem = {
  id: string;
  user: string;
  action: string;
  time: string;
  status: "review" | "approved" | "blocked" | "info";
  details: string;
};

export type ManagedUser = {
  name: string;
  email: string;
  plan: string;
  status: "Active" | "Review" | "Paused";
};
