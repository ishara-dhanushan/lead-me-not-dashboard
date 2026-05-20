// src/app/dashboard/components/dashboard-context-panel.tsx
"use client";

import { createContext, useContext, type ReactNode } from "react";

export type DashboardContextPanel = {
  title: string;
  subtitle?: string;
  content: ReactNode;
};

type DashboardContextPanelValue = {
  contextPanel: DashboardContextPanel | null;
  openContextPanel: (panel: DashboardContextPanel) => void;
  closeContextPanel: () => void;
};

export const DashboardContextPanelContext =
  createContext<DashboardContextPanelValue | null>(null);

export function useDashboardContextPanel() {
  const context = useContext(DashboardContextPanelContext);

  if (!context) {
    throw new Error(
      "useDashboardContextPanel must be used inside dashboard/layout.tsx."
    );
  }

  return context;
}
