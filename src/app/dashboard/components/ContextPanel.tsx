// src/app/dashboard/components/ContextPanel.tsx
"use client";

import { type ReactNode } from "react";
import { X } from "lucide-react";

type ContextPanelProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export default function ContextPanel({
  title,
  subtitle,
  children,
  isOpen,
  onClose,
}: ContextPanelProps) {
  return (
    <>
      <aside
        className={`hidden h-full min-h-0 w-[380px] flex-col overflow-y-auto border-l border-lmn-border bg-lmn-bg px-5 py-5 transition-[opacity,transform] duration-300 ease-out xl:flex ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
        }`}
      >
        <PanelHeader title={title} subtitle={subtitle} onClose={onClose} />
        {children}
      </aside>

      <div
        className={`fixed inset-0 z-30 bg-black/30 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed inset-y-0 right-0 z-40 flex w-[380px] max-w-[92vw] flex-col overflow-y-auto bg-lmn-bg px-5 py-5 shadow-2xl transition-transform duration-300 ease-out xl:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <PanelHeader title={title} subtitle={subtitle} onClose={onClose} />
        {children}
      </aside>
    </>
  );
}

function PanelHeader({
  title,
  subtitle,
  onClose,
}: {
  title: string;
  subtitle?: string;
  onClose: () => void;
}) {
  return (
    <div className="mb-5 flex items-start justify-between gap-4">
      <div>
        <h2 className="text-base font-semibold text-lmn-text">{title}</h2>

        {subtitle ? (
          <p className="mt-1 text-sm text-lmn-muted">{subtitle}</p>
        ) : null}
      </div>

      <button
        type="button"
        onClick={onClose}
        aria-label="Close context panel"
        className="rounded-xl p-1.5 text-lmn-muted transition hover:bg-white hover:text-lmn-primary"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
}
