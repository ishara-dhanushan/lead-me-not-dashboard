// src/app/dashboard/components/dashboard-data.ts
import {
  Bell,
  CreditCard,
  FileText,
  Home,
  LifeBuoy,
  Settings,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { ActivityItem, Metric, NavItem } from "@/types/dashboard";

export const navItems: NavItem[] = [
  { label: "Overview", href: "/dashboard", icon: Home },
  { label: "Users", href: "/dashboard/users", icon: Users, count: 18 },
  { label: "Protection Rules", href: "/dashboard/rules", icon: ShieldCheck },
  { label: "Alerts", href: "/dashboard/alerts", icon: Bell, count: 7 },
  {
    label: "Subscriptions",
    href: "/dashboard/subscriptions",
    icon: CreditCard,
  },
  { label: "Reports", href: "/dashboard/reports", icon: FileText },
  { label: "Support", href: "/dashboard/support", icon: LifeBuoy },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export const metrics: Metric[] = [
  { label: "Total users", value: "48,291", change: "+12.4%", tone: "purple" },
  { label: "Active users", value: "31,804", change: "+8.2%", tone: "green" },
  { label: "Device counts", value: "62,410", change: "+1,240", tone: "blue" },
  {
    label: "Trigger events today",
    value: "1,847",
    change: "+6.1%",
    tone: "purple",
  },
  {
    label: "Alerts today",
    value: "94",
    change: "-12 vs yesterday",
    tone: "amber",
  },
  { label: "Organization count", value: "312", change: "+3", tone: "green" },
];

export const activities: ActivityItem[] = [
  {
    id: "act-1",
    user: "Megan Norton",
    action: "requested partner approval",
    time: "10:15 AM",
    status: "review",
    details:
      "Megan requested approval to update her accountability partner. Review the request before applying the change.",
  },
  {
    id: "act-2",
    user: "Floyd Miles",
    action: "triggered a blocked keyword alert",
    time: "09:42 AM",
    status: "blocked",
    details:
      "A restricted keyword attempt was blocked. The event was logged and the accountability partner was notified.",
  },
  {
    id: "act-3",
    user: "Guy Hawkins",
    action: "renewed subscription",
    time: "08:30 AM",
    status: "approved",
    details:
      "The user renewed an active subscription. Billing and access status are now synced.",
  },
  {
    id: "act-4",
    user: "Kristin Watson",
    action: "submitted a support request",
    time: "Yesterday",
    status: "info",
    details:
      "Kristin asked for help with device sync and schedule-based blocking rules.",
  },
];
