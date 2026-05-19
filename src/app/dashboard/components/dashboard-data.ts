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
import type {
  ActivityItem,
  ManagedUser,
  Metric,
  NavItem,
} from "@/types/dashboard";

export const navItems: NavItem[] = [
  { label: "Overview", icon: Home },
  { label: "Users", icon: Users, count: 18 },
  { label: "Protection Rules", icon: ShieldCheck },
  { label: "Alerts", icon: Bell, count: 7 },
  { label: "Subscriptions", icon: CreditCard },
  { label: "Reports", icon: FileText },
  { label: "Support", icon: LifeBuoy },
  { label: "Settings", icon: Settings },
];

export const metrics: Metric[] = [
  { label: "Active Users", value: "2,418", change: "+12.4%", tone: "purple" },
  { label: "Alerts Today", value: "128", change: "-8.1%", tone: "amber" },
  { label: "Partners", value: "764", change: "+6.8%", tone: "green" },
  { label: "Subscriptions", value: "1,935", change: "+4.2%", tone: "blue" },
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

export const managedUsers: ManagedUser[] = [
  {
    name: "Megan Norton",
    email: "megan@example.com",
    plan: "Premium",
    status: "Review",
  },
  {
    name: "Floyd Miles",
    email: "floyd@example.com",
    plan: "Family",
    status: "Active",
  },
  {
    name: "Guy Hawkins",
    email: "guy@example.com",
    plan: "Premium",
    status: "Active",
  },
  {
    name: "Kristin Watson",
    email: "kristin@example.com",
    plan: "Basic",
    status: "Paused",
  },
];
