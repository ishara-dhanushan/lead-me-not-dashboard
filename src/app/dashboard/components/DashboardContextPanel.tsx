// src/app/dashboard/components/DashboardContextPanel.tsx
"use client";

import { createContext, useContext, type ReactNode } from "react";

export type DashboardContextPanel = {
  title: string;
  subtitle?: string;
  sourceId?: string;
  content: ReactNode;
};

type DashboardContextPanelValue = {
  contextPanel: DashboardContextPanel | null;
  isContextPanelOpen: boolean;
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
