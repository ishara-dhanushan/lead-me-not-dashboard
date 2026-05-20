// src/app/dashboard/users/users-data.ts
import type { ManagedUser } from "@/types/users";

export const managedUsers: ManagedUser[] = [
  {
    id: "usr-001",
    name: "Megan Norton",
    email: "megan@example.com",
    plan: "Premium",
    status: "Review",
    organization: "Grace Community Church",
    assignedPartner: "Daniel Reed",
    devicesCount: 3,
    triggersThisWeek: 12,
    recoveryStreak: "4 days",
    lastActive: "12 min ago",
    riskLevel: "Medium",
    ruleSummary:
      "Strict mode enabled, Safe Wall active, keyword monitoring on.",
    devices: [
      {
        id: "dev-001",
        type: "iPhone",
        os: "iOS 18.2",
        appVersion: "2.4.1",
        lastActive: "12 min ago",
        lastSync: "8 min ago",
        status: "Online",
        monitoringEnabled: true,
        safeWallEnabled: true,
      },
      {
        id: "dev-002",
        type: "Windows",
        os: "Windows 11",
        appVersion: "2.3.9",
        lastActive: "Yesterday",
        lastSync: "Yesterday",
        status: "Idle",
        monitoringEnabled: true,
        safeWallEnabled: false,
      },
    ],
    triggerHistory: [
      {
        id: "trg-001",
        type: "Keyword detection",
        severity: "Medium",
        time: "10:15 AM",
        summary: "Restricted keyword attempt blocked by active rule set.",
      },
    ],
  },
  {
    id: "usr-002",
    name: "Floyd Miles",
    email: "floyd@example.com",
    plan: "Family",
    status: "Active",
    organization: "LeadMeNot Direct",
    assignedPartner: "Courtney Henry",
    devicesCount: 2,
    triggersThisWeek: 4,
    recoveryStreak: "11 days",
    lastActive: "34 min ago",
    riskLevel: "Low",
    ruleSummary:
      "Balanced filtering, app monitoring enabled, daily summaries on.",
    devices: [
      {
        id: "dev-003",
        type: "Android",
        os: "Android 15",
        appVersion: "2.4.1",
        lastActive: "34 min ago",
        lastSync: "31 min ago",
        status: "Online",
        monitoringEnabled: true,
        safeWallEnabled: true,
      },
    ],
    triggerHistory: [
      {
        id: "trg-002",
        type: "Website block",
        severity: "Low",
        time: "09:42 AM",
        summary: "Blocked site matched entertainment category restriction.",
      },
    ],
  },
];
