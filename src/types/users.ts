// src/types/users.ts
export type UserStatus = "Active" | "Review" | "Paused";
export type UserRiskLevel = "Low" | "Medium" | "High";

export type UserDevice = {
  id: string;
  type: "iPhone" | "Android" | "Windows" | "Mac";
  os: string;
  appVersion: string;
  lastActive: string;
  lastSync: string;
  status: "Online" | "Idle" | "Offline";
  monitoringEnabled: boolean;
  safeWallEnabled: boolean;
};

export type UserTriggerEvent = {
  id: string;
  type:
    | "Website block"
    | "Keyword detection"
    | "App violation"
    | "Safe Wall request"
    | "Device disconnect";
  severity: UserRiskLevel;
  time: string;
  summary: string;
};

export type ManagedUser = {
  id: string;
  name: string;
  email: string;
  plan: "Basic" | "Family" | "Premium" | "Organization";
  status: UserStatus;
  organization: string;
  assignedPartner: string;
  devicesCount: number;
  triggersThisWeek: number;
  recoveryStreak: string;
  lastActive: string;
  riskLevel: UserRiskLevel;
  ruleSummary: string;
  devices: UserDevice[];
  triggerHistory: UserTriggerEvent[];
};
